Readme / Lies mich

Allgemeine Lizenzbedingungen

Bevor Sie das Script benutzen, m�ssen Sie die Lizenzbedingungen 
akzeptieren.

Sie d�rfen dieses Script, bestehend aus der Suchfunktion und den zugeh�rigen 
Dateien im Ordner suchmy, kostenlos nutzen, gleich ob das Script im privaten 
oder gewerblich gef�hrten Websites oder Webprojekten integriert wird, insofern 
vorhandene Copyrighthinweise in Form von Hyperlinks auf www.heim-und-haustiere.de
oder in Form eines Logos mit Hyperlinks auf www.heim-und-haustiere.de nicht 
entfernt wird und erhalten bleibt. Unter den gleichen Voraussetzungen d�rfen 
Sie dieses Script auch kostenlos weiter gegeben oder verschenken. Sollten Sie 
ein Script kostenlos weitergeben oder verschenken, sind Sie verpflichtet, 
diese Lizenzbedingungen ebenfalls mit weiter zu geben.
  
Nicht gestattet ist es hingegen, dieses Script inklusive der zugeh�rigen 
Dateien im kommerziellen Sinne weiter zu verwerten. Hierzu z�hlt, dass dieses 
Script nicht ohne Einverst�ndnis des Autors gegen ein Entgelt oder einem 
anderweitigen Erl�s verkauft werden darf, ob einzeln oder in einem 
Sammelwerk spielt hierbei keine Rolle. Ebenfalls ist ein Abdruck in 
Printform oder eine Abbildung als Kopie ohne Zustimmung des Autors 
untersagt, gleich ob es sich dabei um ein Medium im Internet oder um eine 
Abbildung in anderen Medien handelt. Bei berechtigtem Interesse ist der 
Autor jedoch unter Umst�nden gern bereit seine Zustimmung zu erteilen. 
 
Um diesen Lizenzbedingungen zuzustimmen, bedarf es keiner schriftlichen 
oder m�ndlichen Erkl�rung oder Mitteilung. Da bei jeder Seite, auf der ein 
Script zum kopieren oder zum Download angeboten wird, ein Hinweis auf die 
AGB erfolgt, ferner diese Lizenzbedingungen jedem Download mit beiliegt, 
stimmen Sie den Lizenzbedingungen automatisch zu, wenn Sie dieses Script 
benutzen. Sie d�rfen diesen Lizenzbedingungen jedoch nicht zustimmen, wenn Sie 
das gesetzlich vorgeschriebene Alter f�r den Abschluss von Vertr�gen noch 
nicht erreicht haben. In diesem Fall m�ssen Sie einen Sorgeberechtigten um 
sein Einverst�ndnis bitten. 



Gew�hrleistung

Wir garantieren Ihnen, dass wir dieses Scripts so sorgf�ltig wie m�glich 
getestet haben. Eine Gew�hr f�r die Fehlerfreiheit des Scripts k�nnen wir 
dennoch nicht �bernehmen. Der Download und die Verwendung der Scripts 
geschieht auf eigene Gefahr. Dies trifft insbesondere auf den 
unsachgem��en Einsatz von Scripts zu und ebenso im Zusammenhang mit der
Weiterentwicklung von Servertechnologien, Programmiersprachen, 
Browsertechniken und Webstandards. Sollten Ihnen hieraus etwaige Sch�den 
entstehen, �bernehmen wir keine Gew�hrleistung. Weiterhin sollten Sie im 
eigenen Interesse bei der Verwendung darauf achten, dass Dateien mit sensiblen
Daten, wie Passw�rter usw., von der Suche ausgeschlossen werden.



Wichtiger Hinweis 

Die Suchfunktion durchsucht den Quelltext und Quellcode von PHP-Dateien, ohne 
dass diese vom Server zuvor geparst werden! Passw�rter und andere sensible 
Daten in einem Kommentarbereich sind somit durchsuchbar! Sch�tzen Sie derartige
Dateien mit einem noindex-Tag im Head und sperren Sie zus�tzlich derartige 
Dateien und Seiten f�r die Suche im Adminbereich. Testen Sie gegebenenfalls,
ob der Schutz zuverl�ssig ist.



Download und Installation

Bitte �berpr�fen Sie vor einer Installation, ob bei Ihren Webspace PHP5 
zu Verf�gung steht.

Die erforderlichen Dateien befinden sich in einem Zip-Ordner, den Sie nach 
dem Download entpacken m�ssen. Ordner und Dateien sollten Sie nicht umbenennen. 
Tun Sie es dennoch, ist die Funktionalit�t des Scripts nicht mehr 
gew�hrleistet.

In einem ersten Schritt sollten Sie mit einem geeigneten Editor die Seite 
editsettings.php �ffnen und bei diesem Punkt "ihre-domain" gegen den Namen 
Ihre eigenen Domain auswechseln:

$meineDomain = "www.ihre-domain.de";

Als n�chstes sollten Sie "admin" jeweils gegen ein sicheres Passwort Ihrer 
Wahl ersetzen. Wenn Sie zur Erprobung keine �nderung an dieser Stelle 
vornehmen und weiterhin "admin" als Usernamen und als Userkennung verwenden, 
sollten Sie diese �nderung im Interesse der Sicherheit so bald wie m�glich 
vornehmen. 

$pwusern = "admin";  (Usernamen) 
$pwunten = "admin";  (Userkennung)

Laden Sie im Anschluss die Datei suche.php und den Ordner suchmy mit all 
seinen Dateien in das Rootverzeichnis Ihres Webspaces. Das Rootverzeichnis ist 
das Stammverzeichnis bzw. die oberste Ebene Ihres Webspaces, dort wo auch ihre 
Index-Datei liegt. Sollte es sich um einen Unix Host handeln bzw. sollte sich 
Ihr Webspace auf einen Server befinden, der als Betriebssystem Unix verwendet, 
so m�ssen Sie folgende Dateien mit Schreibrechten versehen:

CHMOD 666 f�r die Dateien:

gsordner.txt 
gsseiten.txt
visits.txt
visitscontrol.txt


Vor dem ersten Test der Suche

Wenn Sie alle Dateien hochgeladen haben, rufen Sie die Datei 
www.ihre-domain/suchmy/edtieinwahl.php auf (wobei ihre-domain gegen den Namen 
Ihrer Domain zu ersetzen ist) und geben admin und admin ein oder den von Ihnen 
ge�nderten Usernamen und Userkennung. Es wird bei erfolgreicher Einwahl ein 
Cookie auf Ihren PC abgelegt und es erfolgt ein Wechsel zu einer Seite mit 
einer Navigation f�r den Admin- und Editbereich. Hier sollten Sie unter dem 
Men�punkt "Gesperrte Worte, Seiten und Ordner: " den Link "Zum Editierbereich" 
w�hlen.

Tragen Sie in der ersten Liste auf der Seite "Editsuche: Dateien, Ordner und 
Stopworte" alle Seiten und Dateien ein, die nicht durchsucht werden sollen. 
Es ist jeweils nur eine Seite pro Zeile einzutragen. Tragen Sie im Anschluss 
in der zweiten Liste alle Ordner ein, die von der Suche ausgeschlossen werden 
sollen. Auch hier ist pro Zeile nur ein Ordner einzutragen. Bei Ordnerpfaden 
ist ein Schr�gstrich zwischen den Ordnern erforderlich, es darf aber kein 
Schr�gstrich am Anfang oder am ende verwendet werden!
 
Bei dem Ausschluss von Ordnern sollten Sie m�glichst sorgf�ltig vorgehen, da 
zum Beispiel der Inhalt von Ordner die zu Statistiken, Countern usw. geh�ren 
und in denen viele Dateien liegen, die Suche im erheblichen Umfang 
verlangsamen kann!
Nicht unbedacht ver�ndern sollten Sie hingegen die Liste mit den Stopw�rtern. 
Stopwortlisten werden von allen gr��eren Suchmaschinen verwendet, um 
unwichtige W�rter von der Suche auszuschlie�en und um so den Suchvorgang  auf 
die wesentlichen Bestandteile einer Suchanfrage zu lenken. In dieser Liste 
sehen Sie eine Liste mit bisher gespeicherten Stopw�rtern, die bei der 
normalen Suche nicht mit ber�cksichtigt werden. Sie k�nnen diese Liste 
editieren, in dem Sie einzelne W�rter hinzuf�gen oder aus der Liste l�schen. 
Diese Liste hat auf die Suchoption "Genauer Wortlaut" keinen Einfluss.


Nach dem Test der Suchefunktion

Wenn dieser Schritt erledigt ist, k�nnen die Seite suche.php aufrufen. Wenn 
die Installation erfolgreich war, sehen Sie eine Tabelle mit den letzten 
Suchanfragen und darunter eine Tabelle mit den h�ufigsten Suchbegriffen 
eingeblendet. Ob Sie diese beiden Tabellen eingeblendet lassen m�chten oder 
nur eine oder keine, k�nnen Sie in der Datei editsettings.php unter den 
folgenden Punkten angeben, in dem Sie die Werte jeweils auf "on" oder "off" 
setzen.

$tablastvisits = "on";
$tabmostworte  = "on";

Weiterhin k�nnen Sie mit "on" oder "off" angeben, ob die Titelzeile und die 
Links zur n�chsten Seite (falls die Zahl der Ergebnisse h�her ist als die 
Anzahl der angezeigten Ergebnisse pro Seite) eingeblendet werden.

$headlinean    = "on";
$seitenlinks   = "on";

Welche Werte noch von Ihnen ge�ndert werden k�nnen, ist in der Datei 
editsettings.php bei den jeweiligen Punkten vermerkt. 

Es sei angemerkt, die Seite suche.php dient nur als Demo f�r die Ausgabe. Wenn 
Sie diese Seite weiterhin verwenden m�chte, so k�nnen Sie diese entsprechend 
Ihren Vorstellungen ver�ndern und einrichten. Den Headbereich k�nnen Sie mit 
weiteren Angaben erweitern, relevante Angaben, wie die Dokumenttyp-Deklaration 
HTML 4.01 Transitional, der Content-Typ charset=iso-8859-1 und die Einbindung 
zur CSS sollten hingegen nicht ver�ndert werden, bzw. mit in anderen Seiten 
�bernommen werden, um Probleme mit der Darstellung oder mit Umlauten zu 
vermeiden!
 
Bei Bedarf k�nnen Sie die beiden // Schr�gstriche vor $vorWort = " "; l�schen 
und statt dessen einen vorgew�hlten Suchbegriff zwischen "" einf�gen. 

Beispiel: $vorWort = "Hustenropfen"; 
 
Beim ersten Aufruf w�rden dann auf der Seite suche.php alle gefundenen 
Ergebnisse aufgelistet, die das Wort Hustentropfen enthalten. Auf diese Art 
und Weise k�nnen Sie auch mehrere Seiten mit unterschiedlichen 
Suchergebnissen anlegen. Dabei ist zu bedenken, zu viele Seiten mit 
vordefinierten Suchbegriffen anzulegen ist nicht ratsam, da die Gefahr von 
zeitnahen oder zweitgleichen  Suchanfragen w�chst, was zu einer Mehrbelastung 
f�hren w�rde. Besonders die Bots und Crawler von Suchmaschinen rufen bei ihren 
Besuchen nicht nur eine Seite auf und k�nnten bei zu vielen Seiten mit 
vordefinierten Suchbegriffen zu viele zeitnahe Suchvorg�nge ausl�sen. 
Diesen Hinweis finden Sie auch im Quelltext der Datei suche.php. Der Hinweis 
kann dort entfernt werden, wobei Sie den Text in diesem Fall einschlie�lich 
des einleitenden /* und endenden */ Schr�gstrichs entfernen m�ssten.

Die bestehenden Formatierungen lassen sich in der Datei meinesuche.css 
weitestgehend ver�ndern, um so die Seite suche.php weitestgehend an Ihre 
vorhandenen Webseiten anzupassen. Alle �nderungen in der meinesuche.css 
ver�ndern jedoch nicht nur das Erscheinungsbild der Seite suche.php, sondern 
auch das der Seiten im Adminbereich.

Um ein kleines Suchformular in allen Seiten Ihrer Website (Homepage) 
einzubinden, k�nnen Sie jedes beliebige Formular verwenden. Eine vorgefertigte 
Auswahl mit Beschreibung finden Sie im Adminbereich unter dem Men�punkt 
"Suchfeld ausw�hlen".



Sonstige Hinweise

Die Suchfunktion durchsucht alle vorhandenen Dokumente Zeilenweise. Wenn mehr
als ein Suchbegriff eingegeben wird, werden nur Treffer gelistet, wenn beide
Suchbegriffe innerhalb einer Zeile im Dokument vorkommen. Zeilen, in denen
Links oder Image-Tags vorkommen, werden nicht durchsucht. Ebenfalls werden
Zeichenketten nicht mit ausgegeben, die codetypische Zeichen enthalten, wozu
Dollarzeichen, Gleichheitszeichen, Semikolons und Klammern geh�ren. 

Es werden nur Seiten durchsucht, die ein Meta-Tag mit meta name="robots" im 
Head der Datei notiert haben und auch nur dann, wenn kein noindex in diesem 
Meta-Tag angegeben wurde. Seiten, deren Content (Inhalt) in Datenbanken liegt, 
werden nicht durchsucht. Obwohl viele Dateiendungen wie zum Beispiel *xml, 
*pdf oder *txt bereits im Script gesperrt werden, sind Dateien, die nicht 
durchsucht werden sollen und ebenso Ordner, in denen nur nicht zu 
durchsuchende Dateien enthalten sind, dennoch in den Listen im Adminbereich 
zu sperren. Andernfalls w�rde sich die Suche verlangsamen, da bei jeden 
Suchvorgang erst jeder Datei Zeile f�r Zeile nach eventuell vorhandenen 
Meta-Angaben vom Script durchsucht werden w�rde.

Um ungewollte Attacken zu verweiden, die durch spielende Kinder ebenso 
erfolgen k�nnten, wie automatisierte Suchanfragen, erfolgt eine kurzfristige 
Sperrung bei mehr als 60 Suchanfragen von einer einzigen IP innerhalb einer 
Stunde. Es werden nur Zugriffe von der IP gesperrt, von welcher die St�rung 
erfolgte. Die IP-Sperre wird eine Stunde nach dem ersten Aufruf der Suche 
wieder aufgehoben.

Die Datei f�r die Auswertung der letzten Suchanfrage und der h�ufigsten 
Suchbegriffe begrenzt sich von allein auf 1.000 Eintragen, wobei die jeweils 
�ltesten Eintragungen bei jedem erneuten Aufruf wieder gel�scht werden. Ein 
manuelles Eingreifen, um ein unkontrolliertes Wachstum der TXT-Datei zu 
vermeiden, ist somit nicht erforderlich, insofern keine St�rung vorliegt. 
In durchgef�hrten Tests trat bisher keine St�rung auf.


Horst M�ller
Verlag und Websolution
Pferdem�rsche 64
39576 Stendal

Tel.: 03931-710864





