/*** LA MANIP DES CONTENUS ***** */

/**  **/



function l(e) {

        console.log()
}

/** Je souhaite récupérer mon lien **/


var google

google






/****
 * 
 * 
 *  AJOUTER UN ELEMENT DANS  MA PAGE
 * 
 * 
 * **** */




 /***
  * 
  
  Nous allons utiliser 2 méthodes : 

  1. La fonction document.createElement() va permettre de générer un nouvel
  element dans le DOM ; que je pourrais par la suite modifier avec les méthodes que 
  nous venons de voir.

  PS: Ce nouvel élément est placé en mémoire. 
  
  
  
  ***/




   /* Definition de l'élément */

  var span = document.createElement('span');


  span.id = "MonSpan";


  span.textContent = "Mon Beau Texte en JS !";

  //-- Comment ajouter l'element dans la page ?
  // -- La fonction appendChild() va permettre de rajouter à un élement du DOM.

  google.appendChild(span);



  /**********
   * 
   *        EXERCICE
   * 
   * 
   * En partant du travail déjà réalisé sur la page.
   * 
   * Créez directement dans la page une balise <h1></h1>
   * ayant comme contenu :
   * "Titre de mon Article".
   * 
   * Dans cette balise ,  vous créerez un lien vers une url de votre choix.
   * Bonus : Ce lien sera de couleur Rouge et non souligné.
   * 
   * 
   * <h1>Titre de mon Article <a href="http://google.fr">Google</a></h1>
   * 
   * 
   * ************* */

//-- Creation de la balise h1

   var h1 = document.createElement('h1');

//-- Creation de la balise a

   
   var a = document.createElement("a");


//-- Titre de mon article


   a.textContent = "Titre de mon Article";

// -- Je veux donner un lien à mon lien

   a.href ="#"


   // --  appendChild()

        // --  Je met mon lien (a) dans mon h1
        h1.appendChild(a);


        //*** Je mets mon h1 dans ma page, dans mon body */

        document.body.appendChild(h1);

// ---Correction de bonus

 //--  lien couleur rouge
        a.style.color ="red";

         //--  je veux mon lien pas souligné

        a.style.textDecoration ="none";


/*****





****/

    








    
  











  