

 /*****************
  * 
  EXERCICE :

  Votre mission , que vous devez accepter !

  realiser une fonction permettant à un internaute de :

  - saisir son prenom dans un prompt
  - Retourner à l'utilisateur : Bonjour [Prenom],
Quel age as-tu ?
    -   Retourner à l'utilisateur: Tu es donc né en [annee de naissance]
    -Afficher ensuite un recaptilatif dans la page.

    Bonjour [PRENOM] , tu as [AGE]
  
  ************* */




 /*function info(prenom, age){

    prenom = window.prompt("Bonjour ton prenom stp");
    age = window.prompt("Bonjour" + prenom + "Ton age stp ? ");
    var annee = 2017 -age;
    alert("Tu es donc né en" annee);
    alert("bonjour", prenom, "tu as donc" age "années")

 document.write(info()); 
 }*/







 // 1  Initiatisation des variable

 var dateObj  = new Date();
 var anneeActuelle = dateObj.getFullYear();



 // 2  Creation d'une fonction

 function Hello(){

      // 2a. Je demande à l'utilisateur son prenom

      let prenom = prompt("Hello! What is your name ?", 
      "Saisir votre prenom");




    // 2b Je demande à l'utilisateur son age

    let age = parseInt( prompt("Hello"+ prenom + "How old are you ?", "Saisir votre age"));

    console.log(age);
    console.log(typeof age);


    // 2c. Deduire l'année de naissance et afficher dans une "alert".


    alert("tu es ne en" + (anneeActuelle - age));

    // 2c. Affiche page recap".

    document.write("hello" + prenom + "tu as" + age + "ans" );

 }        

    // 2 Execution de ma fonction

    Hello();







   











































