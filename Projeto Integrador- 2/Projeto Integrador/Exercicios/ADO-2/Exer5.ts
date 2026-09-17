let comeco= Number(prompt("Digite um numero"))
let fim = Number(prompt("Digite o numero final"));
let contador = comeco

while(contador <= fim){
    if(contador % 2 == 0){
        console.log(contador)
    }
    contador++;
}
