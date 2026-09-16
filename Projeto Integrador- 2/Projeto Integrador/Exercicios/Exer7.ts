function medirTemperatura(temp : number):void{
    let situacao = "";
    if(temp <= 36){
        situacao = "A sua temperatura é Hipotermia"
        console.log(situacao)
    }
    else if( temp >= 36 && temp <= 37.6){
        situacao="A sua temperatura é Normal"
        console.log(situacao)
    }
    else if(temp >=37.6 && temp <= 39.6){
        situacao = "A sua temperatura é Febre"
        console.log(situacao)
    }
    else if(temp >= 39.6 && temp <= 41){
        situacao = "A sua temperatura é Febre Alta"
        console.log(situacao)
    }
    else{
        situacao="A sua temperatura é Hipertemia"
        console.log(situacao)
    }
}

let temperatura = Number(prompt("Digite a sua temperatura"))
medirTemperatura(temperatura)
