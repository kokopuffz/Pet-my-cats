console.log('im ded O_O')

let outPut = document.getElementById("output")
let fadeAway = document.querySelector(".fade-away")
let topDisplay = document.getElementById("top-display")
let topCenter = document.querySelector(".top-center")
let asked = []
let choices = [0,1]
let recordPress = []
let gameOver=false
let guesses = []


// let pressedKeys = { }
// document.addEventListener('keydown', e => pressedKeys[e.key] = true)
// document.addEventListener('keyup', e => pressedKeys[e.key] = false) 
// document.body.onkeyup = function(e){
//   if(e.keyCode == 32) {
//     console.log('spacebar biatches')
//   }
// }
// console.log(pressedKeys)

//new game
//try again hover screen with button
//

const questions = [
  // let spaceBar = " "
  { 
    question: "Mac: emojis",
    answerOp: {
      Meta: false,
      Shift: false,
      spaceBar: false
    },
    answer: ['Meta', 'Shift', ' '],
    answertext: "command-shift-space"
  },
  
  { 
    question: "Mac: copy current line",
    answerOp: {
      Alt: false,
      Shift: false,
      ArrowDown: false
    },
    answer: ['Alt', 'Shift', "ArrowDown"],
    answertext: "option-shift-down"
  },
  
  {
    question: "Mac-Chrome Devtools: elements mouseover panel",
    answer: ['Command', 'Shift', "c"],
    // answer: (pressedKeys.command && pressedKeys.shift && pressedKeys.spaceBar) ,
    // first conditionals to check if its pressed//actually chck
    answerOp: {
      Command: false,
      Shift: false,
      c: false
    },
    answertext: "command-shift-c"
  },
  
  {
    question: "Mac-VS: move current line up",
    answerOp: {
      Alt: false,
      ArrowUp: false
    },
    answer: ['Alt', 'ArrowUp'],
    answertext: "alt-up"
  }
]

const question0 = () => {
  let eventCode = {
    MetaLeft: false,
    ShiftLeft: false,
    Space: false
  }

  addEventListener("keydown", (event) => {
  if (event.code === 'MetaLeft') {
    eventCode.MetaLeft = true
    console.log("rar")
    console.log(event)
  }
  if (event.code === 'ShiftLeft') {
    eventCode.ShiftLeft = true
    console.log("rarar")
  }
  if (event.code === 'Space') {
    eventCode.Space = true
    console.log("mrar")
  }
  if (eventCode.MetaLeft && eventCode.ShiftLeft && eventCode.Space) {
    //giant hand goes across screeen
    console.log("GOODJOBSPORT")
    usedQuestions(currentQuestion)
    correctImg()
    correctDisplay()
    console.log(choices)
    return
  } else {
    //find a way to give a number of guesses
    console.log("WTF DID U DO")
    guesses.push(event.code)
    if (guesses.length > 7) {
      console.log("doneski")
      gameOver = true
      return
    }
  }
})

addEventListener("keyup", (event) => {
  if (event.code === "MetaLeft") {
    eventCode.MetaLeft = false;
  }
  if (event.code === "ShiftLeft") {
    eventCode.ShiftLeft = false
  }
  if (event.code === "Space") {
    eventCode.Space = false
  }
})

}

const question1= () => {
  let eventCode = {
    AltLeft: false,
    ShiftLeft: false,
    ArrowDown: false
  }

  addEventListener("keydown", (event) => {
    if (event.code === 'AltLeft') {
      eventCode.AltLeft = true
      console.log("rar")
    }
    if (event.code === 'ShiftLeft') {
      eventCode.ShiftLeft = true
      console.log("rarar")
    }
    if (event.code === 'ArrowDown') {
      eventCode.ArrowDown = true
      console.log("mrar")
    }
    if (eventCode.AltLeft && eventCode.ShiftLeft && eventCode.ArrowDown) {
      //giant hand goes across screeen
      console.log("GOODJOBSPORT1COPYLINE")
      usedQuestions(currentQuestion)
      correctImg()
      correctDisplay()
      console.log(choices)
      return
    } else {
      console.log('nope')
      if (event.length > 7){
        gameover = true
      }
    }
  })

    addEventListener("keyup", (event) => {
      if (event.code === "AltLeft") {
        eventCode.MetaLeft = false;
      }
      if (event.code === "ShiftLeft") {
        eventCode.ShiftLeft = false
      }
      if (event.code === "ArrowDown") {
        eventCode.Space = false
      }
    })
  }

const question2 = () => {
    let eventCode = {
    MetaLeft: false,
    ShiftLeft: false,
    KeyC: false
  }

addEventListener("keydown", (event) => {
  if (event.code === 'MetaLeft') {
    eventCode.MetaLeft = true
    console.log("rarar")
  }
  if (event.code === 'ShiftLeft') {
    eventCode.ShiftLeft = true
    console.log("mrar")
  }
  if (event.code === 'KeyC') {
    eventCode.KeyC = true
    console.log("rar")
  }
  if (eventCode.MetaLeft && eventCode.ShiftLeft && eventCode.KeyC) {
          //giant hand goes across screeen
    console.log("GOODJOBSPORT2ELEMENTS")
    usedQuestions(currentQuestion)
    correctImg()
    correctDisplay()
    console.log(choices)
  } else {
    guesses.push(event.code)
    if (guesses.length > 7) {
      console.log("redroveritsover")
      gameOver = true
      return
    }
  }
})

addEventListener("keyup", (event) => {
  if (event.code === "MetaLeft") {
    eventCode.MetaLeft = false;
  }
  if (event.code === "ShiftLeft") {
    eventCode.ShiftLeft = false
  }
  if (event.code === "KeyC") {
    eventCode.Space = false
  }
})
}

let question3 = () => {
  let eventCode = {
    AltLeft: false,
    ArrowUp: false
  }

addEventListener("keydown", (event) => {
    if (event.code === 'AltLeft') {
      eventCode.AltLeft = true
      console.log("rar")
    }
    if (event.code === 'ArrowUp') {
      eventCode.ArrowUp = true
      console.log("mrar")
    }
    if (eventCode.AltLeft && eventCode.ArrowUp){
          //giant hand goes across screeen
      correctImg()
      correctDisplay()
      usedQuestions(currentQuestion)
      console.log(choices)
      console.log("GOODJOBSPORTMOVELINEUP")
    } else {
      guesses.push(event.code)
      if (guesses.length > 7) {
        console.log("dundundun")
        gameOver = true
        return
      }
    }
  })

  addEventListener("keyup", (event) => {
    if (event.code === "MetaLeft") {
      eventCode.MetaLeft = false;
    }
    if (event.code === "Space") {
      eventCode.Space = false
    }
  })
}

//  (currentQuestion === 0) {
  
// }

let randomQuestionIndex = () => {
  const index = Math.floor(Math.random() * choices.length) 
    return (choices[index])
}

//take out question that was just used
let usedQuestions = (num) => {
  const index = choices.indexOf(num)
  if (index > -1) {
    choices.splice(index,1)
  }
}


let correctImg = () => {
  const pet = document.createElement('img')
  pet.src='/img/gianthand.png'
  const parent = document.querySelector('.gianthand')
  parent.appendChild(pet)
  console.log
  setTimeout(() => parent.removeChild(pet),3800)
}

let correctDisplay = () => {
  topDisplay.innerText = "correct!"
  topCenter.style.backgroundColor = "rgb(186 220 172)"
}


// goal #1 show pressed keys on screen
//make pressedDisplay that also listens to keyup** later

//button that starts this madnesss*******************



//check if there are any choices
//LOOP FROM HERE/


if (choices.length === 0) {
  (gameOver)
  console.log("goodjob no moar quest")
}


//make it the current question
let currentQuestion = randomQuestionIndex()
console.log(currentQuestion)

//display questions
topDisplay.innerText = questions[currentQuestion].question
//index taken out only if question is right


//get question - if statements start here

//QUESTION0
if (currentQuestion === 0) {
  question0()
}

if (currentQuestion === 1) {
  question1()
}

// //IFQUESTION1

// //IFQUESTION2
if (currentQuestion === 2) {
  question2()
}
//   //IFQUESTION3*************************
if (currentQuestion === 3) {
  question3()
}



//fack u i tried :(
// document.addEventListener("keydown", function(event) {
//   const p = document.createElement("p")
//   p.textContent = `${event.key}`
//   // outPut.appendChild(p)
//   if (event.key === ' '){
//     p.textContent = 'Spacebar'
//   }
//   outPut.appendChild(p)
  
  
//   recordPress.push(event.key)
//   console.log(recordPress)
//   }
//     // fadeAway.classList.toggle(fade)
// , true)





// let check = (move, currentAnswer) => {
//   for (let i = 0; i < currentAnswer.length; i++ ) {
//     let a = move.sort 
//     let b = currentAnswer.sort 
//     console.log(a)
//     console.log(b)
//     if (a[i] != b[i]) {
//       console.log('checkF')
//       return false
      
//     } else {
//       console.log('checkF')
//       return true
      
//     }
//   }
// }

// let checkInput = () {
// checks if the inputs are correct === boolean
// }


// function gameLoop() {
//   //get random index from choices
//   let currentQuestion = randomQuestionIndex()

//   //start saving keystroke/
//   compareKeys()
  
  

  //check keystroke against answers
  //if user is right take current question out of choices
  // usedQuestions(currentQuestion)
  // console.log(choices)
  //get the answers
  // let currentAnswer = questions[currentQuestion].answer
  //check is press is included inside current answers
// }

  //compare pressed keys 
  
  
  // if (gameOver) {
  //   return
  // }

  // clear the canvas and then render
  // clear the entire canvs from tp left to bottom right
  // pressedKeys()





//listen for start button

//topdiv innertest question shows up
// let textQuestion = () => {
//   let output = []

// }

//computer listens for key press

//displays keypress
// checks is key presses are correct or incorrect

//if right... cat image changes topdiv innertext holds new question
//randomly select index of next question
//make sure that question does not come up again until new game


//if wrong... popoverscreen displays correct answer with try again button



// document.addEventListener('DOMContentLoaded', ()=> {
//   gameLoop()
// })