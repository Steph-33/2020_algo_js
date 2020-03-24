// Faire une fonction qui retourne true. 
// ES5
function returnTrue(){
    return true;
}
let resultat = returnTrue();
console.log (resultat);

// ES6
const returnFalse = () =>{
    return false;
}
console.log(returnFalse());

// Faire une fonction qui prend en paramètre une chaîne de caractères et 
// qui retourne cette même  chaîne.
// ES5
function string(str){
    return str;
} 

// ES6
const stringReturn = (str) =>{
    return str;
}
let name = "Toto";
let myName = stringReturn(name);
console.log(myName);

// Faire une fonction qui prend en paramètre deux chaînes de caractères et 
// qui revoit la concaténation de ces deux chaînes
function concat(string1,string2){
    return string1+string2;
}
console.log(concat("Steph et ", "Alice"))

// Faire une fonction qui prend en paramètre deux nombres. 
// La fonction doit retourner : 
// 'Le premier nombre est plus grand' si le premier nombre est plus grand que le deuxième 
// 'Le premier nombre est plus petit' si le premier nombre est plus petit que le deuxième 
// 'Les deux nombres sont identiques' si les deux nombres sont égaux
function number(a,b){
    if(a>b){
        return ('Le premier nombre est plus grand');
    }else if(a<b){
        return ('Le premier nombre est plus petit');
    }
    else{
        return ('Les deux nombres sont identiques');
    }
}
console.log(number(5,6));