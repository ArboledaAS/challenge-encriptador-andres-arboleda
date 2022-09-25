var botonencriptar = document.querySelector(".btn-encriptar");
var botondesencriptar = document.querySelector(".btn-desencriptar");
var cajadetexto = document.querySelector(".caja-texto");
var resultado = document.querySelector(".resultado-texto");





//`La letra "e" es convertida para "enter"`
//`La letra "i" es convertida para "imes"`
//`La letra "a" es convertida para "ai"`
//`La letra "o" es convertida para "ober"`
//`La letra "u" es convertida para "ufat"`

function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patrón de entrada, en este caso solo acepta numeros y letras
    patron = /^[A-Za-z0-9- -?¿]*$/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}




//---------------------------------TODO LO DEL BOTON ENCRIPTAR----------------------------------------------------------------


function btnEncriptar(){

    
    resultado = encriptar(cajadetexto.value);

    document.getElementById("textonoresuelto").style.visibility = "hidden";
    document.getElementById("textonoresuelto2").style.visibility = "hidden";

    resultado.style.backgroundImage="none"
    cajadetexto.value = ""

    
}


function encriptar(cajaencriptada){

     cajaencriptada = cajaencriptada.toLowerCase();

    //una matrix dentro de otra matrix
    let matrizderemplazo = [["e","enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]

    for(var i=0; i < matrizderemplazo.length; i++){

        // includes sirve para ver en este caso se la cadena de texto incluye la letra definida en la matrix
        // [i][0] i es la posicion de la matrix externa y el 0 la posicion de la matrix interna con la que se compara
        if (cajaencriptada.includes(matrizderemplazo[i][0])) {
            cajaencriptada = cajaencriptada.replaceAll(matrizderemplazo[i][0], matrizderemplazo[i][1])
        }
        
    }

    resultado.value = cajaencriptada

    return resultado;
}

//---------------------------------TODO LO DEL BOTON ENCRIPTAR----------------------------------------------------------------




//---------------------------------TODO LO DEL BOTON DESENCRIPTAR----------------------------------------------------------------



function btnDesencriptar(){

    resultado = desencriptar(cajadetexto.value);

    document.getElementById("textonoresuelto").style.visibility = "hidden";
    document.getElementById("textonoresuelto2").style.visibility = "hidden";

    resultado.style.backgroundImage="none"
    cajadetexto.value = ""
}


function desencriptar(cajaencriptada2){

    cajaencriptada2 = cajaencriptada2.toLowerCase();

    //una matrix dentro de otra matrix
    let matrizderemplazo = [["e","enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]

    for(var i=0; i < matrizderemplazo.length; i++){

        // includes sirve para ver en este caso se la cadena de texto incluye la letra definida en la matrix
        // [i][0] i es la posicion de la matrix externa y el 0 la posicion de la matrix interna con la que se compara
        if (cajaencriptada2.includes(matrizderemplazo[i][1])) {

            cajaencriptada2 = cajaencriptada2.replaceAll(matrizderemplazo[i][1], matrizderemplazo[i][0])
        }
        
    }

    resultado.value = cajaencriptada2

    return resultado;
}

//---------------------------------TODO LO DEL BOTON DESENCRIPTAR----------------------------------------------------------------


function copiar(){

    textocopiado = resultado.value;
    navigator.clipboard.writeText(textocopiado);

    swal("Texto copiado exitosamente!", "", "success");

}