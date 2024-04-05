import React from "react";
import '../App.css';
import '../AppDesktop.css';
import '../AppTablet.css';
import '../AppMobile.css';
import PfeilPNG from "../media/Logos_Grafiken/hac_hero_pfeil.png";

const colors = ["Hero1", "Hero2", "Hero3", "Hero4"];
const delay = 5000;

export default function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef<any>(null);

  const scrollTo =()=>{
    const element = document.getElementById(index === 0 ? "Projektmanagement" : index === 1 ? "Projektentwicklung" : index === 2 ? "Baubetreuung" : "Controlling");

    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth'
        });
}};  

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="Hero" id="Header">
      <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {colors.map((backgroundColor, index) => (
          <div className={backgroundColor} key={index} />
        ))}
      </div>
<div className="BlockDiv">
      <div className='BigBlock'>
        <div className='FixedCaption'>
            <span className='SmallWhite'> Professionelle </span>
            <span className='PositionBaubetreuung PositionBau'> Bau </span>
            <span className='PositionBaubetreuung PositionBe'> be </span>
            <span className='PositionBaubetreuung PositionTreu'> treu </span>
            <span className='PositionBaubetreuung PositionUng'> ung </span>
        </div>
        
            <div className="BigBlockClickable" onClick={() => scrollTo()}>
                <span className='BigNumberHero'> {index === 0 ? 1 : index === 1 ? 2 : index === 2 ? 3 : 4} </span>
                <span className='Caption'> {index === 0 ? "Willkommen" : index === 1 ? "Bestandsprojekte" : index === 2 ? "Projekte im Bau" : "Projekte in Entwicklung"} </span>
                <img src={PfeilPNG} alt="Pfeil nach unten" className="Pfeil" /> 
            </div>
        </div>

        <div className="CircleDiv">
            {colors.map((_, idx) => (
            <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                setIndex(idx);
                }}
            ></div>
            ))}
        </div>
        </div>
    </div>
  );
}