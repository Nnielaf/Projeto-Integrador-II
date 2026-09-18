import prompt from "prompt-sync"
const bob = prompt();

function tabuada(inicio:number,final:number):void{

     let contador = 1;
     let resultado = 1;

     for(let i = 1; i <= final;i++){
          resultado = inicio * contador;
          console.log(`${inicio} x ${contador} = ${resultado}`)
          contador++;
     }
}

let inico = Number(bob("Digite o numero da tabuada"))
let final = Number(bob("Digite ate onde você quer que vá"))

tabuada(inico,final)
