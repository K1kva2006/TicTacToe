const boxs = document.querySelectorAll(".box")
const h1 = document.querySelector("h1")
const h2 = document.querySelector("h2")




let X = []
let O = []
let start = true

function logic() {
    if(X.includes("box1") && X.includes("box2") && X.includes("box3")) {
        xWin() 
        
    }
    else if(X.includes("box4") && X.includes("box5") && X.includes("box6")) {
        xWin() 
        
    }
    else if(X.includes("box7") && X.includes("box8") && X.includes("box9")) {
        xWin() 
    }
     else if(X.includes("box1") && X.includes("box4") && X.includes("box7")) {
        xWin() 
    }
    else if(X.includes("box2") && X.includes("box5") && X.includes("box8")) {
        xWin() 
    }
    else if(X.includes("box3") && X.includes("box6") && X.includes("box9")) {
        xWin() 
    }
    else if(X.includes("box1") && X.includes("box5") && X.includes("box9")) {
        xWin() 
    }
    else if(X.includes("box3") && X.includes("box5") && X.includes("box7")) {
        xWin() 
    } 

    else if(O.includes("box1") && O.includes("box2") && O.includes("box3")) {
        oWin()
    }
    else if(O.includes("box4") && O.includes("box5") && O.includes("box6")) {
        oWin()
    }
    else if(O.includes("box7") && O.includes("box8") && O.includes("box9")) {
        oWin()
    }
     else if(O.includes("box1") && O.includes("box4") && O.includes("box7")) {
        oWin()
    }
    else if(O.includes("box2") && O.includes("box5") && O.includes("box8")) {
        oWin()
    }
    else if(O.includes("box3") && O.includes("box6") && O.includes("box9")) {
        oWin()
    }
    else if(O.includes("box1") && O.includes("box5") && O.includes("box9")) {
        oWin()
    }
    else if(O.includes("box3") && O.includes("box5") && O.includes("box7")) {
        oWin()
    }
    
    if(X.length == 5 || O.length == 5) {
        equal()
    }
}

boxs.forEach((item, index) => {
    item.classList.add("X-O")

    item.addEventListener("click", (e) => {
        if(start) {
            X.push(item.id)
            item.textContent = "X"
            start = !start
        } else {
            O.push(item.id)
            item.textContent = "O"
            start = !start
        }
        item.style.pointerEvents = "none"
        
        logic()

    })
})

let scoreX = 0
let scoreO = 0

function xWin() {
    start = true
    scoreX += 1

    h1.textContent = "X Win"
    X.length = 0
    O.length = 0

    boxs.forEach((item) => {
        item.textContent = ""
        item.style.pointerEvents = "all"
    })

    h2.textContent = `${scoreX} - ${scoreO}`

}

function oWin() {
    start = true

    scoreO += 1

    h1.textContent = "O Win"
    X.length = 0
    O.length = 0

    boxs.forEach((item) => {
        item.textContent = ""
        item.style.pointerEvents = "all"
    })

    h2.textContent = `${scoreX} - ${scoreO}`
    
}

function equal() {
    start = true
    h1.textContent = "Equal"
    X.length = 0
    O.length = 0

    boxs.forEach((item) => {
        item.textContent = ""
        item.style.pointerEvents = "all"
    })

    h2.textContent = `${scoreX} - ${scoreO}`

}