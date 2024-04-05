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
                    Projektmanagement
                    <span className='TextPosition'>
                    Wir sind ein erfahrener Projektsteuerer und Baumanager, der komplexe Immobilien- und Bauvorhaben erfolgreich und termingerecht abschließt. 
                    Unsere bewährte Vorgehensweise beinhaltet eine strukturierte Dokumenten- und Informationsverwaltung, eine integrierte Projektkommunikation, 
                    lückenlose Protokollierung und zentrale Dokumentation aller Aktivitäten sowie effizientes Baucontrolling. Durch diese Maßnahmen erreichen 
                    wir eine hohe Transparenz und Entscheidungsqualität.
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
                    Projektentwicklung
                    <span className='TextPosition'>
                    Wir entwickeln Ideen für Ihre Grundstücke und Bauvorhaben, die sich an den möglichen Markt- und Nutzungsverhältnissen orientieren - 
                    unabhängig davon, ob es sich um brachliegende Bahn- oder Industrieareale oder städtische Quartiere handelt. 
                    Anschließend erarbeiten wir eine marktgerechte Standortentwicklung und unterstützen bei der Investorenansprache. 
                    Wir stimmen die ausgearbeiteten Konzepte mit den Zielen und Vorgaben der Interessenten ab und realisieren das erforderliche Baurecht für Sie.
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
                    Bauüberwachung
                    <span className='TextPosition'>
                    Wir unterstützen Sie bei Ihrem Bau- oder Sanierungsvorhaben von der Planung bis zur Abnahme des Objekts mit einem 5-Phasen-Check. 
                    Unsere Stichproben-Prüfungen spüren Mängel auf, um eine hohe Bauqualität zu sichern und Kosten durch sofortiges Beseitigen zu vermeiden. 
                    Wir dokumentieren einheitlich während jeder Bauphase und verwenden dabei neueste Technik. Vertrauen Sie auf unsere langjährige Erfahrung 
                    und die Sicherung Ihres Bauvorhabens durch ein geprüftes Nachunternehmensverfahren.
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
                    Controlling Plus<sup style={{color: "#e94e1b"}}>+</sup>
                    <span className='TextPosition'>
                    Wir bieten professionelle Unterstützung beim Controlling von Terminen und Kosten für Ihr Bauvorhaben. Mit dem Controlling PLUS erstellen 
                    wir Kontrollberichte des tatsächlichen Verlaufs im Vergleich zu den Vorgaben der Projektleitung und übernehmen die Bauüberwachung vor Ort 
                    für Sie. So begleiten Sie als Bauherr das Projekt intensiv in der Leitungsfunktion.
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
                            <span className='Kontakt1'>ha consult<br/></span>
                            <span className='Kontakt2'>Helmut Antesberger <br/>
                            Bahnhofstraße 40 <br/>
                            94032 Passau <br/><br/>
                            Telefon: +49 (0)851 379 341 70 <br/>
                            Mail: </span>
                            <span className='Kontakt3'><a href="mailto:office@ha-consult.de">office@ha-consult.de</a> <br/><br/>
                            <a href="https://www.google.de/maps/dir//ha+consult,+Bahnhofstra%C3%9Fe+40,+94032+Passau/@48.5744668,13.4457234,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4774f6002ba23259:0x3ae6c8bf2060e606!2m2!1d13.4479121!2d48.5744668!3e0" target='_blank' rel="noopener noreferrer">Routenplanung</a></span>
                        </span>
                    </div>
            </section>
        </>
    )
}