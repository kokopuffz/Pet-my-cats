console.log('im ded')

let outPut = document.getElementById("output")
let fadeAway = document.getElementById("fade-away")
let topDisplay = document.getElementById("top-display")
let asked = []
let choices = [0,1,2,3]
let recordPress = []
let gameOver=false

const pressedKeys = { }
document.addEventListener('keydown', e => pressedKeys[e.key] = true)
document.addEventListener('keyup', e => pressedKeys[e.key] = false) 
console.log(pressedKeys)

const questions = [
  { 
    question: "Mac: emojis",
    answer: ['Meta', 'Shift', ' '],
    answertext: "command-shift-space"
  },

  { 
    question: "Mac: copy current line",
    answer: ['Meta', 'Shift', " "],
    answertext: "option-shift-down"
  },
  
  {
    question: "Mac\Chrome Devtools: elements mouseover panel",
    answer: ['Meta', 'Shift', " "],
    answertext: "command-shift-c"
  },

  {
    question: "Mac\VS: move current line up",
    answer: ['Alt', 'ArrowUp'],
    answertext: "alt-up"
  }
]

// function pressedkeys() {
//   console.log(pressedKeys)
//   if (ogre.alive) movementDisplay.innerText = `X:${hero.x} Y:${hero.y}` 
// //   // conditional logic based on what key was pressed
//   if (pressedKeys.a || pressedKeys.ArrowLeft) hero.x -= speed
//   if (pressedKeys.d || pressedKeys.ArrowRight) hero.x += speed
//   if (pressedKeys.s || pressedKeys.ArrowDown) hero.y += speed
//   if (pressedKeys.w || pressedKeys.ArrowUp) hero.y -= speed
// }
//after button is pressed to start


//goal #1 show pressed keys on screen
let pressedDisplay = () => document.addEventListener("keydown", function(event) {
  const p = document.createElement("p");
  p.textContent = `${event.key}`;
  outPut.appendChild(p);

  if (!gameOver) {
    recordPress.push(event.key)
    console.log(recordPress)
  }

  // fadeAway.classList.toggle(fade)
}, true);


// how do i get my solution to the question reflected in the questions

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

// let checkInput = () {
//checks if the inputs are correct === boolean
// }
//question is displayed and page displays every keyboard press
// let questionDisplay = (questions, topDisplay) => {
//   for (let i = 0; i < questions.length; i++) {
//     answers = [];
//   }

//   topDisplay.innerText = questions[idx].question
// }


function gameLoop() {
  pressedDisplay()
  //get random index from choices
  let getQuestion = randomQuestionIndex()
  //display question
  topDisplay.innerText = questions[getQuestion].question
  usedQuestions(getQuestion)

  
  if (gameOver) {
    return
  }

  // clear the canvas and then render
  // clear the entire canvs from tp left to bottom right
  // pressedKeys()
}




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