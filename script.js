console.log('im ded')

let outPut = document.getElementById("output")
let fadeAway = document.querySelector(".fade-away")
let topDisplay = document.getElementById("top-display")
let asked = []
let choices = [0,1,2,3]
let recordPress = []
let gameOver=false

// let pressedKeys = { }
// document.addEventListener('keydown', e => pressedKeys[e.key] = true)
// document.addEventListener('keyup', e => pressedKeys[e.key] = false) 
// document.body.onkeyup = function(e){
//   if(e.keyCode == 32) {
//     console.log('spacebar biatches')
//   }
// }
// console.log(pressedKeys)



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
    question: "Mac\Chrome Devtools: elements mouseover panel",
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
    question: "Mac\VS: move current line up",
    answerOp: {
        Alt: false,
        ArrowUp: false
      },
    answer: ['Alt', 'ArrowUp'],
    answertext: "alt-up"
  }
]

//go to answer, get array, plug each into pressed keys execute pressed keys

// function movementHandler() {
//   // console.log(e)
//   const speed = 5
//   console.log(pressedKeys)
// //   // movementDisplay.innerText = 'X:' + hero.x + ' ' + 'Y:' + hero.y 
//   if (ogre.alive) movementDisplay.innerText = `X:${hero.x} Y:${hero.y}` 
// //   // conditional logic based on what key was pressed
//   if (pressedKeys.a || pressedKeys.ArrowLeft) hero.x -= speed
//   if (pressedKeys.d || pressedKeys.ArrowRight) hero.x += speed
//   if (pressedKeys.s || pressedKeys.ArrowDown) hero.y += speed
//   if (pressedKeys.w || pressedKeys.ArrowUp) hero.y -= speed
// }


// goal #1 show pressed keys on screen
//make pressedDisplay that also listens to keyup** later
let compareKeys = () => document.addEventListener("keydown", function(event) {
  const p = document.createElement("p")
  p.textContent = `${event.key}`
  // outPut.appendChild(p)
  if (event.key === ' '){
    p.textContent = 'Spacebar'
  }
  outPut.appendChild(p)
  recordPress.push(event.key)
  console.log(recordPress)
  }
    // fadeAway.classList.toggle(fade)
, true)


//take out question that was just used
let usedQuestions = (num) => {
  const index = choices.indexOf(num)
  if (index > -1) {
    choices.splice(index,1)
  }
}


let randomQuestionIndex = () => {
  const index = Math.floor(Math.random() * choices.length) 
    return (choices[index])
}

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


function gameLoop() {
  //get random index from choices
  let currentQuestion = randomQuestionIndex()
  //display question
  topDisplay.innerText = questions[currentQuestion].question
  //start saving keystroke/
  compareKeys()
  
  

  //check keystroke against answers
  //if user is right take current question out of choices
  usedQuestions(currentQuestion)
  console.log(choices)
  //get the answers
  let currentAnswer = questions[currentQuestion].answer
  //check is press is included inside current answers
}

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



document.addEventListener('DOMContentLoaded', ()=> {
  gameLoop()
})