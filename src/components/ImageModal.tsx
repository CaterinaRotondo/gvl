import React from 'react';
import '../App.css';
import { ImageUrl } from '../types';
import PfeilRechts from '../media/Logos_Grafiken/hac_pfeil_rechts.png'
import PfeilLinks from '../media/Logos_Grafiken/hac_pfeil_links.png'
import CloseButton from '../media/Logos_Grafiken/icons8-close-64.png'

interface ImageModalProps {
    image: ImageUrl;
    fileName: string;
    closeModal: () => void;
    selectedImageIndex: number;  
    openModal: (image: ImageUrl, index: number) => void;  
    images: ImageUrl[];  
  }

const ImageModal: React.FC<ImageModalProps> = ({ image, closeModal, fileName, selectedImageIndex, openModal, images }) => {
  const handlePrevious = () => {
    // Navigate to the previous image
    // Use modulo to loop back to the last image if the current image is the first one
    const newIndex = (selectedImageIndex - 1 + images.length) % images.length;
    openModal(images[newIndex], newIndex);
  };

  const handleNext = () => {
    // Navigate to the next image
    // Use modulo to loop back to the first image if the current image is the last one
    const newIndex = (selectedImageIndex + 1) % images.length;
    openModal(images[newIndex], newIndex);
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button id="modalFirst" onClick={handlePrevious}>
          <img src={PfeilLinks} alt="Previous" />
        </button>
        <img src={image} alt={fileName} className="modal-image" />
        <p>{fileName}</p> {/* Display file name */}
        <button  id="modalLast" onClick={handleNext}>
          <img src={PfeilRechts} alt="Next" />
        </button>
        <button onClick={closeModal} id="modalClose"><img src={CloseButton} alt="Schließen" /></button>
      </div>
    </div>
  );
};

export default ImageModal;