let start = document.getElementById("start");

start.addEventListener("click",
    
    function(){
        
        // L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
        // prompt("PARI o DISPARI")
        let userchoice = document.getElementById("choice").value
        console.log(userchoice);
        
        // parseInt(prompt("Inserire un numero da 1 a 5"))
        let userNumber = parseInt (document.getElementById("number").value) ;
        console.log(userNumber);

        // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
        let pcNumber = randomNumber (1, 5);
        console.log(pcNumber);
        

        // Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
        let vincitore = paridisparivincitore(userNumber, pcNumber) ;
        console.log(vincitore);
        
        let answer = document.getElementById("answer");
        answer.innerHTML = vincitore;
        
    }
    )
    
    
    // dichiarazione funzioni
    
    function randomNumber (min, max) {
        let pcNumber = Math.floor(Math.random() * (max - min)) + min;
        return pcNumber
    }
    
    function paridisparivincitore (user, pc) {
        let esito = user + pc;
        if(esito % 2 === 0 && userchoice === "PARI") {
            return "Hai vinto"
        }
        
        else {
            return "Hai perso"
        }
        
    }