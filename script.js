let contador = 0;

do{
     
    let numberOfCards = prompt('Com quantas cartas você quer jogar?')
    if(numberOfCards%2!==0 || numberOfCards<4 || numberOfCards>14){
        alert(`Número de cartas inválido. Por favor selecione um número1 par entre 4 e 14`)
    }else{
        break;
    }1
    contador++
    console.log(`Rodei ${contador}`)
}while(true)
