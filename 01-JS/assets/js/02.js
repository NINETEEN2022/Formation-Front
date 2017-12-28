// -- Declarer un tableau indexé

var monTableau = [  ];
var myArray = new Array;

// -- Affecter des valeurs à un tableau indexé

monTableau[0] = "Marie-Pierre";

monTableau[1] = "Hugo";

monTableau[2] = "Hamid";


// --  Afficher le contenu 

console.log(monTableau[0]);

console.log(monTableau[1]);

console.log(monTableau[2]);


console.log(monTableau); // -- Afficher toutes les données.


// -- Declarer et Affecter des valeurs à un tableau indexé.

var NosPrenoms = ["Marie-Pierre", "Thomas","Olivier","Chloé","Riad", "Hugo"];
console.log(NosPrenoms);



// -- Declarer et affecter des valeurs à un Objet
// --  PAS DE TABLEAU ASSOCIATIF EN JS  !!!!

var Coordonnees = {

        prenom  : "Hugo",
        nom     : "LIEGEARD",
        age     : 28

};

console.log(Coordonnees);

console.log(typeof Coordonnees);


//***EXERCICE*****/



//****creer  2 tableaux***/


var listeDePrenoms = ["Hugo", "Marie-Pierre", "Lounis", "Romain"];
var listeDeNoms = ["LIEGEARD", "DUPOUX", "DGADEN", "ELIE"];


// --- Je vais creer un tableau à 2 dimensions à partir de mes 2 tableaux precedents.

var Annuaire = [listeDePrenoms, listeDeNoms];
console.log(Annuaire);


// --- Hugo LIEGEARD

console.log(Annuaire[0][0]);
console.log(Annuaire[1][0]);


/**Exercice

Creez un tableau à 2 dimensions appelé "AnnuaireDesStagiaires"
qui contiendra toutes les coordonnées pour chaque stagiaire.


Ex. Nom, Prenom, Tel



*/


/*var listeDePrenoms = ["Olivier", "Hamid", "Walid"];
var listeDeNoms = ["Charpentier", "Kezzal", "Ismiel"];
var telephones = ["0755147836","0652127319","0653442212"];

var AnnuaireDesStagiaires = [listeDePrenoms, listeDeNoms, telephones];

console.log([0][1] [2]); ***/


/****correction****/ 

var AnnuaireDesStagiaires = [
    
    {prenom : 'Hugo', nom:"Liegeard", Tel:"0783 97 15 15" },
    
    {prenom : 'Chloe', nom:"Thuillier", Tel:"0783 97 15 15" },
    
    {prenom : 'Anis', nom:"Chabani", Tel:"0783 97 15 15" },

];


console.log(AnnuaireDesStagiaires);

console.log(AnnuaireDesStagiaires[1][prenom]);

console.log(AnnuaireDesStagiaires[1].prenom);






// -- Exemple de Tableau 3D

var Contacts = [

    {
        prenom      : "Hugo",
        nom         : "LIEGEARD",
        coordonnees : {
                        email   : "wf3@hl-media.fr",
                        adresse : {
                                    ville   : "Ducos",
                                    cp      : 97224,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 108 328",
                                    fax     : "0596 108 632",
                                    port    : "0783 97 15 15"
                                  }
                      }
    },
    {
        prenom      : "Rodrigue",
        nom         : "NOUEL",
        coordonnees : {
                        email   : "wellcommunication.net@gmail.com",
                        adresse : {
                                    ville   : "Fort-de-France",
                                    cp      : 97200,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 XXX XXX",
                                    fax     : "0596 XX XX XX",
                                    port    : "0696 07 04 34"
                                  }
                      }
    }

];

console.log(Contacts);
console.log(Contacts[0].coordonnees.tel.port);
console.log(Contacts[1].coordonnees.tel.port);






/************************ */

/************************ */
// -- Declarer un tableau indexé

var monTableau = [  ];
var myArray = new Array;

// -- Affecter des valeurs à un tableau indexé

monTableau[0] = "Marie-Pierre";

monTableau[1] = "Hugo";

monTableau[2] = "Hamid";


// --  Afficher le contenu 

console.log(monTableau[0]);

console.log(monTableau[1]);

console.log(monTableau[2]);


console.log(monTableau); // -- Afficher toutes les données.


// -- Declarer et Affecter des valeurs à un tableau indexé.

var NosPrenoms = ["Marie-Pierre", "Thomas","Olivier","Chloé","Riad", "Hugo"];
console.log(NosPrenoms);



// -- Declarer et affecter des valeurs à un Objet
// --  PAS DE TABLEAU ASSOCIATIF EN JS  !!!!

var Coordonnees = {

        prenom  : "Hugo",
        nom     : "LIEGEARD",
        age     : 28

};

console.log(Coordonnees);

console.log(typeof Coordonnees);


//***EXERCICE*****/



//****creer  2 tableaux***/


var listeDePrenoms = ["Hugo", "Marie-Pierre", "Lounis", "Romain"];
var listeDeNoms = ["LIEGEARD", "DUPOUX", "DGADEN", "ELIE"];


// --- Je vais creer un tableau à 2 dimensions à partir de mes 2 tableaux precedents.

var Annuaire = [listeDePrenoms, listeDeNoms];
console.log(Annuaire);


// --- Hugo LIEGEARD

console.log(Annuaire[0][0]);
console.log(Annuaire[1][0]);


/**Exercice

Creez un tableau à 2 dimensions appelé "AnnuaireDesStagiaires"
qui contiendra toutes les coordonnées pour chaque stagiaire.


Ex. Nom, Prenom, Tel



*/


/*var listeDePrenoms = ["Olivier", "Hamid", "Walid"];
var listeDeNoms = ["Charpentier", "Kezzal", "Ismiel"];
var telephones = ["0755147836","0652127319","0653442212"];

var AnnuaireDesStagiaires = [listeDePrenoms, listeDeNoms, telephones];

console.log([0][1] [2]); ***/


/****correction****/ 

var AnnuaireDesStagiaires = [
    
    {prenom : 'Hugo', nom:"Liegeard", Tel:"0783 97 15 15" },
    
    {prenom : 'Chloe', nom:"Thuillier", Tel:"0783 97 15 15" },
    
    {prenom : 'Anis', nom:"Chabani", Tel:"0783 97 15 15" },

];


console.log(AnnuaireDesStagiaires);

console.log(AnnuaireDesStagiaires[1]["prenom"]);

console.log(AnnuaireDesStagiaires[1].prenom);






// -- Exemple de Tableau 3D

var Contacts = [

    {
        prenom      : "Hugo",
        nom         : "LIEGEARD",

        coordonnees : {
                        email   : "wf3@hl-media.fr",
                        adresse : {
                                    ville   : "Ducos",
                                    cp      : 97224,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },

                        tel     : {
                                    fixe    : "0596 108 328",
                                    fax     : "0596 108 632",
                                    port    : "0783 97 15 15"
                                  }
                      }
    },
    {
        prenom      : "Rodrigue",
        nom         : "NOUEL",
        coordonnees : {
                        email   : "wellcommunication.net@gmail.com",
                        adresse : {
                                    ville   : "Fort-de-France",
                                    cp      : 97200,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 XXX XXX",
                                    fax     : "0596 XX XX XX",
                                    port    : "0696 07 04 34"
                                  }
                      }
    }

];

console.log(Contacts);
console.log(Contacts[0].coordonnees.tel.port);
console.log(Contacts[1].coordonnees.tel.port);






/************************ */

/*   AJOUTER UN ELEMENT  */

/************************ */



var Couleurs = ["Rouge","Jaune","Vert"]

/*****
 * 
 * Si je souhaite ajouter un élément dans mon tableau.
 * Je fais appel à la fonction push() qui me renvoi le 
 * le nombre d'éléments de mon tableau; que je peux récupérer
 * facultativement dans un variable.
 * 
 * nb / La fonction unshift() permet d'ajouter un ou plusieurs éléments en début de tableau.
 * 
 */

 console.log(Couleur);
 var nombreElementsDeMonTableau = Couleurs.push("orange");
 console.log(Couleurs);
console.log(nombreElementsDeMonTableau);







/**********/
 /* 
 * 
 * 
 * 
 * **************************************** 

    La fonction pop() me permet de supprimer le dernier élément de mon
    tableau et d'en récupérer la valeur.

    La meme chose est possible avec le premier élément; en utilisant la fonction shift()

    NB: La fonction  splice() vous permet de faire sortir un ou plusieurs léments de votre

    tableau

 /***********************************************/


 var monDernierElement = Couleurs.pop();
 console.log(monDernierElement);
 console.log(couleurs);


















