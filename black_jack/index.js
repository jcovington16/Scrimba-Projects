let cards = []

let lives = 3
let hasBlackJack = false
let isAlive = true
let message = ""
let sum

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
    return Math.floor( Math.random() * 13) + 1
}

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
}

function newCard() {
    let card = getRandomCard()

}