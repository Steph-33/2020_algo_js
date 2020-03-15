// Faire une fonction qui retourne true. 
function returnTrue(){
    return true;
}

// Faire une fonction qui prend en paramètre une chaîne de caractères et 
// qui retourne cette même  chaîne.
function string(a){
    return a;
} 

// Faire une fonction qui prend en paramètre deux chaînes de caractères et 
// qui revoit la concaténation de ces deux chaînes
function concat(a,b){
    return a+b;
}

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