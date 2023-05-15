let cards = [] //array - ordered list of items
let sum = 0; //my sum variable adding whatever two cards are drawn
let hasBlackJack = false; //hasBlackJack returns a specific boolean
let message = "";//empty string for my message variable
let isAlive = false//isAlive variable letting the player know if he's still in the game or not. Boolean
let messageEl = document.getElementById("message-el")//js interacting with html through the DOM returning js to html
let sumEl = document.getElementById("sum-el")//same applies here this time returning the sum variable
let cardsEl = document.getElementById("cards-el")//cards element being displayed on the webpage 
let player = { // player object with key-value
    name: "Aaron",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips //player name with how many chips he has. 

function getRandomCard(){ //create a random card function that replaces hard coded numbers with a random card
   let randomNumber = Math.floor(Math.random() * 13) + 1 //math object using math.floor and math.random
   if(randomNumber > 10){ 
    return 10  //return value
   }else if (randomNumber === 1){ //comparison operators +=, ===, etc.
    return 11
   }else {
    return randomNumber
   }
}



function startGame(){ //start game function returns the rendered game function 
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard] //re-assigned arrays
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame(){
    //render out firstCard and secondCard
    cardsEl.textContent ="Cards: " //the cards element variable returning text content of hard-coded "cards: " + all cards
    //create a for loop that renders out all the cards instead of two
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + "- " //this for loop begins at the 0 index and stops when the length of the cards array is reached. continues by 1
    }
    //render out ALL the cards we have
    sumEl.textContent = "Sum: " + sum //my sumEl variable displays text content in the html as "Sum: " and the sum variable listed above. 
    if(sum < 21){
        message = "Do you want to draw a new card?" //if else statement of blackjack that determines whether the player wins/loses/is still alive.

    } else if(sum === 21) {
        message = "You've got Blackjack!" //returns a message depending on the result of the if else statement. 
        hasBlackJack = true
    } else{
        message = "You're out of the game! "
        isAlive = false //boolean
    };
    
    messageEl.textContent = message//message is displayed on the webpage in through js interacting with DOM and using html

}

function newCard(){ //function for the new card button. 
    if(isAlive === true && hasBlackJack ===false){ //logical & operator that judges whether a player can/can't choose a new card
        let card = getRandomCard()
        sum += card
        cards.push(card) //pushes new card to array
        console.log(cards)
        renderGame() //new card is added and calls on the render game. Letting the player know if the card added surpasses 21
    }
}