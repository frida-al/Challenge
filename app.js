
const textArea = document.querySelector('.texto');
const message = document.querySelector('.mensaje');


function buttonEncrypt(){
    const encryptedText = encrypt(textArea.value);
    message.value = encryptedText;
    textArea.value = "";
}

function encrypt(encryptedString) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    encryptedString = encryptedString.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if (encryptedString.includes(matrizCodigo[i][0])) {
            encryptedString = encryptedString.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }         
    return encryptedString;
}

function buttondecrypt(){
    const decryptedText = decrypt(textArea.value);
    message.value = decryptedText;
    textArea.value = "";
}

function decrypt(decryptedString) {
    let matrizCodigo1 = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    decryptedString = decryptedString.toLowerCase();

    for(let i = 0; i < matrizCodigo1.length; i++) {
        if (decryptedString.includes(matrizCodigo1[i][0])) {
            decryptedString = decryptedString.replaceAll(matrizCodigo1[i][0], matrizCodigo1[i][1]);
        }

    }         
    return decryptedString;
}