var botonEncriptar = document.querySelector(".btnEncriptar");
var botonDesencriptar = document.querySelector(".btnDesencriptar");
var muneco = document.querySelector(".muneco");
var container = document.querySelector(".parrafo");
var resultado = document.querySelector(".text-result");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function caracteresEspeciales(texto) {
    var formato = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~áéíóúÁÉÍÓÚ]/;
    return formato.test(texto);
}

function encriptar() {
    ocultar();
    var textBox = document.querySelector(".text-box");
    var texto = textBox.value;

    if(caracteresEspeciales(texto)) {
        alert("El texto contiene caracteres especiales o acentos.");
    } else {
        resultado.textContent = encriptarTexto(texto);
        alert("El texto ha sido encriptado.");
        textBox.value = ""; // Limpia el textbox
    }
}

function desencriptar() {
    ocultar();
    var textBox = document.querySelector(".text-box");
    resultado.textContent = desencriptarTexto(textBox.value);
    alert("El texto ha sido desencriptado.");
}

function ocultar() {
    muneco.classList.add("ocultar");
    container.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == 'a') {
            textoFinal = textoFinal + 'ai';
        } else if (texto[i] == 'e') {
            textoFinal = textoFinal + 'enter';
        } else if (texto[i] == 'i') {
            textoFinal = textoFinal + 'imes';
        } else if (texto[i] == 'o') {
            textoFinal = textoFinal + 'ober';
        } else if (texto[i] == 'u') {
            textoFinal = textoFinal + 'ufat';
        } else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == 'a') {
            textoFinal = textoFinal + 'a';
            i = i + 1;
        } else if (texto[i] == 'e') {
            textoFinal = textoFinal + 'e';
            i = i + 4;
        } else if (texto[i] == 'i') {
            textoFinal = textoFinal + 'i';
            i = i + 3;
        } else if (texto[i] == 'o') {
            textoFinal = textoFinal + 'o';
            i = i + 3;
        } else if (texto[i] == 'u') {
            textoFinal = textoFinal + 'u';
            i = i + 3;
        } else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

const btnCopy = document.querySelector(".btnCopiar");
btnCopy.addEventListener("click", function() {
    var contenido = document.querySelector(".text-result").textContent;
    navigator.clipboard.writeText(contenido);
    alert("El texto ha sido copiado.");
});
