function retangulo(comeco: number): void{
     let bolinha = "*"
     let juntar = "";

     for(let i = 1; i<=comeco;i++){
          juntar += bolinha;
          console.log(juntar);
     }  
}
import prompt from "prompt-sync"
const bob = prompt();
let numero = Number(bob("Digite um numero :"))

retangulo(numero)
