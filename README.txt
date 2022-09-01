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
"start_url": "./" On indique que l'endroit de départ est toujours la page d'accueil (index) et pas par exemple que l'app démarre sur la dernière page ouverte genre "mes supers cookie au chocolat.
"orientation" : "all" indique le l'application peut s'afficher en horizontal et en vertical. mais on peut également 