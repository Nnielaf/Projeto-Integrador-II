let tamanho = Number(prompt("Digite a escala do quadrado"))
let array : string[][] = []
let bolinha = "*";

for(let i = 0;i<=tamanho;i++){
    array[i] = [];
    for(let j = 0; j <= tamanho; j++){
        array[i][j] = bolinha
    }
}

console.log(array)
