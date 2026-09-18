import prompt from "prompt-sync";

const bob = prompt();

function soletrar(frase: string): void {
    for (let i = 0; i < frase.length; i++) {
        console.log(frase[i]);
    }
}

let frase = bob("Digite uma frase: ");

soletrar(frase);
