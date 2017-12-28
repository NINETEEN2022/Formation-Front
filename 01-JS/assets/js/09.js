







/********
 * 
 * 
 *  - LES BOUCLES     for
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


 // --   Pour i = 1 ; tant que i <= strictement inferieur ou égale à 10; alors j'incrémente i de 1.


/* for(let i=1; i <=10; i++){

        document.write('<p>Instruction executée : <strong>' + i + '</strong></p>');

 }



 document.write('<hr>');

 var j = 1;
 while(j <= 10){

    document.write('<p>Instruction executée : <strong>' + i + '</strong></p>')

    // --  ATTENTION A NE PAS OUBLIER L'INCREMENTATION

    j++;

 }

*/


 /***********
  * 
  
    EXERCICE
  
  
  *********** */


  // --  Supposons le tableau suivant:

  var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Hugo' ];


  /*  -- Consigne : Grace à la boucle FOR, affichez la liste des prenoms du tableau suivant dans la console de votre page */


  for(let i = 0 ; i < 7; i++){
    console.log(Prenoms[i]);
}



  for(let i = 0 ; i <  Prenoms.lengh; i++){
    console.log(Prenoms[i]);
}





var j=0;
while(j <  Prenoms.lengh; ){
    console.log(Prenoms[j]);
    j++;
}




//---  Meme exercice avec la boucle ForEach
//-- Mais attention à la performance !!!


Prenoms.forEach(affichePrenoms);

function affichePrenoms(prenom, indice){

    console.log(prenom);



    
}



















   











































