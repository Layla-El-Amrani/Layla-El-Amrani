// Exercice 1 :
let nums = [2, 5, 8, 7, 3];
let nouvNums = nums.map(num => num * 3);
console.log(nouvNums); // [6, 15, 24, 21, 9]


// Exercice 2 :
const personnes = [
  { nom: "ALAMI", age: 33, estMember: true, frais: 500 },
  { nom: "FATIHI", age: 24, estMember: false, frais: 550 },
  { nom: "RAJI", age: 45, estMember: true, frais: 950 },
  { nom: "RAMI", age: 37, estMember: false, frais: 680 }
];

// Fonction pour obtenir les membres
const getMembers = (personnes) => {
  return personnes
    .filter(personne => personne.estMember) // Filtrer les membres
    .map(personne => personne.nom); // Récupérer les noms des membres
};

// Fonction pour calculer le total des frais des membres
const calculerFraisTotal = (personnes) => {
  return personnes
    .filter(personne => personne.estMember) // Filtrer les membres
    .reduce((total, personne) => total + personne.frais, 0); // Additionner les frais
};

const members = getMembers(personnes);
const fraisTotal = calculerFraisTotal(personnes);

console.log("Membres:", members); // ["ALAMI", "RAJI"]
console.log("Frais total des membres:", fraisTotal); // 1450


// Exercice 3 :

const inscriptions = [
  { id: 10, nom: 'ALAMI', filiere: 'DEVOWFS' },
  { id: 11, nom: 'RAJI', filiere: 'DEVOWFS' },
  { id: 12, nom: 'NAJI', filiere: 'DEVOWFS' },
  { id: 13, nom: 'IBRAHIMI', filiere: 'DEVOWFS' }
];

const pureAppendInscription = (inscriptions, inscription) => [...inscriptions, inscription];

const nouvelleInscription = { id: 14, nom: 'BOUZIANE', filiere: 'DEVOWFS' };
let updatedInscriptions = pureAppendInscription(inscriptions, nouvelleInscription);

console.log(updatedInscriptions);


// Exercice 4 :

let inscription = [
  { id: 10, nom: 'ALAMI', filiere: 'DEVOWFS' },
  { id: 11, nom: 'RAJI', filiere: 'DEVOWFS' },
  { id: 12, nom: 'NAJI', filiere: 'DEVOWFS' },
  { id: 13, nom: 'IBRAHIMI', filiere: 'DEVOWFS' }
];

// Insertion d'une inscription à une position donnée
const pureInsert = (inscriptions, id, nom, filiere, position) => {
  let newInscription = { id, nom, filiere };
  let newArray = [...inscriptions];
  newArray.splice(position, 0, newInscription);
  return newArray;
};

// Suppression d'une inscription par position
const pureDeleteByPosition = (inscriptions, position) => {
  let newArray = [...inscriptions];
  newArray.splice(position, 1);
  return newArray;
};

// Suppression d'une inscription par ID
const pureDeleteByID = (inscriptions, id) => inscriptions.filter(inscription => inscription.id !== id);

// Mise à jour d'une inscription par position
const pureUpdateByPosition = (inscriptions, id, nom, filiere, position) => {
  let newArray = [...inscriptions];
  newArray[position] = { id, nom, filiere };
  return newArray;
};

// Mise à jour d'une inscription par ID
const pureUpdateByID = (inscriptions, id, nom, filiere) => {
  return inscriptions.map(inscription =>
    inscription.id === id ? { ...inscription, nom, filiere } : inscription
  );
};


// Exercice 5 : *Quiz*
//1. *Réponse B* : <script>
//2. *Réponse A* : document.getElementById(‘span1’).innerHTML = ‘salut monde’
//3. *Réponse C* : Les deux (<head> et <body>)
//4. *Réponse C* : <script src=’script1.js’>
//5. *Réponse B* : Non
//6. *Réponse B* : function function1()
//7. *Réponse C* : if(x == 7)
//8. *Réponse D* : if(x != 7)
//9. *Réponse B* : while (k <= 20)
//10. *Réponse C* : for(j = 0; j <= 10; j++)
//11. *Réponse B* : const fruits = ['pomme', 'orange', 'banane']
//12. *Réponse B* : onclick
//13. *Réponse A* : Oui
//14. *Réponse D* : [7, 5, 9, 10]
//15. *Réponse B* : 7
//16. *Réponse D* : undefined
//17. *Réponse C* : [6, 14, 4, 10, 18, 8, 20]
//18. *Réponse A* : 30
//19. *Réponse B* : hello RAMI et salut FAHMI
//20. *Réponse B* : Affiche des valeurs de 1 à 59 puis recommence de 0 à 59.
