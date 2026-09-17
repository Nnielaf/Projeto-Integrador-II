function calcularPeso(altura: number, peso:number):void{
    let IMC = peso / (altura * 2);
    let condicao = "";
    
    if (IMC > 40){
        console.log(`Seu IMC é ${IMC.toFixed(2)}`)
        condicao = "Sua classificação é Obesidade Grau III"
        console.log(condicao)    
    }
    else if(IMC >35 && IMC <= 39.9){
        console.log(`Seu IMC é ${IMC.toFixed(2)}`)
        condicao="Sua classificação é Obesidade Grau II"
        console.log(condicao)
    }
    else if(IMC > 30 && IMC < 34.9){
        console.log(`Seu IMC é ${IMC.toFixed(2)}`)
        condicao = "Sua classificação é de Obesidade Grau I"
        console.log(condicao)
    }
    else if(IMC > 25 && IMC <= 29.9){
        console.log(`Seu IMC é ${IMC.toFixed(2)}`)
        condicao = "Sua classificação é Sobrepeso"
        console.log(condicao)
    }
    else if(IMC > 18.5 && IMC < 24.9){
        console.log(`Seu IMC é ${IMC.toFixed(2)}`)
        condicao = "Sua classificação é Normal"
        console.log(condicao)
    }
    else{
        console.log(`Seu IMC é ${IMC.toFixed(2)}`)
        condicao = "Sua classificação é Abaixo do Peso"
        console.log(condicao)
    }
}
import prompt from "prompt-sync"
const bob = prompt();
let altura = Number(bob("Digite sua altura"))
let peso = Number(bob("Digite seu peso"))


calcularPeso(altura, peso)
