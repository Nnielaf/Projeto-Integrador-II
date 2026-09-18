function retangulo(comeco: number): void {

    for (let i = 1; i <= comeco; i++) {
          let linha = "";
 
        for (let j = 1; j <= comeco - i; j++) {
            linha += " ";
        }
        for (let j = 1; j <= i; j++) {
            linha += "*";
        }

        console.log(linha);
    }
}

import prompt from "prompt-sync";

const bob = prompt();

let numero = Number(bob("Digite um numero: "));

retangulo(numero);
