// Descrizione:
// Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. 
// Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone,
//  in particolare alla variabile di indice.
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) 
// gli elementi della lista individualmente con un ciclo while.

//creo la lista della spesa
const listaSpesa = [ "pasta", "sugo", "parmiggiano", "tonno"];
//riprendo il container da html
const ingredienteEl = document.getElementById("ingrediente");

//dichiaro la mia variabile in forma false 
let ingrediente = false;
let i = 0;

// for (let i = 0; i < listaSpesa.length; i++ ){
//     console.log(listaSpesa[i]);
//     ingredienteEl.innerHTML += (listaSpesa[i]);
// }
while ( ingrediente === false && i < listaSpesa.length) { 
    ingredienteEl.innerHTML += (listaSpesa[i] + " ");
    console.log(listaSpesa[i]);

    i++;
}
    






