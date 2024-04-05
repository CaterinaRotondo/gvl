import Impressum from './components/Impressum'
import Home from './components/Home';
import Datenschutz from './components/Datenschutz';
import './App.css';
import './AppDesktop.css';
import './AppTablet.css';
import './AppMobile.css';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import CookieConsent from "react-cookie-consent";
import Logo from "./media/Logos_Grafiken/gvl_logo_rgb_weiss_gruen.png";
import LogoFooter from "./media/Logos_Grafiken/hac_logo_rgb_weiss_grau.png";
import LogoGVL from "./media/Logos_Grafiken/gvl_logo_rgb_weiss_grau.png";
import Güterstation from "./media/Logos_Grafiken/hac_gueterstation_web_weiss.png"
import MailIconSVG from "./media/Logos_Grafiken/hac_header_email.svg";
import MailIconPNG from "./media/Logos_Grafiken/hac_header_email.png";
import PhoneIconSVG from "./media/Logos_Grafiken/hac_header_tel.svg";
import PhoneIconPNG from "./media/Logos_Grafiken/hac_header_tel.png";
import LocationIconSVG from "./media/Logos_Grafiken/hac_header_location.svg";
import LocationIconPNG from "./media/Logos_Grafiken/hac_header_location.png";
import Hamburger from 'hamburger-react'

export default function App() { 
  return (
    <>
    <CookieConsent
      disableButtonStyles
      buttonText="Akzeptieren"
      disableStyles
      containerClasses='CookieContainer'
      enableDeclineButton
      declineButtonText="Ablehnen"
      buttonClasses='ButtonStyle'
      declineButtonClasses='ButtonStyle'
      flipButtons
      overlay
      overlayClasses='Overlay'
      buttonWrapperClasses='ButtonWrapper'
      contentStyle={{width: "91%", margin: "auto", position: "relative"}}
      >
        <span className='CookieHeader'>Cookie und Datenfreigabe Einstellung</span>
        <span className='CookieContent'>
          Wir nutzen Cookies auf unserer Website. Einige von ihnen sind essenziell für den Betrieb der Seite, während andere uns helfen, 
          diese Website und die Nutzererfahrung zu verbessern (Tracking Cookies). Sie können selbst entscheiden, ob Sie die Cookies zulassen 
          möchten. Bitte beachten Sie, dass bei einer Ablehnung womöglich nicht mehr alle Funktionalitäten der Seite zur Verfügung stehen. <Link to="/Datenschutz" className='InfoLink'>Weitere Informationen</Link>    
        </span>
    </CookieConsent>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Impressum" element={<Impressum />} />
        <Route path="Datenschutz" element={<Datenschutz />} />
      </Routes>
      <Footer />
    </div>
    </>
  );
}

function Header() {
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' })
  const isTabletOrLaptop = useMediaQuery({ query: '(min-width: 760px) and (max-width: 1023px)' })
  const [isOpen, setOpen] = useState(false)  
  const location = useLocation();
  
  const closeBurgerMenu =()=> {
    document.body.style.overflow = 'auto';
    const x = document.getElementById("BurgerMenu")!;
    x.style.display = "none";
    setOpen(false);
  };

  useEffect(() => {
    // if not a hash link, scroll to top
    if (location.hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth'
        });
        }
      }, 0);
    }
  }, [location]); // do this on route change
  
  return (
    <>
      <div id="BurgerMenu" className='BurgerMenu'>
        <div style={{position: "absolute", top: "49px", left: "32px"}}>
          <Link to="/#Projektmanagement" onClick={closeBurgerMenu}>Projektmanagement</Link>
          <hr/>
          <Link to="/#Projektentwicklung" onClick={closeBurgerMenu}>Projektentwicklung</Link>
          <hr/>
          <Link to="/#Baubetreuung" onClick={closeBurgerMenu}>Bauüberwachung</Link>
          <hr/>
          <Link to="/#Controlling" onClick={closeBurgerMenu}>Controlling Plus</Link>
          <hr/>
          <div style={{display: "flex", width: "70%", justifyContent: "space-between"}}> 
            <a href="mailto:office@gvlgmbh.de">
              <picture>
                <source srcSet={MailIconSVG} type="image/svg+xml" />
                <img src={MailIconPNG} alt="E-Mail Icon" width="50px" /> 
              </picture> 
            </a>
            <a href="tel:+4985137934170">
              <picture >
                <source srcSet={PhoneIconSVG} type="image/svg+xml" />
                <img src={PhoneIconPNG} alt="Telefon Icon" width="50px" /> 
              </picture>
            </a>
            <a href="https://www.google.de/maps/dir//Grundverm%C3%B6gen+Lindahof+GmbH,+Blockheizkraftwerk+Bahnhofstra%C3%9Fe,+Bahnhofstra%C3%9Fe+40,+94032+Passau/@48.5717044,13.4474815,16.25z/data=!4m9!4m8!1m0!1m5!1m1!1s0x477458a0e661845d:0xd07eb45cf4242221!2m2!1d13.4480059!2d48.5744622!3e0?entry=ttu" target='_blank' rel="noopener noreferrer">
              <picture>
                <source srcSet={LocationIconSVG} type="image/svg+xml" />
                <img src={LocationIconPNG} alt="Location Icon" width="50px" /> 
              </picture>  
            </a>
          </div>
          
        </div>
      </div>
      <div className='Header' id="Header">
        <Link to="/"><img src={Logo} alt="Logo GVL GmbH" className='LogoPosition' /> </Link>
        {isMobile && <div style={{ position: "absolute", width: "43px", height: "28px;", top: "25px", right: "36px"}}>
          <Hamburger label="Hamburgermenü" distance="lg" rounded color="#AC9B73" toggled={isOpen} toggle={setOpen} onToggle={toggled => {
          var x = document.getElementById("BurgerMenu")!;
          if (toggled) {
              x.style.display = "block";
              x.scrollTo(0,0);
              document.body.style.overflow = 'hidden';
          } else {
              x.style.display = "none";
              document.body.style.overflow = 'auto';
          }
        }} /> 
        </div> }
        {!isMobile && <div className='menue-_-sofia-pro-–-25pt MenuBar'>
          <Link to="/#Projektmanagement"><div style={isTabletOrLaptop ? {paddingRight: "min(3.84vw, 32px)"} : {paddingRight: "min(3.49vw, 67px)"}}>Leistungen</div></Link>
          <Link to="/#Kontakt"><div style={isTabletOrLaptop ? {paddingRight: "min(3.72vw, 31px)"} : {paddingRight: "min(6.15vw, 118px)"}}>Kontakt</div></Link>
            <a href="mailto:office@gvlgmbh.de"><picture style={{paddingRight: "min(2.19vw, 42px)"}}>
                <source srcSet={MailIconSVG} type="image/svg+xml" />
                <img src={MailIconPNG} alt="E-Mail Icon" style={{width: "clamp(25px, 1.98vw, 38px)"}}/> 
            </picture></a>
            <a href="tel:+4985137934170"><picture style={{paddingRight: "min(2.19vw, 42px)"}}>
                <source srcSet={PhoneIconSVG} type="image/svg+xml" />
                <img src={PhoneIconPNG} alt="Telefon Icon" style={{width: "clamp(25px, 1.98vw, 38px)"}} /> 
            </picture></a>
            <a href="https://www.google.de/maps/dir//Grundverm%C3%B6gen+Lindahof+GmbH,+Blockheizkraftwerk+Bahnhofstra%C3%9Fe,+Bahnhofstra%C3%9Fe+40,+94032+Passau/@48.5717044,13.4474815,16.25z/data=!4m9!4m8!1m0!1m5!1m1!1s0x477458a0e661845d:0xd07eb45cf4242221!2m2!1d13.4480059!2d48.5744622!3e0?entry=ttu" target='_blank' rel="noopener noreferrer">
              <picture>
                <source srcSet={LocationIconSVG} type="image/svg+xml" />
                <img src={LocationIconPNG} alt="Location Icon" style={{width: "clamp(25px, 1.98vw, 38px)"}}/> 
            </picture>
            </a>
          </div>}       
      </div>
    </>
  )
}

function Footer() {
  return (
    <>
      <div className='Footer'>
        <div className='ExtraPages'>
          <Link to="/Impressum" className='PageLink'>Impressum</Link> <br />
          <Link to="/Datenschutz" className='PageLink'>Datenschutz</Link>
        </div>
        <img src={Güterstation} alt="Güterstation" className='LogoGüterstation'/>
        <Link to="/"><img src={LogoGVL} alt="Logo gvl grundvermögen lindahof" className='LogoFooter' /></Link> 
        <a href="https://www.ha-consult.de/" target='_blank' rel="noopener noreferrer"><img src={LogoFooter} alt="Logo ha consult" className='LogoGVL'/></a>
      </div>
    </>
  )
}