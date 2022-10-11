let yGuess = document.getElementById("Yguess")
let displayEl = document.getElementById("display")
let messageEL = document.getElementById("message")
let resultEl = document.getElementById("result")
let btn = document.getElementById("btn")
let containerEl = document.getElementById("container")
let historyEl = document.getElementById("history")

let num = randNum()
yGuess.focus()

btn.addEventListener("click", function(){
    checkProcess()
})
yGuess.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        checkProcess()
    }
})
function checkProcess(){
    let guess = parseInt(yGuess.value)
    updateHistory()
    yGuess.value = ""
    if(guess <= 0 || guess > 100){
        alert("Only between 1 to 100")
        yGuess.focus()
    }else{
        if(guess > num){
            messageEL.textContent = "Too high, Try lower"
            displayEl.textContent = guess
            displayEl.style.color = "#a10101"
            yGuess.focus()
        }else if(guess < num){
            messageEL.textContent = "Too low, Try higher"
            displayEl.textContent = guess
            yGuess.focus()
        }else if(guess == num){
            messageEL.textContent = "Sheesh!! You won"
            displayEl.textContent = guess
            displayEl.style.color = "#049e04"
            containerEl.style.transform = "scale(0)"
            historyEl.style.transform = "scale(0)"
            resultEl.style.transform = "scale(1)"
            resultEl.innerHTML = `YOU WON!<br><button onclick="location.reload()" class="replay">Play Again</button>`
        }else if(isNaN(guess)){
            alert("please type in numerical value")
            location.reload()
        }
    }
}
function randNum(){
    let num = Math.floor((Math.random() * 100) + 1)
    return num
}
function updateHistory(){
    let guess = yGuess.value
    historyEl.textContent += `${guess}-` 
    console.log(guess)   
}