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
                "audio": "assets/audio/danger/A1a.ogg",
                "description": "voici une description"
            },
            {
                "id": "2",
                "nom": "Arrêt à l'intersection",
                "image": "assets/images/danger/d2.png",
                "audio": "assets/audio/danger/AB4.ogg",
                "description": "voici une description"
            },
            {
                "id": "3",
                "nom": "Endroit fréquenté par les enfants",
                "image": "assets/images/danger/d3.png",
                "audio": "assets/audio/danger/A13a.ogg",
                "description": "voici une description"
            },
            {
                "id": "4",
                "nom": "Passage pour pieton",
                "image": "assets/images/danger/d4.png",
                "audio": "assets/audio/danger/A13b.ogg",
                "description": "voici une description"
            },
            {
                "id": "5",
                "nom": "Annonce de feux tricolore",
                "image": "assets/images/danger/d5.png",
                "audio": "assets/audio/danger/A17.ogg",
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
            "audio": "assets/audio/indication/C1a.ogg",
            "description": "voici une description"
        },
        {
            "id": "2",
            "nom": "Station de taxi",
            "image": "assets/images/indication/C5.png",
            "audio": "assets/audio/indication/C5.ogg",
            "description": "voici une description"
        },
        {
            "id": "3",
            "nom": "Circulation à sens unique",
            "image": "assets/images/indication/C12.png",
            "audio": "assets/audio/indication/C12.ogg",
            "description": "voici une description"
        },
        {
            "id": "4",
            "nom": "Passage pour pietons",
            "image": "assets/images/indication/C20a.png",
            "audio": "assets/audio/indication/C20a.ogg",
            "description": "voici une description"
        },
        {
            "id": "5",
            "nom": "Arrêt d'autobus",
            "image": "assets/images/indication/C6.png",
            "audio": "assets/audio/indication/C6.ogg",
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
              "audio": "assets/audio/interdiction/B2a.ogg",
              "description": "voici une description"
          },
          {
              "id": "2",
              "nom": "Interdiction de faire demi-tour",
              "image": "assets/images/interdiction/B2c.png",
              "audio": "assets/audio/interdiction/B2c.ogg",
              "description": "voici une description"
          },
          {
              "id": "3",
              "nom": "Accès interdit aux cyclomoteurs",
              "image": "assets/images/interdiction/B9g.png",
              "audio": "assets/audio/interdiction/B9g.ogg",
              "description": "voici une description"
          },
          {
            "id": "4",
            "nom": "Limitation de vitesse",
            "image": "assets/images/interdiction/B14.png",
            "audio": "assets/audio/interdiction/B14.ogg",
            "description": "voici une description"
        },
        {
          "id": "5",
          "nom": "Stationnement interdit",
          "image": "assets/images/interdiction/B6a1.png",
          "audio": "assets/audio/interdiction/B6a1.ogg",
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
              "audio": "assets/audio/obligation/B22a.ogg",
              "description": "voici une description"
          },
          {
              "id": "2",
              "nom": "Obligation de tourner à droite avant le panneau",
              "image": "assets/images/obligation/B21-1.png",
              "audio": "assets/audio/obligation/B21-1.ogg",
              "description": "voici une description"
          },
          {
              "id": "3",
              "nom": "Obligation de tourner à gauche avant le panneau",
              "image": "assets/images/obligation/B21-2.png",
              "audio": "assets/audio/obligation/B21-2.ogg",
              "description": "voici une description"
          },
          {
              "id": "4",
              "nom": "Chemin obligatoire pour piétons",
              "image": "assets/images/obligation/B22b.png",
              "audio": "assets/audio/obligation/B22b.ogg",
              "description": "voici une description"
          },
          {
            "id": "5",
            "nom": "Voie reservée aux véhicules des transports en commun",
            "image": "assets/images/obligation/B27a.png",
            "audio": "assets/audio/obligation/B27a.ogg",
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
            "audio": "assets/audio/localisation/AA1.ogg",
            "description": "voici une description"
        },
        {
            "id": "2",
            "nom": "Indique la sortie d'une localité",
            "image": "assets/images/localisation/AA2.png",
            "audio": "assets/audio/localisation/AA2.ogg",
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
            "audio": "assets/audio/direction/d1.ogg",
            "description": "voici une description"
        },
        {
            "id": "2",
            "nom": "Indique une direction",
            "image": "assets/images/direction/d2.png",
            "audio": "assets/audio/direction/d2.ogg",
            "description": "voici une description"
        }
      ]
    }

  ],
  
    quiz:[
      {
         "question":"assets/assets/audio/question/danger/A1a.ogg",
         "answer":"A1a",
         "image":"assets/assets/images/images/danger/A1a.png"
      },
      {
        "question":"assets/assets/audio/question/danger/A13a.ogg",
        "answer":"A13a",
        "image":"assets/assets/images/images/danger/A13a.png"
     },
     {
      "question":"assets/assets/audio/question/danger/A13b.ogg",
      "answer":"A13b",
      "image":"assets/assets/images/images/danger/A13b.png"
   },
   {
    "question":"assets/assets/audio/question/danger/A17.ogg",
    "answer":"A17",
    "image":"assets/assets/images/images/danger/A17.png"
  },
  {
    "question":"assets/assets/audio/question/danger/AB4.ogg",
    "answer":"AB4",
    "image":"assets/assets/images/images/danger/AB4.png"
  },
  {
    "question":"assets/assets/audio/question/direction/audio_a.ogg",
    "answer":"audio_a",
    "image":"assets/assets/images/images/direction/audio_a.png"
  },
  {
    "question":"assets/assets/audio/question/direction/audio_b.ogg",
    "answer":"audio_b",
    "image":"assets/assets/images/images/direction/audio_b.png"
  },
  {
    "question":"assets/assets/audio/question/indication/C1a.ogg",
    "answer":"C1a",
    "image":"assets/assets/images/images/indication/C1a.png"
  },
  {
    "question":"assets/assets/audio/question/indication/C5.ogg",
    "answer":"C5",
    "image":"assets/assets/images/images/indication/C5.png"
  },
  {
    "question":"assets/assets/audio/question/indication/C6.ogg",
    "answer":"C6",
    "image":"assets/assets/images/images/indication/C6.png"
  },
  {
    "question":"assets/assets/audio/question/indication/C12.ogg",
    "answer":"C12",
    "image":"assets/assets/images/images/indication/C12.png"
  },
  {
    "question":"assets/assets/audio/question/indication/C20a.ogg",
    "answer":"C20a",
    "image":"assets/assets/images/images/indication/C20a.png"
  },
  {
    "question":"assets/assets/audio/question/interdiction/qB2a.ogg",
    "answer":"qB2a",
    "image":"assets/assets/images/images/interdiction/B2a.png"
  },
  {
    "question":"assets/assets/audio/question/interdiction/qB2c.ogg",
    "answer":"qB2c",
    "image":"assets/assets/images/images/interdiction/B2c.png"
  },
  {
    "question":"assets/assets/audio/question/interdiction/qB6a1.ogg",
    "answer":"qB6a1",
    "image":"assets/assets/images/images/interdiction/B6a1.png"
  },
  {
    "question":"assets/assets/audio/question/interdiction/qB9g.ogg",
    "answer":"qB9g",
    "image":"assets/assets/images/images/interdiction/B9g.png"
  },
  {
    "question":"assets/assets/audio/question/interdiction/qB14(50).ogg",
    "answer":"qB14",
    "image":"assets/assets/images/images/interdiction/B14_(50).png"
  },
  {
    "question":"assets/assets/audio/question/localisation/audio_a.ogg",
    "answer":"B14_",
    "image":"assets/assets/images/images/localisation/AA1.png"
  },
  {
    "question":"assets/assets/audio/question/localisation/audio_b.ogg",
    "answer":"audio_b",
    "image":"assets/assets/images/images/localisation/AA2.png"
  },
  {
    "question":"assets/assets/audio/question/obligation/B21-1.ogg",
    "answer":"B21-1",
    "image":"assets/assets/images/images/obligation/B21-1.png"
  },
  {
    "question":"assets/assets/audio/question/obligation/B21-2.ogg",
    "answer":"B21-2",
    "image":"assets/assets/images/images/obligation/B21-2.png"
  },
  {
    "question":"assets/assets/audio/question/obligation/B22a.ogg",
    "answer":"B22a",
    "image":"assets/assets/images/images/obligation/B22a.png"
  },
  {
    "question":"assets/assets/audio/question/obligation/B22b.ogg",
    "answer":"B22b",
    "image":"assets/assets/images/images/obligation/B22b.png"
  },
  {
    "question":"assets/assets/audio/question/obligation/B27a.ogg",
    "answer":"B27a",
    "image":"assets/assets/images/images/obligation/B27a.png"
  }
  ],
   Score:[
     {
       "score":0
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
