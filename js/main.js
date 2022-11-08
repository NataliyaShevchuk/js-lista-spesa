// Descrizione:
// Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. 
// Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone,
//  in particolare alla variabile di indice.
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) 
// gli elementi della lista individualmente con un ciclo while.


const listaSpesa = [ "pasta", "sugo", "parmiggiano", "tonno"];
const ingredienteEl = document.getElementById("ingrediente");

let ingrediente = false;
let i = 0;


while ( ingrediente === false && i < listaSpesa.length) { 
    ingredienteEl.innerHTML = (listaSpesa);

    if (listaSpesa[i] === ingrediente ){
        ingrediente === true;
        const risultato = ingrediente;
        console.log = (risultato);
    } 

    console.log(listaSpesa[i]);
    

    i++;
}

if ( ingrediente === true ){
    ingredienteEl.innerHTML = ( risultato);
} else{
    ingredienteEl.innerHTML = ( listaSpesa);
}



