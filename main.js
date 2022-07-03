let yGuess = document.getElementById("Yguess")
let displayEl = document.getElementById("display")
let messageEL = document.getElementById("message")
let btn = document.getElementById("btn")
let num = randNum()

btn.addEventListener("click", function(){
    let guess = parseInt(yGuess.value)
    yGuess.value = ""
    if(guess > num){
        messageEL.textContent = "Too high, Try lower"
        displayEl.textContent = guess
    }else if(guess < num){
        messageEL.textContent = "Too low, Try higher"
        displayEl.textContent = guess
    }else if(guess == num){
        messageEL.textContent = "Sheesh!! You won"
        displayEl.textContent = guess
    }else if(isNaN(guess)){
        messageEL.textContent = "Type numbers only"
        alert("please type in numerical value")
        location.reload()
    }else if(guess <=0 || guess > 100){
        alert("only between 1 to 100")
    }
})
function randNum(){
    let num = Math.floor((Math.random() * 100) + 1)
    return num
}