function totalPagar(peso: number):number{
    let gramas100 = 3.50;
    let total = 0;

    if(peso <= 1000 && peso >= 100){
        total = (gramas100 * peso) / 100
        console.log("Total : " + total)
    }
    else if(peso >= 1000){
        gramas100 = 3.00;
        total = (gramas100 * peso) / 100;
        console.log("Total :" + total)
    }
    else if(peso === 0){
        console.log("Peso Inválido")
    }
    else{
        console.log("Peso Inválido")
    }
    return total;
}   

let pesoCompra = Number(prompt("Informa o peso "))
totalPagar(pesoCompra);
