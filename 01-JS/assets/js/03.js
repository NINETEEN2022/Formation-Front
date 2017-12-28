

/******
 * 
 * LA CONCATENATION
 * 
 * 
 * ***** */




 var debutDePhrase  = "Aujourd'hui";

 var laDate  = new Date();

 var suiteDePhrase  = ", sont presents : ";

 var nombreDeStagiaires  = 18;

 var finDePhrase  = "stagiaires.<br>";





 /* -- Nous souhaitons maintenant, grâce à la concaténation afficher tout ce petit monde, 
 en un seul morceau */

 document.write(debutDePhrase + laDate.getDate() + '/' + (laDate.getMonth()+1) + '/' + laDate.getFullYear()
 + nombreDeStagiaires + finDePhrase );



 /*******************
  * 
  * EXRCICE :

  Créez une concaténation ) partir des éléments suivants :
  
  ****** */


  var phrase1 = "Je m'appelle";
  var phrase2 = "Hamid et j'ai";
  var age = 41;
  var phrase3 = "ans !";

  document.write(phrase1 + phrase2 + age + phrase3);
  





