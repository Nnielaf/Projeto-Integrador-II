function medirTemperatura(temp : number):void{
    let situacao = "";
    if(temp <= 36){
        situacao = "Hipotermia"
        console.log(situacao)
    }
    else if( temp >= 36 && temp <= 37.6){
        situacao="Normal"
        console.log(situacao)
    }
    else if(temp >=37.6 && temp <= 39.6){
        situacao = "Febre"
        console.log(situacao)
    }
    else if(temp >= 39.6 && temp <= 41){
        situacao = "Febre Alta"
        console.log(situacao)
    }
    else{
        situacao="Hipertemia"
        console.log(situacao)
    }
}

let temperatura = Number(prompt("Digite a sua temperatura"))
medirTemperatura(temperatura)
