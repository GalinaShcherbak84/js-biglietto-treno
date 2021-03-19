//chiedere il numero di km
var chilometri = parseInt(prompt('Quanti chilometri devi percorrere?'));
if(isNaN(chilometri)){
    alert('Devi inserire un numero.');
    var chilometri = parseInt(prompt('Quanti chilometri devi percorrere?'));
}
console.log(chilometri);
document.getElementById('numeroKm').innerHTML = "il numero di chilometri inserito: " + chilometri;
//chiedere l'età
var età = prompt('Quanti anni hai?');
console.log(età);
document.getElementById('anni').innerHTML = "l'età inserita: " + età;
//prezzo al chilometro
var prezzoKm = 0.21
console.log(prezzoKm);
//calcolo prezzo biglietto
var sconto1 = 0.8
var sconto2 = 0.6
var risultato;
if (età < 18){
    risultato = prezzoKm * chilometri * sconto1;
    document.getElementById('scontiMinorenni').innerHTML = "è stato applicato lo sconto del 20% per i minorenni."
}else if(età >= 65){
    risultato = prezzoKm * chilometri * sconto2;
    document.getElementById('scontiPensionati').innerHTML = "è stato applicato lo sconto del 40% per i pensionati."
}else {
    risultato = prezzoKm * chilometri 
    document.getElementById('nienteSconto').innerHTML = "Non hai il diritto su nessun tipo di sconto."
}
var formatRisultato = risultato.toFixed(2);
console.log(formatRisultato);
document.getElementById('sconti').innerHTML = "Il prezzo finale: " + formatRisultato + ' euro' ;

