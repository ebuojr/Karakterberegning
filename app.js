var karakter;
var procent;

//Funktion setup
function getValue() {
    procent = document.getElementById('procent_field').value;
    document.getElementById('karakter_heading').innerHTML = brn(procent);
}


// Køre funktionen når man trykker på Entre 
document.addEventListener('keypress', function(event){
    if (event.keyCode === 13) {
        getValue();
    }
});


// Switch for at tjekke procenter 
function brn(procent) {
    switch (true) {
        case procent >= 92 && procent <= 100:
            karakter = 12;
            //console.log("12");
            break;
        case procent >= 72 && procent <= 91:
            karakter = "10";
            //console.log("10");
            break;
        case procent >= 48 && procent <= 71:
            karakter = "07";
            //console.log("07");
            break;
        case procent >= 28 && procent <= 47:
            karakter = "04";
            //console.log("04");
            break;
        case procent >= 20 && procent <= 27:
            karakter = "02";
            //console.log("02");
            break;
        case procent >= 5 && procent <= 19:
            karakter = "00";
            //console.log("00");
            break;
        case procent >= 0 && procent <= 4:
            karakter = "-3";
            //console.log("-3");
            break
        default:
            alert(" 📍 Ops!.. Du har indtastet ugyldige data 🤦🏼‍♂️")
            karakter= "lala lala lalaaaaaa";
            break;
    };
    return karakter;
}
