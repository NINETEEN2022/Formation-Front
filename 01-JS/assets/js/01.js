// alert('wow');

// deux slash pour faire un commentaire uniligne.

/*

Ici, je 
commenter
sur plusieurs lignes...

RACCOURCIS : ctrl + /
        ou : ctrl + shift + /


*/ 


//-- 1. Declarer une variable en JS

var Prenom;

// -- 2. Affecter une Valeur

Prenom = "Marie-Pierre";

// -- 3 .

console.log(Prenom);



/*-------------------
/   LES TYPES DE VARIABLES ☺😅 ️  /
------------------------*/ 

// -- "typeof" me permet de connaitre le type de ma variable

console.log(typeof Prenom);



// -- Declaration et affection d'une valeur à une variable

var Age = 22;

// -- 

console.log(Age);

//--

console.log(typeof Age);


/***--------------------------------------------

~ LA PORTEE DES VARIABLES ~

Les variables déclarées directement à la racine du 
fichier sont appelées variables "GLOBALES".

Elles sont disponible dans l'ensemble de votre document 
y compris dans les fonctions / boucles.


La portée des variables GLOBALES s'arrêtent au fichier. 
Si je change de page, les variables n'existent plus.


Les variables déclarées à l'interieur d'une fonction
sont appemlées varibales "LOCALES".

Elles sont disponible uniquement à l'intérieur          
de celle-ci.


--------------------------------------------------|*/



// -- Les  Variables de type FLOAT


var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);


// --- LES Booleens (VRAI / FAUX)

var unBooleen = false;  // -true
console.log(unBooleen);
console.log(typeof unBooleen);





/*


- LES CONSTANTES -


La déclaration CONST permet de creer une constante 
accessible UNIQUEMENT en LECTURE

Sa valeur ne pourra pas être modifiée par des réacffections ulterieures.

Une constante ne peut pas être déclarée à nouveau.

Generalement par convention, les constantes sont en MAJUSCULES.


**** */


const HOST = "localhost";
const USER = "root";
const PASW = "mysql";

// je ne peux faire cela..
// USER = "127.0.0.1";
//




/*****
 * 
 * 
 * LA MINUTE INFO
 * 
 * Au fur et à mesure que l'on affecte ou reaffecte des valeurs
 * à une variable, celle-ci prend ma nouvemme valeur et le nouveau type (pas besoin de se soucier de l'allocation memoire pour reaffecter une variable comme en C).
 * 
 * 
 * En Javascript (ECMA Script -ES) , les variables sont auto-typées.
 * 
 * 
 * Pour convertir une variable de type NUMBER en STRING
 * je peux utiliser les fonctions natives en JS.
 * 
 * 
 * 
 * ***/


var unNombre= "24";
 console.log("24");
 console.log(typeof unNombre);


 /* --- La fonction  parseInt() permet de retourner
 un ENTIER à partir d'un string

 */


 // -- Je reacffecte une valeur à ma variable
 unNombre= "12.55";
 unNombre = parseInt(unNombre);
 console.log(typeof unNombre);


 /* -- La fonction parseFloat() permett de retourner un FLOAT à  partir d'un STRING*/


 /*
  Convertion d'un Nombre en String avec toString()


 
 */

var unNombreQuiDevientString = 10;
console.log(unNombreQuiDevientString);



console.log(typeof unNombreQuiDevientString);

console.log(typeof unNombreQuiDevientString.toString() );








