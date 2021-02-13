export const mixinTraductions = {
    data () {
        return {
            /* Choix de la langue */
            lang: "french"
        }
    },
    fr: {
        /* Accuil */
        Bonjour: "Bonjour",
        presentation1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
            "      Aliquam asperiores delectus facere fuga harum iusto,\n" +
            "      maxime molestias mollitia nam neque non quam quibusdam quidem quod ratione tempora totam vel velit?",
        /* Section profile */
        Contact: "Me joindre",
        Skills: "Compétences",
        About: "À propos",
        /* Section du menu */
        home: "Accueil",
        contact: "Contact",
        profile: "Profil",
        projects: "Projets",
        prename: "Prénom",
        name:"Nom",
        /* Section des projects */
        CHVRCHES: "CHVRCHES",
        SpotiQuebec: "SpotiQuebec",
        project1: "Projet musical sous le framework React",
        project2: "Projet en PHP sur la gestion de nouvelles lors du cours de Programmation",
        project3: "Projet basé sur le groupe de musique CHVRCHES lors du cours d'intégration web",
        clinique_veterinaire: "Clinique Vétérinaire",
        /* Section contact */
        Courriel: "Courriel",
        Nom: "Nom",
        Prenom: "Prénom",
        Categorie: "Catégorie",
        developpement_web: "Développement Web",
        programmation: "Programmation",
        offre_demploi: "Offre d'emploi",
        commentaires: "Commentaires",
        Soumettre: "Soumettre"
    },
    en: {
        /* Accueil" */
        Bonjour: "Hi",
        presentation1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
            "      Aliquam asperiores delectus facere fuga harum iusto,\n" +
            "      maxime molestias mollitia nam neque non quam quibusdam quidem quod ratione tempora totam vel velit?",
        /* Section profile */
        Compétences: "Skills",
        Contact: "Contact",
        Projets: "Projects",
        /* Section du menu */
        home: "Home",
        name: "Name",
        contact: "Contact",
        profile: "Profile",
        projects: "Projects",
        /* Sectiondes des projets */
        clinique_veterinaire: "Health Animals Clinic",
        project1: "musical project in React Framework",
        project2: "Project for news management using PHP learned during PHP class",
        project3: "Project based on the music band CHVRCHES using html/css 3 during web integrate class",
        SpotiQuebec: "SpotiQuebec",
        prename: "Prename",
        CHVRCHES: "CHVRCHES",
        Nom: "Name",
        About: "About",
        Prenom: "Prename",
        Courriel: "Email",
        Categorie:" Categorie",
        developpement_web: "Web Development",
        programmation: "Programmation",
        offre_demploi: "Job offer",
        commentaires: "Comments",
        Soumettre: "Submit"
    },
    filters: {

        /* Fonction de traduction selon la langue définie, en utilisant le if else */
        traduire: function (value, lang) {

            /* Si la langue est en français */

            if (lang === 'french') {

                /* Ave vue 2.2.0 + , l'utilisation de keys en v-for est requise */
                /* let mots = Object.mots(mixinTraductions.fr);*/

                let keys = Object.keys(mixinTraductions.fr);
                for (let i = 0; i < keys.length; i++) {
                    if (keys[i] === value) {
                        return mixinTraductions.fr[value]
                    }
                }
            }

            /* Sinon si c'est en anglais */

             else if (lang === 'english') {
                 let keys = Object.keys(mixinTraductions.en);
                 for (let i =0;i < keys.length;i++){
                     if (keys[i] === value) {
                         return mixinTraductions.en[value]
                     }

                }
            }
        },
    }
};
