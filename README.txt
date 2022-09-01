Une pwa = progressive WEBAPP

00 - Permet de réduire la tailles des images  :
     https://squoosh.app/
     samsung Itest permet de tester l'interface Android sur IOS

01 - le fichier manifest.json est le premier qui doit être créé, il va être le coeur de l’app, il ne peut pas en avoir deux, il peut également   s'appeler manifest.json, mais comme c’est un un aspect officiel, il a un nom officiel à savoir app.webmanisfet

Important toujours tester son app sur beaucoup de support en vertical et horizontal

Toujours stocker son fichier app.webmanifest à la racine de son dossier de projet pour éviter les problèmes 
il faut toujours linker son manifest dans les fichiers de son projet avec :
<link rel="manifest" href="app.webmanifest">
name c'est le nom de l'application total
short_name: C'est le nom abrégé pour apparaitre sur l'écran de smartphone conseillé 12 caractères.
"start_url": "./?utm_source=pwa" On indique que l'endroit de départ est toujours la page d'accueil (index) et pas par exemple que l'app démarre sur la dernière page ouverte genre "mes supers cookie au chocolat. le point d'interogation utm est un argument optionnel pour le google analytics 
"orientation" : "all" indique le l'application peut s'afficher en horizontal et en vertical. mais on peut également.
"Theme_color" : "chartreuse" indiquera la couleur princpale de l'application et peut être déclarée en RGB nom de couleur ou HEX, mais pas en dégradé ou en RGBA. ça doit également être déclaré en tant que meta dans le fichier l'utilisant.
<meta name="theme-color" content="#ffc252">
A noté que la value content sera accessible en javascript

Scope

Si nous avons un lien poitant vers un autre domaines le navaigateur interne à la pwa sera visbile avec l'adresse bar
ce paramètre doit avoir la même valeur que que le start url 
"scope": "./"

Display :

Sans la propriété display nous n'avons pas de PWA
browser en value met juste un bookmarks et ce n'est pas ce que l'on veut 
On met cela en StandAlone car on souhaite que le comportement soit comme une standAlone Application
minimal-ui permet de juste avoir le boutton return et la croix / reload attention ce n'est pas disponible sur IOS et ça basculera sur browser

