import React, { useState } from 'react';
import '../App.css';
import ImageModal from './ImageModal';
import { CarouselProps, ImageUrl } from '../types';
import PfeilRechts from '../media/Logos_Grafiken/hac_pfeil_rechts.png'
import PfeilLinks from '../media/Logos_Grafiken/hac_pfeil_links.png'

export default function Carousel({ images }: CarouselProps) {
  const [selectedImage, setSelectedImage] = useState<ImageUrl | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fileName, setFileName] = useState<string>('');


  const openModal = (image: ImageUrl, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    const fileName = image.split('/').pop()?.split('.')[0] || '';
    setFileName(fileName);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
    setFileName('');
    document.body.style.overflow = 'auto';
  };

  const goToPreviousImage = () => {
    // setCurrentImageIndex((prevIndex) => (prevIndex != 0 ? prevIndex - 1 : images.length - 1));
    setCurrentImageIndex((prevIndex) => {
        const newIndex = prevIndex + 3;
        return newIndex >= images.length ? newIndex % images.length : newIndex;
    });
  };

  const goToNextImage = () => {
    // setCurrentImageIndex((prevIndex) => (prevIndex != images.length - 1 ? prevIndex + 1 : 0));
    setCurrentImageIndex((prevIndex) => {
        const newIndex = prevIndex - 3;
        return newIndex < 0 ? images.length + (newIndex % images.length) : newIndex;
    });
  };

  return (
    <div className="carousel">
        <button onClick={goToPreviousImage} id="first">
        <img src={PfeilLinks} alt="Next" />
        </button>
      {/* {images.slice(currentImageIndex, currentImageIndex + 3).map((image, index) => ( */}
      {getCarouselImages(images, currentImageIndex).map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          onClick={() => openModal(image, currentImageIndex)}
          className="carousel-image ${index === currentImageIndex ? 'active' : ''}`"
        />
      ))}
      <button onClick={goToNextImage} id="last">
        <img src={PfeilRechts} alt="Next" />
      </button>
      {selectedImage && <ImageModal image={selectedImage} closeModal={closeModal} fileName={fileName} selectedImageIndex={currentImageIndex} images={images} openModal={openModal}/>}
    </div>
  );
}

// Function to get the subset of images for the Carousel
const getCarouselImages = (images: ImageUrl[], startIndex: number) => {
    const endIndex = startIndex + 3;
    if (endIndex <= images.length) {
      return images.slice(startIndex, endIndex);
    } else {
      return [...images.slice(startIndex), ...images.slice(0, endIndex - images.length)];
    }
  };