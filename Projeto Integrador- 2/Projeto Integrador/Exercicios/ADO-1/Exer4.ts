
function diaSemana (dia: number):void{
    switch(dia){
    case 1: console.log("Domingo");break;
    case 2: console.log("Segunda-Feira"); break;
    case 3: console.log("Terça-Feira");break;
    case 4: console.log("Quarta-Feira"); break;
    case 5: console.log("Quinta-Feira");break;
    case 6: console.log("Sexta-Feira"); break;
    case 7: console.log("Sabado");break;

    default : console.log("Dia da Semana Inválido")
}
}

let semana = Number(prompt("Qual é o dia da semana"))

diaSemana(semana)
