
    //---- Lesflemards.js


    function w(parametreDeMaFonction){

        document.write(parametreDeMaFonction);
    }


    
    function l(e) {

        console.log(e)
    }



   

    var PremierTrimestre = [

        
        
            {
                prenom      : "Hugo",
                nom         : "LIEGEARD",
        
                moyenne : {
                                Francais   : 12,
                                Mathematique : 19,
                                Physique : 4
                                
        
                               
                              }
            },
        
            {
                prenom      : "Hamid",
                nom         : "KEZZAL",
        
                moyenne : {
                                Francais   : 10,
                                Mathematique : 12,
                                Physique : 11
        
                               
                              }
            },
        
        
            {
                prenom      : "Walid",
                nom         : "Ismiel",
        
                moyenne : {
                                Francais   : 15,
                                Mathematique : 15,
                                Physique : 15
                                
        
                               
                              }
            },
        
        
            {
                prenom      : "Olivier",
                nom         : "Charpentier",
        
                moyenne : {
                                Francais   : 17,
                                Mathematique : 16,
                                Physique : 15
                                
        
                               
                              }
            },
        
        
            {
                prenom      : "Gregory",
                nom         : "Malaud",
        
                moyenne : {
                                Francais   : 17,
                                Mathematique : 18,
                                Physique : 17
                                
        
                               
                              }
            },
        
        
        
            {
                prenom      : "Aristid",
                nom         : "Bassole",
        
                moyenne : {
                                Francais   : 17,
                                Mathematique : 18,
                                Physique : 17
                                
        
                               
                              }
            }
        
        
        ]



        l(PremierTrimestre);

        w('<ol>');

        //--Afficher liste etudiants
        for(let i=0; i<PremierTrimestre.lengh; i++){ 
    
    
        // --- On recupère l'objet etudiant de l'iteration

        let etudiants = PremierTrimestre[i];

        //-- Aperçu dans la console


        l(etudiants);

        // -- Ici, mes variables seront remises à 0 à chaque nouveau étudiant (itération).

        var NombreDeMatiere = 0, SommeDesNotes = 0;

        // -- Afficher le nom et prenom d'un Etudiant

       
        w('<li>');

            w(etudiants.prenom + '' +etudiants.nom);
            // -- Afficher la moyenne de l'étudiant aux differentes matières


            w('<ul>');
                for(let matiere in etudiants.moyenne){

                    l(matiere);
                    l(Etudiant.moyenne[matiere]);

                    NombreDeMatiere++;
                    SommeDesNotes += Etudiant.moyenne[matiere];


                    w('<li>');
                        w(matiere + '' + Etudiant.moyenne[matiere]);    
                    w('</li>')        
                } // -- Fin de la Boucle Matière 
                
                w('<li>');
                    w('<strong> Moyenne Générale : </strong> ' + (SommeDesNotes / NombreDeMatiere).toFixed(2));            w('</ul>');
        w('</li>');
    w('</ul>');
w('</li><br>');


} // -- Fin de la boucle étudiant

 w('</ol>');



