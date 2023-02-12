const characters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$",
    "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"
]
let message = " "
let isAlive = false


function generatePasswort() {
    if (!isAlive) {
        randomArrays()
        isAlive = true
    }
}

function refresh() {
    location.reload()
}

function randomArrays() {
    for (let i = 0; i < 15; i++) {
        message = Math.floor(Math.random() * characters.length)
        let generatePasswortElOne = document.getElementById("generatePasswortOne-el")
        let generatePasswortElTwo = document.getElementById("generatePasswortTwo-el")
        generatePasswortElOne.innerText = generatePasswortElOne.innerText + " " + characters[message]
        generatePasswortElTwo.innerText = generatePasswortElTwo.innerText + " " + characters[message]
    }
}
