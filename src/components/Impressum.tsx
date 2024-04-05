import { useMediaQuery } from "react-responsive";
import '../App.css';
import '../AppMobile.css';

export default function Impressum () {
    const isMobile = useMediaQuery({ query: '(max-width: 760px)' })

    return(
        <>
            <div className={`${!isMobile ? 'impressum' : 'impressum-mobile'}`}>
                    <h1>Impressum</h1>
                    <h3>Anbieterinformationen</h3>
                    <p>
                        <span>Grundvermögen Lindahof GmbH - Helmut Antesberger</span> <br />
                        Bahnhofstr. 40 <br />
                        94032 Passau <br />
                        +49 (0) 851 / 37 93 41 70 <br />
                        +49 (0) 851 / 37 93 40 03 <br />
                        Email: office@gvlgmbh.de <br />
                    </p>
                    <h3>Rechtliche Angaben</h3>
                    <p>
                        Vertretungsberechtigt: Helmut Antesberger <br />
                        Inhaltlich Verantwortlicher gemäß TMG: Helmut Antesberger <br /><br />
                        USt.ID.Nr. gemäß § 27 a Umsatzsteuergesetz: DE250006034 <br /><br />
                        Gewerbeerlaubnis gem. §34 c GewO wurde erteilt durch Stadt Passau <br />
                        Aufsichtsbehörde: IHK für München und Oberbayern, Max-Joseph-Straße 2, 80333 München
                    </p>
                    <h3>Bildquellen</h3>
                    <p>
                        <a href="https://www.istockphoto.com/de/portfolio/Drazen_?mediatype=photography" target='_blank' rel="noopener noreferrer">iStock Drazen_</a> <br />
                        <a href="https://www.istockphoto.com/de/portfolio/mihailomilovanovic?mediatype=photography" target='_blank' rel="noopener noreferrer">iStock mihailomilovanovic</a> <br />
                        <a href="https://www.istockphoto.com/de/portfolio/laurencedutton?mediatype=photography" target='_blank' rel="noopener noreferrer">iStock Laurence Dutton</a> <br />
                        <a href="https://www.istockphoto.com/de/portfolio/Saeheng?mediatype=photography" target='_blank' rel="noopener noreferrer">iStock Charnchai</a> 
                    </p>
                    <h3>Hinweis auf EU-Streitschlichtung</h3>
                    <p>
                        Zur außergerichtlichen Beilegung von verbraucherrechtlichen Streitigkeiten hat die Europäische Union eine Online-Plattform 
                        (“OS-Plattform”) eingerichtet, an die Sie sich wenden können. Die Plattform finden Sie unter <a href="http://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">http://ec.europa.eu/consumers/odr/</a>. 
                        Unsere Emailadresse lautet: office@gvlgmbh.de
                    </p>
                    <h3>Disclaimer</h3>
                    <p>
                        <h4>§ 1 Warnhinweis zu Inhalten</h4> 
                        Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser 
                        Webseite übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der bereitgestellten kostenlosen und frei zugänglichen 
                        journalistischen Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht 
                        immer die Meinung des Anbieters wieder. Allein durch den Aufruf der kostenlosen und frei zugänglichen Inhalte kommt keinerlei 
                        Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des Anbieters. <br /><br />
                        <h4>§ 2 Externe Links</h4> 
                        Diese Website enthält Verknüpfungen zu Websites Dritter ("externe Links"). Diese Websites unterliegen der Haftung der jeweiligen 
                        Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige 
                        Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die 
                        aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, 
                        dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen 
                        Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden 
                        jedoch derartige externe Links unverzüglich gelöscht. <br /><br />
                        <h4>§ 3 Urheber- und Leistungsschutzrechte</h4>
                        Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen 
                        Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder 
                        jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. 
                        Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als 
                        solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet 
                        und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch 
                        ist erlaubt. <br />
                        Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig. <br /><br />
                        <h4>§ 4 Besondere Nutzungsbedingungen</h4>
                        Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Paragraphen abweichen, wird an entsprechender 
                        Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.
                    </p>
            </div>
        </>
    )
}