const chosse = ["rock", "paper", "scissors"] //random seçimlər

const modalBtn = document.getElementById("modalBtn")
const modalName = document.querySelector(".modalTitle")
const input = document.querySelector(".input")


const container = document.querySelector(".container")
const playerName = document.querySelector(".player-name")


let playerPoint = 0
let compPoint = 0


modalBtn.addEventListener("click", () => {  // adın boş olub olmadığını yoxlamaq üçün funksiya
    if (input.value.trim()) {

        container.classList.remove("none")
        playerName.textContent = input.value

    } else {

        modalName.classList.add("nameControl") //əgər ad boşdusa animasiya edir

        setTimeout(function () { // animasiyadan sonra silir clası
            modalName.classList.remove("nameControl")
        }, 1000)
    }
})


function compChooseItem() { // computerin seçimi üçün funksiya, random rəqəm verir və rəqəmə görə arraydan (choose) item seçirik
    let a = Math.floor(Math.random() * chosse.length)

    return chosse[a]
}

function checkWin(playerChoose, compChoose) { // qalibiyyet halını yoxlayan funksiya

    if (playerChoose == "rock" && compChoose == "scissors" ||
        playerChoose == "paper" && compChoose == "rock" ||  // qalibiyyet
        playerChoose == "scissors" && compChoose == "paper") {

        playerPoint++

        document.getElementById("player-score").innerText = playerPoint
        document.querySelector(".result").textContent = "Win"
        document.querySelector(".result").style.color = "green"


    } else if (playerChoose == compChoose) {  // bərabərə
        document.querySelector(".result").textContent = "Draw"
        document.querySelector(".result").style.color = "blue"
    } else { // məğlubiyyət
        compPoint++
        document.getElementById("computer-score").innerText = compPoint
        document.querySelector(".result").textContent = "Lose"
        document.querySelector(".result").style.color = "red"
    }

}

function checkIcon(playerChoose, compChoose) {  // seçimə uyğun icon cardda görünür
    document.getElementById("player-choice-img").src = `./img/${playerChoose}.jpg`
    document.getElementById("computer-choice-img").src = `./img/${compChoose}.jpg`

}

document.querySelector(".buttons").addEventListener("click", (e) => {   // click eventi

    const playerChoose = e.target.id
    const compChoose = compChooseItem()

    checkIcon(playerChoose, compChoose)
    checkWin(playerChoose, compChoose)
}
)