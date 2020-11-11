function generatetable(boton) {

    let formulario = boton.form.elements;
    let dep = parseFloat(formulario["deposito"].value);
    let intAnual = parseFloat(formulario["interesAnual"].value);
    let inc = parseFloat(formulario["incremento"].value);


    let interes = dep * intAnual / 100;
    let total = interes + dep;
    let datos;
    for (let i = 1; i < inc + 1; i++) {
        datos = ` <tr>
        <th>${i}</th>
        <th>${dep.toFixed(2)}</th>
        <th>${interes.toFixed(2)}</th>
        <th>${total.toFixed(2)}</th>
         </tr>`;

         dep=total;
         interes=dep*intAnual/100;
        total=dep+interes;

        document.getElementById("tBody").innerHTML += datos;


    }








}



