

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
    /*contador++
    console.log(`Rodei ${contador}`)*/
}while(true)  


/*-----------------------------------Criando a array das imagens e a array de metade delas--*/
let images =  ["images/bobrossparrot.gif","images/explodyparrot.gif","images/fiestaparrot.gif","images/metalparrot.gif","images/revertitparrot.gif","images/tripletsparrot.gif","images/unicornparrot.gif"];
/*console.log(images)*/
let chosenCards =[];
/*console.log(chosenCards)*/


/*--------------------------------------Deixando a array aleatoria e salvando na array de cartas escolhidas*/
images.sort(comparador);

function comparador(){
    return Math.random() - 0.5;
}

const x = (numberOfCards/2)
for(let i = 0;i<x;i++){
    chosenCards.push([images[i]])
}

/*console.log(images)*/
/*console.log(chosenCards)*/



/*------------------------------------------Criando os pares aleatórios no HTML-----------------*/
const list = document.querySelector('.card-list');
numberOfCards= parseInt(numberOfCards)
/*console.log(typeof(numberOfCards))*/

for(let i=0; i<x;i++){

    list.innerHTML += `
    <li onclick="turnCard('.n${i}')" class="turn-anchor n${i}">
        <div class="card" > <img src="images/front.png" > </div>
        <div class="card back-face"> <img src=${chosenCards[i]}></div> 
    </li> `
}
    chosenCards.sort(comparador);


    function comparador(){
    return Math.random() - 0.5;
}
    /*console.log(chosenCards)*/
    
    for(let i=0; i<x;i++){
    list.innerHTML += `
    <li onclick="turnCard('.n${i+x}')" class="turn-anchor n${i+x}">
        <div class="card" > <img src="images/front.png" > </div>
        <div class="card back-face"> <img src=${chosenCards[i]}></div> 
    </li> `
/* console.log(i)
    console.log(`n${i}`)*/
}



/*--------------------------------------Funcao que vira a carta------------------*/
let turnedCards = 0;
function turnCard(cardIndex){
    turnedCards++
    console.log(`turned cards: ${turnedCards}`)
    console.log(cardIndex)
    const frontFace = document.querySelector('.card-list ' +cardIndex + ' .card')
    frontFace.classList.add('turn')
    
    const backFace = document.querySelector('.card-list ' +cardIndex +' .back-face')
    backFace.classList.add('turn-back-face')

    const backFaceImg = backFace.querySelector('img')
}






/*-----------------------------------------teste da array de imagens----------
let imageCounter=0;
function changeImage(){
   
    document.getElementById('images').src=images[imageCounter]
    imageCounter++

    if(imageCounter===images.length){
        imageCounter=0;
    }
}*/





/*-------------------------------------------------Pares de carta por numero digitad0----*/
