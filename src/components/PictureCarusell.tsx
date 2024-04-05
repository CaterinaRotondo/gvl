import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img1 from "../media/Projekte/Screenshot 360 Grad Lidl Aidenbacher.png";

export default function Bestandsprojekte() {
    return (
        <Slide slidesToScroll={2} slidesToShow={2} indicators={true}>
            <div className='Carousell1'/>
            <div className='Carousell2'/>
<div style={{
    textAlign: 'center',
    fontSize: '30px',
    margin: '0px 50px',
    width: '100px',
    height: '100px',
    backgroundImage: `url(${img1})`,
    backgroundSize: 'cover'
  }}></div>
        <div style={{
    textAlign: 'center',
    background: 'orange',
    fontSize: '30px',
    margin: '0px 50px'
  }}>Second Slide</div>
        </Slide>
    )
}