let cards = []

let lives = 3
let hasBlackJack = false
let isAlive = false
let message = ""
let sum = 0

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    name : "User",
    chips : 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomCard = Math.floor( Math.random() * 13) + 1

    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}

function startGame() {
    isAlive = true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]

    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        hasBlackJack = true
        message = "Blackjack!!!"
        startGame()
    } else {
        message = "You're out of the game!"
        isAlive = false
        lives -= 1
        if (lives === 0) {
            startGame()
        }
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
 

}