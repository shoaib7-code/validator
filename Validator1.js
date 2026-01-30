document.getElementById("login").addEventListener("click", validate);

function validate(e) {
    // 1. Rimosse parentesi da .value (è una proprietà, non una funzione)
    let name = document.getElementById("name").value.trim().toLowerCase();

    let alphabet = "abcdefghijklmnopqrstuvwxyz ";

    let age = document.getElementById("age").value;

    let isChecked = document.getElementById("flag").checked;

    let password = document.getElementById("password").value.trim();
    let flagMaiuscolo=false;
    let flagMinuscoli=false;
    let flagNumeri=false;
    let flagSpeciali=false;
    let carSpeciali="#$ç)(";
    let flagLenght=false;


    let result = document.getElementById("result");
    // Reset del messaggio prima del controllo
    result.innerHTML = "";

    // 3. Corretto '.len' in '.length'
    for(let i = 0; i < name.length; i++) {
        if(!alphabet.includes(name[i])) {
            // 4. Usato .innerHTML per interpretare il tag <br>
            result.innerHTML = "<br>Il nome deve contenere solo lettere e spazi";
            return; // Blocca il ciclo appena trova l'errore
        }
    }
    if(age<18 || age>100){
        result.innerHTML="<br>la età deve essere tra 18 e 100";
        return
    }

    if (!isChecked) {
        result.innerHTML = "<br>Devi accettare i termini (spuntare la checkbox)";
        return;
    }
    for(let i = 0; i < password.length; i++) {
        if (password.length >= 8 && password.length<=20){ flagLenght = true; } // Esempio: lunghezza minima 8

        for(let i = 0; i < password.length; i++) {
            let char = password[i];
            
            if (char >= 'A' && char <= 'Z') flagMaiuscolo = true;
            else if (char >= 'a' && char <= 'z') flagMinuscoli = true;
            else if (char >= '0' && char <= '9') flagNumeri = true;
            else if (carSpeciali.includes(char)) flagSpeciali = true;
        }
    
        if (!flagLenght || !flagMaiuscolo || !flagMinuscoli || !flagNumeri || !flagSpeciali) {
            result.innerHTML = "<br>La password deve avere: 8+ caratteri, maiuscola, minuscola, numero e un simbolo (#$ç)(";
            return;
        }
    }
    
    // Se il ciclo finisce senza errori, mostra il nome
    result.innerText = name;
    
}