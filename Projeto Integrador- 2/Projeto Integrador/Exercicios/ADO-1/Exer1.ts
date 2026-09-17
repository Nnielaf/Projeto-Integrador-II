import promptSync from "prompt-sync";
const prompt = promptSync();

function totalPagar(ingresso: string, quantidade: number): number { 
   
    ingresso = ingresso.toUpperCase(); 
    let valorIngresso = 0;
    let total = 0;

    switch(ingresso) { 
        case "INTEIRA": valorIngresso = 28.50;
            total = valorIngresso * quantidade; break;
           
        case "MEIA": valorIngresso = 14.25;
            total = valorIngresso * quantidade;break;
           
        default: 
            console.log("Tipo Inválido");
            return 0;
    } 
    return total; 
}


let tipoIngresso: string = String(prompt("Qual é o tipo de Ingresso: "));
let qtdIngresso: number = Number(prompt("Qual é a quantidade de Ingressos: "));

let total = totalPagar(tipoIngresso, qtdIngresso);
console.log(`O valor total a ser pago é de: R$ ${total.toFixed(2)}`);
