// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

   panneaux : [
    {
        "id" : "1",
        "libelle" : "Dangers",
        "image" :"assets/images/panneaux/danger.png",
        "audio":"assets/audio/paneau/danger.ogg",
        "sousEnsemble": [
            {
                "id": "1",
                "nom": "Virage à droite",
                "image": "assets/images/danger/d1.png",
                "audio": "",
                "description": "voici une description"
            },
            {
                "id": "2",
                "nom": "Arrêt à l'intersection",
                "image": "assets/images/danger/d2.png",
                "audio": "",
                "description": "voici une description"
            },
            {
                "id": "3",
                "nom": "Endroit fréquenté par les enfants",
                "image": "assets/images/danger/d3.png",
                "audio": "",
                "description": "voici une description"
            },
            {
                "id": "4",
                "nom": "Passage pour pieton",
                "image": "assets/images/danger/d4.png",
                "audio": "",
                "description": "voici une description"
            },
            {
                "id": "5",
                "nom": "Annonce de feux tricolore",
                "image": "assets/images/danger/d5.png",
                "audio": "",
                "description": "voici une description"
            }
        ]
    },
    {
      "id" : "2",
      "libelle" : "Indications",
      "image" :"assets/images/panneaux/indication.png",
      "audio":"assets/audio/paneau/indication.ogg",
      "sousEnsemble": [
        {
            "id": "1",
            "nom": "Lieu aménagé pour le stationnement",
            "image": "assets/images/indication/C1a.png",
            "audio": "",
            "description": "voici une description"
        },
        {
            "id": "2",
            "nom": "Station de taxi",
            "image": "assets/images/indication/C5.png",
            "audio": "",
            "description": "voici une description"
        },
        {
            "id": "3",
            "nom": "Circulation à sens unique",
            "image": "assets/images/indication/C12.png",
            "audio": "",
            "description": "voici une description"
        },
        {
            "id": "4",
            "nom": "Passage pour pietons",
            "image": "assets/images/indication/C20a.png",
            "audio": "",
            "description": "voici une description"
        },
        {
            "id": "5",
            "nom": "Arrêt d'autobus",
            "image": "assets/images/indication/C6.png",
            "audio": "",
            "description": "voici une description"
        }
    ]
  },
    {
        "id" : "3",
        "libelle" : "Interdictions",
        "image" :"assets/images/panneaux/interdiction.png",
        "audio":"assets/audio/paneau/interdiction.ogg",
        "sousEnsemble": [
          {
              "id": "1",
              "nom": "Interdiction de tourner à gauche",
              "image": "assets/images/interdiction/Bda.png",
              "audio": "",
              "description": "voici une description"
          },
          {
              "id": "2",
              "nom": "Interdiction de faire demi-tour",
              "image": "assets/images/interdiction/B2c.png",
              "audio": "",
              "description": "voici une description"
          },
          {
              "id": "3",
              "nom": "Accès interdit aux cyclomoteurs",
              "image": "assets/images/interdiction/B9g.png",
              "audio": "",
              "description": "voici une description"
          },
          {
            "id": "4",
            "nom": "Limitation de vitesse",
            "image": "assets/images/interdiction/B14.png",
            "audio": "",
            "description": "voici une description"
        },
        {
          "id": "5",
          "nom": "Stationnement interdit",
          "image": "assets/images/interdiction/B6a1.png",
          "audio": "",
          "description": "voici une description"
      },
        ]
    },
   
    {
        "id" : "4",
        "libelle" : "Obligations",
        "image" :"assets/images/panneaux/obligation.png",
        "audio":"assets/audio/paneau/obligation.ogg",
        "sousEnsemble": [
          {
              "id": "1",
              "nom": "Piste obligatoire pour les cyclistes",
              "image": "assets/images/obligation/B22a.png",
              "audio": "",
              "description": "voici une description"
          },
          {
              "id": "2",
              "nom": "Obligation de tourner à droite avant le panneau",
              "image": "assets/images/obligation/B21-1.png",
              "audio": "",
              "description": "voici une description"
          },
          {
              "id": "3",
              "nom": "Obligation de tourner à gauche avant le panneau",
              "image": "assets/images/obligation/B21-2.png",
              "audio": "",
              "description": "voici une description"
          },
          {
              "id": "4",
              "nom": "Chemin obligatoire pour piétons",
              "image": "assets/images/obligation/B22b.png",
              "audio": "",
              "description": "voici une description"
          },
          {
            "id": "5",
            "nom": "Voie reservée aux véhicules des transports en commun",
            "image": "assets/images/obligation/B27a.png",
            "audio": "",
            "description": "voici une description"
        },
        ]
    },
    {
      "id" : "5",
      "libelle" : "Localisations",
      "image" :"assets/images/panneaux/localisation.png",
      "audio":"assets/audio/paneau/localisation.ogg",
      "sousEnsemble": [
        {
            "id": "1",
            "nom": "Indique la rentrée d'une localité",
            "image": "assets/images/localisation/AA1.png",
            "audio": "",
            "description": "voici une description"
        },
        {
            "id": "2",
            "nom": "Indique la sortie d'une localité",
            "image": "assets/images/localisation/AA2.png",
            "audio": "",
            "description": "voici une description"
        },
      ]
    },
    {
      "id" : "6",
      "libelle" : "Directions",
      "image" :"assets/images/panneaux/direction.png",
      "audio":"assets/audio/paneau/direction.ogg",
      "sousEnsemble": [
        {
            "id": "1",
            "nom": "Indique plusieurs direction",
            "image": "assets/images/direction/d1.png",
            "audio": "",
            "description": "voici une description"
        },
        {
            "id": "2",
            "nom": "Indique une direction",
            "image": "assets/images/direction/d2.png",
            "audio": "",
            "description": "voici une description"
        }
      ]
    }
  ]
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
