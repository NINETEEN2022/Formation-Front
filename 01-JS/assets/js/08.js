

 /*****************
  * 
 LES CONDITIONS

 
  var MajoriteLegaleFrFr = 18;

  if(14 >= MajoriteLegaleFrFr){

    alert("Bienvenue !");

  }

  // --  Le else n'est pas obligatoire.

  else{

    alert("Google");
  }

  
  ************* */






  /**********
   * 
   * 
   * 
   * EXERCICE
   * 
   * Creer une fonction permettant de verif l'age d'un visiteur (prompt)
   * S'il a la majorité légale, alors je lui souhaite la bienvenue,
   * sinon, je fais une redirection sur google apres lui avoir signalé le soucis.
   * 
   * 
   * 
   * 
   * **** */


   
 /*/ function welcome(){

        let welcome = 18;
        let majeur = prompt( "saisis ton age stp" );
        if(majeur > 18 );

            alert("bienvenue");  

        else{
            
            alert("Trop jeune");
            document.location.href="https://www.google.fr";

        }       

  }


  controlmajorite(); */





  /***CORRECTION */


  /***
   * 
   * 
   * Si l'age de l'utilisateur passé en parametre en superieur ou égale
   * 
   * à la majorité légale
   * 
   * 
   * 
   * ****/ 





   /*** */


   
   
   
   
   
   /*var age = parseInt( prompt("blabla");


   if(verifierAge(age)){

        // --  

        alert('Bienvenue');
        document.write("jgdfj");

   }

   else{

        // --

        document.location.href="https://www.google.fr";

   }
*/







/******************
 * 
 * 
 *   -- LES OPERATEURS DE COMPARAISON -- 
 * 
 * 
 * 
 * ************** */


/*******************************************************************************************************\
 * 
 * 
 *                  L'opérateur de copmparaison "==" signifie :
 * 
 *                          Egal à 
 * 
 *              Il permet de vérifier que 2 variables sont identiques
 * 
 * 
 *              L'opérateur de comparaison "===" signifie :
 * 
 *                           Strictement Egale à . Il va comparer la valeur
 *                             et le type de donnée 
 * 
 * 
 *          L'opérateur de comparaison "!=" signifie DIFFERENT de.
 *          
 *           L'opérateur de comparaison "!==" signifie strictement DIFFERENT de.
 *         
 * 
 * 
 * 
 * 
 \* ** ***********************************************************************************************/



/*var email= "wf3@hl-media.fr";
var mdp= "wf3";

    var emailinput = prompt("Please enter your email");
    var mdpinput=prompt("entrez votre password");

    if(emailinput === email, mdp === mdpinput) {


        
          
            document.location.href="https://www.google.fr";
        

      

    }      
        



    

    else{

        alert("votre email ou password sont incorrecte");

    } */










//Base de données:


 /*var email, mdp;

 email = "wf3@hl-media.fr";
 mdp = "wf3";*/




  





/*******************************CORRECTION*********************************** */



/* var emailUser = prompt("Bonjour, Quel est votre email ?", "saisissez votre email");

// -- 2  Je vérifie si l'email saisie (emailUser) correspond à celui en BDD (email)

if(emailUser == email) {

// 2a . Tous est ok, je continu la vérification avec le mot de passe

}

else{

    //2b. Les emails ne correspondent pas...
    alert("Attention, nous n'avons pas reconnu votre adresse email");


} */




//  ---  EXEMPLE AVEC LES FONCTIONS

var email, mdp;

 email = "wf3@hl-media.fr";
 mdp = "wf3";

var emailUser = prompt("Bonjour, Quel est votre email ?", "saisissez votre email");
var mdpUser = prompt("votre mdp ?", "saisissez votre mdp");
/***
 * Vérifie si le couple Email / mpd est correct.
 * 
 * @param {*string} emailUser
 * @param {*string} mdpUser
 * @param {Boolean} 
 * 
 * 
 */
function monUtlisateurEstCorrect(emailUser,mdpUser){


    if(emailUser === email && mdpUser === mdp){
            return true;
    } 
    else{
        return false;
    }
}
/*
if(monUtlisateurEstCorrect(emailUser, mdpUser)){
    alert("welcome");
}
else{
    alert("KO");
}
*/
var connexion=monUtlisateurEstCorrect(emailUser, mdpUser);

if(connexion == true){
    alert("welcome");
}
else{
    alert("KO");
}








/********
 * 
 * 
 *  ----- Les opérateur logiques -- 
 * 
 *         ##### L'opérateur ET : && ou AND  #########
 * 
 *          Si la combinaison emailUser et email correspond ET 
 *          la combinaison mdpUser et mdp correspond.
 * 
 *          ---> Dans cette condition, les 2 doivent OBLIGATOIREMENT
 *      correspondre pour être validée.
 * 
 *      Ex : if(emailUser == email && mdpUser == mdp){...}
 * 
 * 
 *          ################ L'OPERATEUR OU : || ou OR   #########################
 * 
 * 
 * 
 *          Si la combinaison emailUser et email correspond ET/OU 
 *          la combinaison mdpUser et mdp correspond.
 * 
 *          ---> Dans cette condition, au moins une des 2 doivent correspondre pour être validée.
 * 
 *      Ex : if(emailUser == email || mdpUser == mdp){...}
 * 
 * 
 *          ################ L'OPERATEUR "!" : ou NOT   #########################
 * 
 * 
 * L'opérateur "!" signifie le CONTRAIRE DE .... ou NOT
 * 
 * var monUtilisateurEstApprouve = true;
 * if(!monUtilisateurEstApprouve){....} : Mon utilisateur n'est pas approuvé.
 * 
 *  Revient à écrire :
 *  if(monUtilisateurEstApprouve == false) {...}
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * ******* */







   











































