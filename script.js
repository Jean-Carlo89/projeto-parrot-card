

/*--------------------------perguntando o numerode cartas*/
let contador = 0;
let numberOfCards;

do{
      numberOfCards = prompt('Com quantas cartas você quer jogar?')
    if(numberOfCards%2!==0 || numberOfCards<4 || numberOfCards>14){
        alert(`Número de cartas inválido. Por favor selecione um número par entre 4 e 14`)
    }else{
        contador = 0;
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

let x = (numberOfCards/2)
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
let flipped =false;
let firstCard,firstCardBack,secondCard,secondCardBack;
let src1,src2;
let attempts=0;
/*let pair=0;*/

function turnCard(cardIndex){
    attempts++
    /*console.log(attempts)*/
    /*console.log(cardIndex)*/
    const frontFace = document.querySelector('.card-list ' +cardIndex + ' .card')
    frontFace.classList.add('turn')

    const backFace = document.querySelector('.card-list ' +cardIndex +' .back-face')
    backFace.classList.add('turn-back-face')
    console.log(flipped)
    compare(frontFace,backFace)
    
   
}


function compare(frontFace,backFace){

    if(!flipped){
        console.log(!flipped)
        flipped=true;
        firstCard=frontFace
        firstCardBack=backFace
        src1=firstCardBack.querySelector('img').src;
        /*console.log(src1)*/
       /*let remove =  document.querySelector('.card-list ' +cardIndex).removeAttribute("onclick");
       console.log(firstCard)
       console.log(firstCard.parentNode)*/
    }else{
        flipped = false;
        secondCard=frontFace
        secondCardBack=backFace
        src2=secondCardBack.querySelector('img').src
    
        

        if(src1===src2){
            firstCard.parentNode.removeAttribute("onclick");
            secondCard.parentNode.removeAttribute("onclick");
            contador++
            /*console.log(pair)*/
        }else{
            setTimeout( () =>{
            
            firstCard.classList.remove('turn');
            firstCardBack.classList.remove('turn-back-face');
            secondCard.classList.remove('turn');
            secondCardBack.classList.remove('turn-back-face');
            },1000);
        }
    
    }

    if(contador===x){
        setTimeout(() => {
            alert(`Você ganhou em ${attempts} rodadas`);
        }, 500);
        
    }
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
