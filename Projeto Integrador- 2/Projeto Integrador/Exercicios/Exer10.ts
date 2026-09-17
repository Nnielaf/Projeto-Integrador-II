function diaSemana(dia:number): string{
    switch(dia){
        case 0:return"Domingo";
        case 1:return "Segunda-Feira"
        case 2:return "Terça-Feira"
        case 3:return "Quarta-Feira"
        case 4:return "Quinta-Feira"
        case 5:return "Sexta-Feira"
        case 6:return "Sabado"
        default:return "Dia inválido"
    }
}

function calendarioMes(mes:number):string{
    switch(mes){
        case 1:return"Janeiro";
        case 2:return"Fevereiro";
        case 3:return"Março";
        case 4:return"Abril";
        case 5:return"Maio";
        case 6:return"Junho";
        case 7:return"Julho";
        case 8:return"Agosto"; 
        case 9:return"Setembro";
        case 10:return"Outubro";
        case 11:return"Novembro";
        case 12:return"Dezembro";
        default: return "Mês Inválido";
    }
}

let dia = Number(prompt("Qual o dia que esta sendo enviado :"));
let semana = Number(prompt("Qual é o dia da Semana : (Domingo = 0) "))
let mesDoAno = Number(prompt("Qual é o mês que está sendo enviado :"))
let ano = Number(prompt("Qual o ano que esta sendo enviado :"));

let diaDaSemana = diaSemana(semana)
let mes = calendarioMes(mesDoAno)

console.log(`Enviado ${diaDaSemana},${dia} de ${mes} de ${ano}`)

