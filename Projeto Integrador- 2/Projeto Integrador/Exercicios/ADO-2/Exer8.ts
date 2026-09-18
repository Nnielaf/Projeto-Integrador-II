import prompt from "prompt-sync";

const bob = prompt();

function retangulo(base: number, altura: number): void {

    let bolinha = "*";

    for (let i = 0; i < altura; i++) {

        let linha = "";

        for (let j = 0; j < base; j++) {
            linha += bolinha;
        }

        console.log(linha);
    }
}

let base = Number(bob("Digite um valor para a base: "));
let altura = Number(bob("Digite um valor para a altura: "));

retangulo(base, altura);
