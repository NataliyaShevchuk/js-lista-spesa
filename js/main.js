const listaSpesa = [ "pasta", "sugo", "parmiggiano", "tonno"];
const ingredienteEl = document.getElementById("ingrediente");

let i = 0;


while (i < listaSpesa.length) { 
    ingredienteEl.innerHTML = (listaSpesa);

    console.log(listaSpesa[i]);

    i++;
}


