let count = 0
let countEl = document.getElementById("count-el")

function counter() {
    count += 1
    countEl.innerText = count
}

function decrease() {
    count -= 1
    countEl.innerText = count
}

function save() {

}