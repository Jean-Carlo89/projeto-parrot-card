

/*--------------------------perguntando o numerode cartas*/
let contador = 0;
let numberOfCards;
do{
      numberOfCards = prompt('Com quantas cartas você quer jogar?')
    if(numberOfCards%2!==0 || numberOfCards<4 || numberOfCards>14){
        alert(`Número de cartas inválido. Por favor selecione um número par entre 4 e 14`)
    }else{
        break;
    }
    contador++
    console.log(`Rodei ${contador}`)
}while(true)  

/*-------checking number of cards--
 console.log(numberOfCards)
 console.log(typeof(numberOfCards))*/
 /*---*/

 /*---------------adicionando as cartas
 const lista = document.querySelector('.card-list')
numberOfCards= parseInt(numberOfCards)
console.log(typeof(numberOfCards))

for(let i=0; i<numberOfCards;i++){

    lista.innerHTML += ` <li class="card"> <img src="images/front.png"/</li>`;
    
    console.log(i)
}*/



const lista = document.querySelector('.card-list')
numberOfCards= parseInt(numberOfCards)
console.log(typeof(numberOfCards))

for(let i=0; i<numberOfCards;i++){

    lista.innerHTML += `
    <li onclick="turnCard('.n${i}')" class="turn-anchor n${i}">
        <div class="card"  > <img src="images/front.png"> </div>
        <div class="card back-face"> <img src="images/fiestaparrot.gif"></div> 
    </li> `
    
    console.log(i)
    console.log(`n${i}`)


}





function turnCard(cardIndex){
    
    console.log(cardIndex)
    const frontFace = document.querySelector('.card-list ' +cardIndex + ' .card')
    frontFace.classList.add('turn')
    
    const backFace = document.querySelector('.card-list ' +cardIndex +' .back-face')
    backFace.classList.add('turn-back-face')
}

