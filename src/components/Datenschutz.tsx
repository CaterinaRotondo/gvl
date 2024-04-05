import { useMediaQuery } from "react-responsive"

export default function Datenschutz () {
    const isMobile = useMediaQuery({ query: '(max-width: 759px)' })
    
    return(
        <>
            <div className={`${!isMobile ? 'impressum' : 'impressum-mobile'}`}>
                    <h1>Datenschutz</h1>
                    <h3>Erfassung allgemeiner Informationen</h3>
                    <p>Wenn Sie auf unsere Webseite zugreifen, werden automatisch Informationen allgemeiner Natur erfasst. 
                    Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, 
                    den Domainnamen Ihres Internet Service Providers und Ähnliches. Hierbei handelt es sich ausschließlich um Informationen, 
                    welche keine Rückschlüsse auf Ihre Person zulassen. Diese Informationen sind technisch notwendig, um von Ihnen 
                    angeforderte Inhalte von Webseiten korrekt auszuliefern und fallen bei Nutzung des Internets zwingend an. 
                    Anonyme Informationen dieser Art werden von uns statistisch ausgewertet, um unseren Internetauftritt und die 
                    dahinterstehende Technik zu optimieren.</p>
                    <h3>Cookies</h3>
                    <p>Wie viele andere Webseiten verwenden wir auch so genannte „Cookies“. Cookies sind kleine Textdateien, die von einem 
                    Webseitenserver auf Ihre Festplatte übertragen werden. Hierdurch erhalten wir automatisch bestimmte Daten wie 
                    z. B. IP-Adresse, verwendeter Browser, Betriebssystem über Ihren Computer und Ihre Verbindung zum Internet. <br />
                    Cookies können nicht verwendet werden, um Programme zu starten oder Viren auf einen Computer zu übertragen. 
                    Anhand der in Cookies enthaltenen Informationen können wir Ihnen die Navigation erleichtern und die korrekte Anzeige 
                    unserer Webseiten ermöglichen. <br />
                    In keinem Fall werden die von uns erfassten Daten an Dritte weitergegeben oder ohne Ihre Einwilligung eine Verknüpfung 
                    mit personenbezogenen Daten hergestellt. <br />
                    Natürlich können Sie unsere Website grundsätzlich auch ohne Cookies betrachten. Internet-Browser sind regelmäßig so eingestellt, 
                    dass sie Cookies akzeptieren. Sie können die Verwendung von Cookies jederzeit über die Einstellungen Ihres Browsers deaktivieren. 
                    Bitte verwenden Sie die Hilfefunktionen Ihres Internetbrowsers, um zu erfahren, wie Sie diese Einstellungen ändern können. 
                    Bitte beachten Sie, dass einzelne Funktionen unserer Website möglicherweise nicht funktionieren, wenn Sie die Verwendung von 
                    Cookies deaktiviert haben. </p>
                    <h3>Registrierung auf unserer Webseite</h3>
                    <p>Bei der Registrierung für die Nutzung unserer personalisierten Leistungen werden einige personenbezogene Daten erhoben, 
                    wie Name, Anschrift, Kontakt- und Kommunikationsdaten wie Telefonnummer und E-Mail-Adresse. Sind Sie bei uns registriert, 
                    können Sie auf Inhalte und Leistungen zugreifen, die wir nur registrierten Nutzern anbieten. Angemeldete Nutzer haben 
                    zudem die Möglichkeit, bei Bedarf die bei Registrierung angegebenen Daten jederzeit zu ändern oder zu löschen. 
                    Selbstverständlich erteilen wir Ihnen darüber hinaus jederzeit Auskunft über die von uns über Sie gespeicherten personenbezogenen 
                    Daten. Gerne berichtigen bzw. löschen wir diese auch auf Ihren Wunsch, soweit keine gesetzlichen Aufbewahrungspflichten 
                    entgegenstehen. Zur Kontaktaufnahme in diesem Zusammenhang nutzen Sie bitte die am Ende dieser Datenschutzerklärung 
                    angegebenen Kontaktdaten.</p>
                    <h3>Erbringung kostenpflichtiger Leistungen</h3>
                    <p>Zur Erbringung kostenpflichtiger Leistungen werden von uns zusätzliche Daten erfragt, wie z.B. Zahlungsangaben.</p>
                    <h3>SSL-Verschlüsselung</h3>
                    <p>Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende 
                    Verschlüsselungsverfahren (z. B. SSL) über HTTPS.</p>
                    <h3>Kontaktformular</h3>
                    <p>Treten Sie per E-Mail oder Kontaktformular mit uns in Kontakt, werden die von Ihnen gemachten Angaben zum Zwecke der 
                    Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert.</p>
                    <h3>Löschung bzw. Sperrung der Daten</h3>
                    <p>Wir halten uns an die Grundsätze der Datenvermeidung und Datensparsamkeit. Wir speichern Ihre personenbezogenen Daten daher 
                    nur so lange, wie dies zur Erreichung der hier genannten Zwecke erforderlich ist oder wie es die vom Gesetzgeber vorgesehenen 
                    vielfältigen Speicherfristen vorsehen. Nach Fortfall des jeweiligen Zweckes bzw. Ablauf dieser Fristen werden die entsprechenden 
                    Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht.</p>

{/* Verwendung von Google Analytics
Diese Webseite benutzt Google Analytics, einen Webanalysedienst der Google Inc. (folgend: Google). Google Analytics verwendet sog. „Cookies“, also Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Webseite durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Webseite werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Aufgrund der Aktivierung der IP-Anonymisierung auf diesen Webseiten, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Webseite wird Google diese Informationen benutzen, um Ihre Nutzung der Webseite auszuwerten, um Reports über die Webseitenaktivitäten zusammenzustellen und um weitere mit der Webseitennutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Webseitenbetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.

Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Webseite vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Webseite bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: Browser-Add-on zur Deaktivierung von Google Analytics.

Verwendung von Scriptbibliotheken (Google Webfonts)
Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen, verwenden wir auf dieser Website Scriptbibliotheken und Schriftbibliotheken wie z. B. Google Webfonts (https://www.google.com/webfonts/). Google Webfonts werden zur Vermeidung mehrfachen Ladens in den Cache Ihres Browsers übertragen. Falls der Browser die Google Webfonts nicht unterstützt oder den Zugriff unterbindet, werden Inhalte in einer Standardschrift angezeigt.

Der Aufruf von Scriptbibliotheken oder Schriftbibliotheken löst automatisch eine Verbindung zum Betreiber der Bibliothek aus. Dabei ist es theoretisch möglich – aktuell allerdings auch unklar ob und ggf. zu welchen Zwecken – dass Betreiber entsprechender Bibliotheken Daten erheben.

Die Datenschutzrichtlinie des Bibliothekbetreibers Google finden Sie hier: https://www.google.com/policies/privacy/*/}



                    <h3>Ihre Rechte auf Auskunft, Berichtigung, Sperre, Löschung und Widerspruch</h3>
                    <p>Sie haben das Recht, jederzeit Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten. 
                    Ebenso haben Sie das Recht auf Berichtigung, Sperrung oder, abgesehen von der vorgeschriebenen Datenspeicherung zur 
                    Geschäftsabwicklung, Löschung Ihrer personenbezogenen Daten. Bitte wenden Sie sich dazu an unseren Datenschutzbeauftragten. 
                    Die Kontaktdaten finden Sie ganz unten. <br />
                    Damit eine Sperre von Daten jederzeit berücksichtigt werden kann, müssen diese Daten zu Kontrollzwecken in einer Sperrdatei 
                    vorgehalten werden. Sie können auch die Löschung der Daten verlangen, soweit keine gesetzliche Archivierungsverpflichtung besteht. 
                    Soweit eine solche Verpflichtung besteht, sperren wir Ihre Daten auf Wunsch.<br />
                    Sie können Änderungen oder den Widerruf einer Einwilligung durch entsprechende Mitteilung an uns mit Wirkung für die Zukunft vornehmen.</p>
                    <h3>Änderung unserer Datenschutzbestimmungen</h3>
                    <p>Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen 
                    entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z. B. bei der Einführung neuer Services. 
                    Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung. </p>
            </div>
        </>
    )
}