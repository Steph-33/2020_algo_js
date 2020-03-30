//Création d'une boucle for pour itérer sur toutes les valeurs du tableau "prenoms".
//1. Supprimer les doublons du tableau "prenoms"
//2. Faite une concaténation du tableau "prenoms" en chaîne de caractères avec le séparateur suivant ", "
//3. Afficher le résultat dans la console!
//const prenoms = ["Thomas", "Sarah", "Alexandre","Alexandre",, "Mélodie", "Jonathan", "Laure"];


const prenoms = ["Thomas", "Sarah", "Alexandre","Alexandre", "Mélodie", "Jonathan", "Laure"];
// Première solution
function removeDuplicates(prenoms) {
  let unique = {};
  prenoms.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}
uniquePrenoms = removeDuplicates(prenoms)
console.log(uniquePrenoms.join());


// Deuxième solution
for (let i = 0; i < prenoms.length; i++) {
    for (let j = 0; j < prenoms.length; j++) {
        if(prenoms[i] == prenoms[j] && i != j){
            prenoms.splice(i,1)
        }
    }
}
var prenoms2 = prenoms.join(',')
console.log(prenoms2)
