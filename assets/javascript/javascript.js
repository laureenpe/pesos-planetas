function calculo() {
    var peso, planeta, peso_final, nombre; //variables necesitadas para el calculo
    peso = document.getElementById("peso").value; //recogemos los datos mediante el id
    planeta = document.getElementById("planetas").value;

    console.log(planeta);

    var g_tierra = 9.8;
    var g_marte = 3.7;
    var g_jupiter = 24.8;

    if (planeta == "Marte") {
        peso_final = peso * g_marte / g_tierra;
    } else if (planeta == "Jupiter") {
        peso_final = peso * g_jupiter / g_tierra;
    }
    peso_final = parseInt(peso_final);
    // document.getElementById("nombre").innerHTML = "peso_final";

    alert("Tu peso en " + planeta + " es : " + peso_final + " kilos"); //it should work

}