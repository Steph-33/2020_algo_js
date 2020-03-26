//Création d'une boucle for pour itérer sur toutes les valeurs du tableau "prenoms".
//1. Supprimer les doublons du tableau "prenoms"
//2. Faite une concaténation du tableau "prenoms" en chaîne de caractères avec le séparateur suivant ", "
//3. Afficher le résultat dans la console!
//const prenoms = ["Thomas", "Sarah", "Alexandre","Alexandre",, "Mélodie", "Jonathan", "Laure"];

const prenoms = ["Thomas", "Sarah", "Alexandre","Alexandre", "Mélodie", "Jonathan", "Laure"];
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


