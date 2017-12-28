/*** LES EVENEMENTS EN JS ***** */


/* les évènements vont me permettre de déclencher une fonction,
c'est à dire : une série d'instructions suite à une action de mon utilisateur.

Objectif : Etre den mesure de capturer ces évenements afin d'executer une fonction.

Les evenements:

        MOUSE (souris):

        click : au click sur un element
        mouseenter : la souris passe au dessus de la zone
        qu'occupe un élément
        mouseleave : la souris sort de cette zone


Les Evenements : KEYBOARD (Clavier)

        keydown : une touche du clavier est enfoncée
        keyup   : une touche du clavier a été relachée.



Les Evenements : WINDOW (Fenêtre)

        scroll  : défilement de la fenêtre
        resize  : redimensionnement de mla fenetre

Les Evenements : FORM (Formulaire)

        change  : pour les éléments <input>, <select> et <textarea> (quand tu sort de ton input)
        submit  : à l'envoi soumission du formulaire
        input   : pour capter la saisie d'un utilisateur sur un champs <input>

########################## LES ECOUTEURS D'EVENEMENTS ################################


Pour attacher un évènement à un élément,  ou autrement dit, pour déclarer
un écouteur d'évenement qui se chargera de déclencher une fonction, je vais utiliser
la syntaxe suivante :



*********************************/


/** var p =document.getElementById('MonParagraphe');

    /* Je souahite que mon paragraphe soit rouge au clic de la souris */

    
    
    /* function changeColorToRed(){
        p.style.color ="red";
    }

    p.addEventListener('click', changeColorToRed);  *-- 

*/

/*
EXERCICE

A l'aide de javascript, créez un champs "input" type text avec ID unique.
Affichez ensuite dans une alerte, la saisie de l'utilisateur

*/


var form = document.createElement('form');


/*form.appendChild(input);

var input = alert.getElementById();*/


/**
 * 
 * Attribution d'un atrribut
 * 
 * input.setAttribute('type','text');
 * input.setAttribute('placeholder','saisissez un contenu');
 * 
 * input.id ="monInput";
 * **/

 /***
   Ajout de l'élément dans ma page 
  document.body.appendChild(input);
  ***/

  function voirLaSaisieDeMonInput(){

        alert(input.value);

  }

  input.addEventListerner('change', voirLaSaisieDeMonInput);













