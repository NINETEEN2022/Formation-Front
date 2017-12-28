/*** LE DOM ***** */



/*** Le DOM est une interface de developpement en JS pour HTML. Grace au DOM, 
 * je vais être en mesure d'acceder / modifier mon HTML.
 * 
 * L'Objet "document" : c'est le point d'entrée vers mon contenu HTML !
 * 
 * Chaque page chargée dans mon navigateur à un objet
 * "document". 
 * 
 * 
 * ****/


 /** -- Comment puis-je faire pour récuperer les differentes informations 
 de ma page html  ? -- **/



 /**********
  * 
  
        document.getElementById

        ---------------------------------

        document.getElementById() : C'est une fonction
        qui va permettre de récuperer un élement HTML
        à partir de son identifiant unique : ID
  
  
  
  ****** */

  var bonjour = document.getElementById("bonjour");
  console.log(bonjour);


  var contenu = document.getElementsByClassName('contenu');
  console.log(contenu);


  /* -- Me renvoi un tableau JS avec mes éléments HTML, ou encore autrement
  dit, une "collection" d'éléments HTML */


  var span = document.getElementsByTagName("span");
  console.log(span);








  