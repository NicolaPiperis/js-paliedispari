// Chiedere all’utente di inserire una parola


let userWord = prompt("Inserire una parola");
console.log(userWord);



function myFunction (string) {

    let reverse = userWord.split("").reverse().join("");
    return reverse;

}

let reverse = myFunction(userWord);
console.log(reverse);


if(userWord === reverse) {
    console.log("la parola è palindroma");
} else {
    console.log("la parola non è polindroma");
}

// Creare una funzione per capire se la parola inserita è palindroma    


