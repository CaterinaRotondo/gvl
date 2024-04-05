import Slideshow from "./Slideshow";

export default function Home () {

    return(
        <>
            <Slideshow />
            <section className='Projektmanagement'>
                <div className='PicProjektmanagement' />
                <div className='PfeilProjektmanagement' />
                <div className='BoxProjektmanagement' id="Projektmanagement">
                    <span className='BigNumber1_3'>1</span>
                    <span className='Raute1_3'> # </span>
                </div>
                <div className='TextProjektmanagement'>
                    Willkommen
                    <span className='TextPosition'>
                    Wir sind renommierter Projektentwickler für Handelsimmobilien im Lebensmittel- und Drogeriebereich mit Sitz in der Dreiflüssestadt Passau. 
                    Mit großer Erfahrung und einem tiefgreifenden Verständnis für die spezifischen Anforderungen dieser Branche entwickeln wir maßgeschneiderte 
                    Lösungen für unsere Kunden. 
                    Unser Engagement für Qualität, Innovation und Kundenzufriedenheit spiegelt sich in jedem Projekt wider, das wir realisieren. Ob es um den Bau 
                    von Supermärkten, Drogerien, Fachmarktzentren oder anderen Einzelhandelsimmobilien geht, wir setzen auf höchste Standards in Planung, Bauausführung 
                    und Nachbetreuung. 
                    Besonderen Wert legen wir auf eine transparente Kommunikation, Zuverlässigkeit und termingerechte Fertigstellung, um sicherzustellen, dass die 
                    Projekte erfolgreich abgeschlossen werden. 
                    Wir laden Sie ein, nachfolgend mehr über unsere Leistungen und Projekte zu erfahren und freuen uns darauf, Ihnen unsere Handelsimmobilien näher zu bringen. 
                    </span>
                </div>
            </section>
            <section className='Projektentwicklung'>
                <div className='PicProjektentwicklung' />
                <div className='PfeilProjektentwicklung' />
                <div className='BoxProjektentwicklung' id="Projektentwicklung">
                    <span className='BigNumber2_4'>2</span>
                    <span className='Raute2_4'> # </span>
                </div>
                <div className='TextProjektentwicklung'>
                    Bestandsprojekte
                    <span className='TextPosition'>
                    Wir freuen uns, Ihnen unsere erfolgreich abgeschlossenen Handelsimmobilienprojekte präsentieren zu können. 
                    Jedes dieser Projekte ist das Ergebnis harter Arbeit, Hingabe und unseres Engagements für Qualität und Kundenzufriedenheit. 
                    Wir sind stolz darauf, einen Beitrag zur Entwicklung und Modernisierung des Einzelhandelssektors zu leisten und freuen uns darauf, 
                    auch Ihr nächstes Projekt erfolgreich umzusetzen. 
                    </span>
                </div>
            </section>
            <section className='Bauüberwachung'>
            <div className='PicBauüberwachung' />
                <div className='PfeilBauüberwachung' />
                <div className='BoxBauüberwachung' id="Baubetreuung">
                    <span className='BigNumber1_3'>3</span>
                    <span className='Raute1_3'> # </span>
                </div>
                <div className='TextBauüberwachung'>
                    Projekte im Bau
                    <span className='TextPosition'>
                    Wir arbeiten kontinuierlich an der Realisierung neuer Handelsimmobilienprojekte, die den Anforderungen unserer Kunden entsprechen und 
                    innovative Lösungen für den Einzelhandelssektor bieten. 
                    Hier präsentieren wir Ihnen einen exklusiven Einblick in aktuelle Projekte, die sich derzeit in der Bauphase befinden. Sämtliche Projekte 
                    werden mit modernsten Bautechniken und hochwertigen Materialien realisiert. 
                    Von Supermärkten mit innovativem Design bis hin zu Drogeriemärkten mit einem Fokus auf Nachhaltigkeit und Benutzerfreundlichkeit setzen 
                    wir auf kreative Konzepte, um die Bedürfnisse unserer Kunden zu erfüllen und gleichzeitig einen Mehrwert für die Gemeinschaft zu schaffen. 
                    </span>
                </div>
            </section>
            <section className='Controlling'>
                <div className='PicControlling' />
                <div className='PfeilControlling' />
                <div className='BoxControlling' id="Controlling">
                    <span className='BigNumber2_4'>4</span>
                    <span className='Raute2_4'> # </span>
                </div>
                <div className='TextControlling'>
                    Projekte in Entwicklung
                    <span className='TextPosition'>
                    Wir sind ständig auf der Suche nach Grundstücken und Liegenschaften um neue , innovative Handelsimmobilien zu schaffen, die den sich ständig 
                    wandelnden Bedürfnissen des Einzelhandels gerecht werden. 
                    Hier erhalten Sie eine Übersicht über unsere kommenden Projekte, die derzeit in der Entwicklungsphase sind. 
                    Von der Planung neuer Supermärkte bis hin zur Gestaltung moderner Drogeriemärkte setzen wir auf kreative Ansätze und innovative Lösungen, 
                    um unseren Kunden einzigartige Handelsimmobilien zu bieten. 
                    </span>
                </div>
            </section>
            <section className='Kontakt'>
                <div className='Planbild' />
                <div className='BoxKontakt'>
                    <div className='KontaktIcon' />
                </div>
                <div className='MapBild' />
                <div className='KontaktText' id="Kontakt">
                        <span className='InnerKontaktHeader'>Kontakt</span>
                        <span className='InnerKontaktText'>
                            <span className='Kontakt1'>Grundvermögen Lindahof GmbH<br/></span>
                            <span className='Kontakt2'>Helmut Antesberger <br/>
                            Bahnhofstraße 40 <br/>
                            94032 Passau <br/><br/>
                            Telefon: +49 (0)851 379 341 70 <br/>
                            Mail: </span>
                            <span className='Kontakt3'><a href="mailto:office@gvlgmbh.de">office@gvlgmbh.de</a> <br/><br/>
                            <a href="https://www.google.de/maps/dir//Grundverm%C3%B6gen+Lindahof+GmbH,+Blockheizkraftwerk+Bahnhofstra%C3%9Fe,+Bahnhofstra%C3%9Fe+40,+94032+Passau/@48.5717044,13.4474815,16.25z/data=!4m9!4m8!1m0!1m5!1m1!1s0x477458a0e661845d:0xd07eb45cf4242221!2m2!1d13.4480059!2d48.5744622!3e0?entry=ttu" target='_blank' rel="noopener noreferrer">Routenplanung</a></span>
                        </span>
                    </div>
            </section>
        </>
    )
}