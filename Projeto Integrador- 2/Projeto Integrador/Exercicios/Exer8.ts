function media(n1:number,n2:number,n3:number): void{
    let valorMedia = (n1 + n2 + n3) / 3;
    let situacao = ""

   if(valorMedia >=8){
    console.log(`A média do aluno é ${valorMedia.toFixed(1)}`)
    situacao = "Situação : Aprovado com Sucesso"
    console.log(situacao)
   }
   else if(valorMedia >= 6 && valorMedia < 8){
     console.log(`A média do aluno é ${valorMedia.toFixed(1)}`)
     situacao = "Situação : Aprovado"
     console.log(situacao)
   } 
   else if(valorMedia > 3 && valorMedia <6){
    console.log(`A média do aluno é ${valorMedia.toFixed(1)}`)
    situacao = "Situação : Recuperação"
    console.log(situacao)
}
else if(valorMedia < 3){
    console.log(`A média do aluno é ${valorMedia.toFixed(1)}`)
    situacao = "Situação : Reprovado"
    console.log(situacao)
}
else{
    console.log(`A média do aluno é ${valorMedia.toFixed(1)}`)
    situacao ="Situação : Desistente"
    console.log(situacao)
}
}

import prompt from "prompt-sync"
const bob = prompt()

let Nota1 = Number(bob("Qual foi sua primeira Nota :"))
let Nota2 = Number(bob("Qual é a sua segunda nota "))
let Nota3 = Number(bob("Qual a sua terceira Nota "))

media(Nota1,Nota2,Nota3)
