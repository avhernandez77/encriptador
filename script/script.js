function desencriptar() {

    validar();

    var frase = document.getElementById('mensaje').value;

    var txtDesencriptado = frase.replace(/enter/img, "e");
    var txtDesencriptado = txtDesencriptado.replace(/ober/img, "o");
    var txtDesencriptado = txtDesencriptado.replace(/imes/img, "i");
    var txtDesencriptado = txtDesencriptado.replace(/ai/img, "a");
    var txtDesencriptado = txtDesencriptado.replace(/ufat/img, "u");

    document.getElementById('textoCopiar').innerHTML = txtDesencriptado;
    formulario.reset();
}

function encriptar() {
    validar();   

    var frase = document.getElementById('mensaje').value;

    var txtEncriptado = frase.replace(/e/img, "enter");
    var txtEncriptado = txtEncriptado.replace(/o/img, "ober");
    var txtEncriptado = txtEncriptado.replace(/i/img, "imes");
    var txtEncriptado = txtEncriptado.replace(/a/img, "ai");
    var txtEncriptado = txtEncriptado.replace(/u/img, "ufat");
    document.getElementById('textoCopiar').innerHTML = txtEncriptado;
    
    formulario.reset();
}

function copiar() {
    
    let txt = document.getElementById('textoCopiar').textContent;
    navigator.clipboard.writeText(txt);
}

function validar() {
    let txt = document.getElementById('mensaje').value.length;

    if (txt == 0) {        
        document.getElementById('traductor').style.display='none';
        document.getElementById('error').style.display='';
    }
    else{
        document.getElementById('traductor').style.display='';
        document.getElementById('error').style.display='none'; 
    }
}