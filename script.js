let numberOfCards;
let images = []
let chosenCards = [];
let flipped =false;
let firstCard,secondCard,firstParent,secondParent;
let attempts=0;
let stay=false;
let counter=0;

AskNumberOfCards()

function AskNumberOfCards(){


    do{
        numberOfCards = prompt('Com quantas cartas você quer jogar?')
      if(numberOfCards%2!==0 || numberOfCards<4 || numberOfCards>14){
          
          alert(`Número de cartas inválido. Por favor selecione um número par entre 4 e 14`)
      }else{
          
          break;
      }
  }while(true)  

  createImageArrays()
}



function createImageArrays(){
    images =  ["images/bobrossparrot.gif","images/explodyparrot.gif","images/fiestaparrot.gif","images/metalparrot.gif","images/revertitparrot.gif","images/tripletsparrot.gif","images/unicornparrot.gif"];
  
    images.sort(comparador);
    function comparador(){
        return Math.random() - 0.5;
    }
    
    for(i=0;i<numberOfCards/2;i++){
        chosenCards.push(images[i])
    }
    
    printCards()
}

function printCards(){

    const ul = document.querySelector('.card-list');
    
    for(let j=0;j<2;j++){
        for(let i=0; i<numberOfCards/2;i++){
            ul.innerHTML += `
                <li onclick="turnCard(this)" class="turn-anchor" id=${chosenCards[i]}>
                <div class="card front-face" > <img src="images/front.png" > </div>
                <div class="card back-face"> <img src=${chosenCards[i]}></div> 
                </li> `
        }

            if(j===1){
                break;
            }
                
                chosenCards.sort(comparador);
                function comparador(){
                    return Math.random() - 0.5;
                }
           
    }

}

function turnCard(clickedCard){
    attempts++
    if(stay) return;
    
    clickedCard.classList.add('turn')
    id=clickedCard.id
    
   if(!flipped){
        flipped=true;
        firstCard=id
        firstParent=clickedCard;
        
    }else{
        flipped=false;
        secondCard=id
        secondParent=clickedCard;
        checkMatch()
    }
    if(counter===numberOfCards/2){
        setTimeout(() => {
            alert(`Você ganhou em ${attempts} rodadas`);
        }, 500);
    }
}

function checkMatch(){

    if(firstCard===secondCard){
        
        removeOnclick()
    }else{
 
        turnBack(firstParent,secondParent)
    }
}


function removeOnclick(){
    firstParent.removeAttribute('onclick')
    secondParent.removeAttribute('onclick')
    counter++
}

function turnBack(){
    stay = true;
    setTimeout(() => {
        firstParent.classList.remove('turn')
        secondParent.classList.remove('turn')
    
        stay=false
    }, 1000);
}