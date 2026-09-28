
<div class="contagem ">

<h2>Contagem de {{titulo()}} </h2>

<p>Numero de Passos: {{contador}}</p>

<button (click)="aumentar()">+</button>
<button (click)="diminuir()">-</button>
<button (click)="resetar()">Resetar</button>


<div [class.erro] = "contador < 0 ">

    @if( contador < 0){
        <p>Iválido</p>
    }
    @else {
        <p> - </p>
        
    }
</div>
</div>
