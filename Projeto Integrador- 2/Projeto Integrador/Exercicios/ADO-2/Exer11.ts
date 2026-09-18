import prompt from "prompt-sync";

const bob = prompt();

function soletrar(frase: string): void {

    let contadorLetra = 1;
    let espaco = "Espaço";

    for (let i = 0; i < frase.length; i++) {

        if (frase[i] === " ") {
            console.log(`Espaço`);
        } else {
            console.log(`Letra ${contadorLetra} = ${frase[i]}`);
            contadorLetra++;
        }

    }
}

let frase = bob("Digite uma frase: ");

soletrar(frase);
