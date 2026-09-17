import prompt from "prompt-sync"
const bob = prompt();

function farol (cor:string): void{
   cor = cor.toLocaleLowerCase();
    switch(cor){
        case 'vermelho' : console.log("Espere"); break
        case 'verde' : console.log("Atravesse");break
        default : console.log("Farol Inoperante")
    }
}

let corFarol = bob("Qual a cor do farol")
farol(corFarol)
