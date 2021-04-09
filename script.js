

/*--------------------------Asking number of cards*/
let contador = 0;
let numberOfCards;

do{
      numberOfCards = prompt('Com quantas cartas você quer jogar?')
    if(numberOfCards%2!==0 || numberOfCards<4 || numberOfCards>14){
        
        alert(`Número de cartas inválido. Por favor selecione um número par entre 4 e 14`)
    }else{
        
        break;
    }
}while(true)  

/*-----------------------------------Creating the arrays--*/

let images =  ["images/bobrossparrot.gif","images/explodyparrot.gif","images/fiestaparrot.gif","images/metalparrot.gif","images/revertitparrot.gif","images/tripletsparrot.gif","images/unicornparrot.gif"];
let chosenCards =[];
let x = (numberOfCards/2)
numberOfCards= parseInt(numberOfCards)
/*--------------------------------------Deixando a array aleatoria e salvando na array de cartas escolhidas*/
    images.sort(comparador);
    function comparador(){
        return Math.random() - 0.5;
    }
    
    for(let i = 0;i<x;i++){
    chosenCards.push([images[i]])
    }
/*------------------------------------------Randomizing pairs in HTML-----------------*/

const list = document.querySelector('.card-list');

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
    
    for(let i=0; i<x;i++){
    list.innerHTML += `
    <li onclick="turnCard('.n${i+x}',this)" class="turn-anchor n${i+x}">
        <div class="card" > <img src="images/front.png" > </div>
        <div class="card back-face"> <img src=${chosenCards[i]}></div> 
    </li> `
    }   

/*--------------------------------------turning cards------------------*/
let flipped =false;
let firstCard,firstCardBack,secondCard,secondCardBack,parent;
let src1,src2;
let attempts=0;

function turnCard(cardIndex,clickedCard){
    attempts++
    clickedCard = document.querySelector('.card-list ' +cardIndex)
    const frontFace = document.querySelector('.card-list ' +cardIndex + ' .card')
    frontFace.classList.add('turn')
    const backFace = document.querySelector('.card-list ' +cardIndex +' .back-face')
    backFace.classList.add('turn-back-face')
    compare(frontFace,backFace,clickedCard)  
}

function compare(frontFace,backFace,clickedCard){
   
     if(!flipped){
         
        flipped=true;
        firstCard=frontFace
        parent=firstCard.parentNode
        firstCardBack=backFace
        src1=firstCardBack.querySelector('img').src;
        
    }else{
        flipped = false;
        secondCard=frontFace
        secondCardBack=backFace
        src2=secondCardBack.querySelector('img').src;
        compareMatch()
       
    }

    if(contador===x){
        setTimeout(() => {
            alert(`Você ganhou em ${attempts} rodadas`);
        }, 500);
    }
}


function compareMatch(){
    if(src1===src2){
        removeOnclick()
        
    }else{
        flipBack()
     }
}

function removeOnclick(){
    firstCard.parentNode.removeAttribute("onclick");
        secondCard.parentNode.removeAttribute("onclick");
        contador++
}

function flipBack(){
   
    setTimeout( () =>{
        firstCard.classList.remove('turn');
        firstCardBack.classList.remove('turn-back-face');
        secondCard.classList.remove('turn');
        secondCardBack.classList.remove('turn-back-face');
    
    },1000);
}
