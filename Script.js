const AreaDeTexto = document.querySelector(".area_do_texto");
const mensagem = document.querySelector(".mensagem");

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function botao_Criptografar() {
    const textoCriptografado = criptografar(AreaDeTexto.value);
    mensagem.value = textoCriptografado;
    AreaDeTexto.value = "";
}

function criptografar(stringCriptografada) {

    let matrixCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringCriptografada = stringCriptografada.toLowerCase();

    for (let i = 0; i < matrixCodigo.length; i++) {
        if (stringCriptografada.includes(matrixCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrixCodigo[i][0], matrixCodigo[i][1]);
        }
    }

    return stringCriptografada;
}

function botao_Descriptografar() {
    const textoDescriptografado = descriptografar(AreaDeTexto.value);
    mensagem.value = textoDescriptografado;
    AreaDeTexto.value = "";
}

function descriptografar(stringDescriptografada) {

    let matrixCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for (let i = 0; i < matrixCodigo.length; i++) {
        if (stringDescriptografada.includes(matrixCodigo[i][0])) {
            stringDescriptografada = stringDescriptografada.replaceAll(matrixCodigo[i][1], matrixCodigo[i][0]);
        }
    }

    return stringDescriptografada;
}