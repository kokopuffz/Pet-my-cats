console.log("im ded O_O");
let currentQuestion = null;
let outPut = document.getElementById("output");
// let fadeAway = document.querySelector(".fade-away")
let topDisplay = document.getElementById("top-display");
let topCenter = document.querySelector(".top-center");
let cat = document.querySelector(".cat");
let asked = [];
let choices = [0];
let recordPress = [];
let gameOver = false;
let guesses = [];
let catpics = [];
let eventCode = {
  AltLeft: false,
  ShiftLeft: false,
  ArrowDown: false,
  MetaLeft: false,
  Space: false,
  KeyF: false,
  ArrowUp: false,
};




const questions = [
  {
    question: "1Mac: emojis",
    answerOp: {
      Meta: false,
      Shift: false,
      spaceBar: false,
    },
    answer: ["Meta", "Shift", " "],
    answertext: "command-shift-space",
  },

  {
    question: "2Mac: copy current line",
    answerOp: {
      Alt: false,
      Shift: false,
      ArrowDown: false,
    },
    answer: ["Alt", "Shift", "ArrowDown"],
    answertext: "option-shift-down",
  },

  {
    question: "3Mac-VS: format page",
    answer: ["Alt", "Shift", "f"],
    // answer: (pressedKeys.command && pressedKeys.shift && pressedKeys.spaceBar) ,
    // first conditionals to check if its pressed//actually chck
    answerOp: {
      Alt: false,
      Shift: false,
      f: false,
    },
    answertext: "alt-shift-c",
  },

  {
    question: "Mac-VS: move current line up",
    answerOp: {
      Alt: false,
      ArrowUp: false,
    },
    answer: ["Alt", "ArrowUp"],
    answertext: "alt-up",
  },
];

let randomQuestionIndex = () => {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
};

//take out question that was just used
let usedQuestions = (num) => {
  const index = choices.indexOf(num);
  if (index > -1) {
    choices.splice(index, 1);
  }
};

let correctImg = () => {
  const pet = document.createElement("img");
  pet.src = "/img/gianthand.png";
  const parent = document.querySelector(".gianthand");
  parent.appendChild(pet);

  setTimeout(() => parent.removeChild(pet), 3800);
};

let correctDisplay = () => {
  topDisplay.innerText = "correct! YAY PETS!! :3";
  topCenter.style.backgroundColor = "rgb(186 220 172)";
};

let incorrectDisplay = () => {
  topDisplay.innerText = "MY POOR CAT :(";
  // topDisplay.syle.color = "red"
  topCenter.style.backgroundColor = "red";
};



//displays question
const displayQ = () => {
  currentQuestion = randomQuestionIndex();
  //display questions
  topCenter.style.backgroundColor = "rgb(27, 15, 4)";
  topDisplay.innerText = questions[currentQuestion].question;
};

//toggle beginning screen
let toggleGame = (id, toggle) => {
  let screen = document.getElementById(id)
  let display = (toggle) ? 'block' : 'none'
  screen.style.display = display;
}

//toggles end overlay
let endDisplayOn = () => {
  overlay = document.querySelector('div.overlay')
  overlay.style.display='block'
}
let endDisplayOff = () => {
  overlay = document.querySelector('div.overlay')
  overlay.style.display='none'
}
//buttonstart
let start = () => {
  console.log("lets go!");
  toggleGame("front-screen", false);
  toggleGame("game-screen", true);
};



// console.log(pressedKeys)

//starts here
displayQ();
console.log(currentQuestion)


function listener (event) {
  if (event.code === "MetaLeft") {
    eventCode.MetaLeft = true;
    console.log("r");
  }
  if (event.code === "ShiftLeft") {
    eventCode.ShiftLeft = true;
    console.log("a");
  }
  if (event.code === "Space") {
    eventCode.Space = true;
  }
  if (event.code === "AltLeft") {
    eventCode.AltLeft = true;
  }
  if (event.code === "ArrowDown") {
    eventCode.ArrowDown = true;
  }
  if (event.code === "KeyF") {
    eventCode.KeyF = true;
  }
  if (event.code === "ArrowUp") {
    eventCode.ArrowUp = true;
  }
    if (eventCode.MetaLeft && eventCode.ShiftLeft && eventCode.Space) {
      console.log("yay");
      correctImg();
      correctDisplay();
      setTimeout(displayQ, 6000);
      usedQuestions(currentQuestion);
      console.log(choices);
      guesses = [];
      displayQ();
    }
}

document.addEventListener('keydown',listener)



if (currentQuestion === 0) {

  if (eventCode.MetaLeft && eventCode.ShiftLeft && eventCode.Space) {
  console.log('yay')
      correctImg();
      correctDisplay();
      setTimeout(displayQ, 6000);
      usedQuestions(currentQuestion);
      console.log(choices);
      guesses = [];
      displayQ();
    }
}
if (currentQuestion === 1) {

    let eventCode = {
      AltLeft: false,
      ShiftLeft: false,
      ArrowDown: false,
      MetaLeft: false,
      Space: false,
      KeyF: false,
      ArrowUp: false,
    }

 
      addEventListener("keyup", cancelKeys1);
      correctImg();
      correctDisplay();
      setTimeout(displayQ, 6000);
      usedQuestions(currentQuestion);
      console.log(choices);
      guesses = [];
      displayQ();
    }
if (currentQuestion === 2) {


      correctImg();
      correctDisplay();
      setTimeout(displayQ, 6000);
      usedQuestions(currentQuestion);
      console.log(choices);
      guesses = [];
      displayQ();
    }
if (currentQuestion === 3) {


      correctImg();
      correctDisplay();
      setTimeout(displayQ, 6000);
      usedQuestions(currentQuestion);
      console.log(choices);
      guesses = [];
      displayQ();
    }
// if (currentQuestion === 0) {

//     let eventCode = {
//       AltLeft: false,
//       ShiftLeft: false,
//       ArrowDown: false,
//       MetaLeft: false,
//       Space: false,
//       KeyF: false,
//       ArrowUp: false,
//     }
//   addEventListener("keydown", (event) => {
//     if (guesses.length > 10) {
//       guesses.push(event.code);
//       console.log("toomuch");
//       incorrectDisplay();
//       gameOver = true;
//     }
//     if (event.code === "MetaLeft") {
//       eventCode.MetaLeft = true;
//       console.log("tr");
//     }
//     if (event.code === "ShiftLeft") {
//       eventCode.ShiftLeft = true;
//       console.log("tru");
//     }
//     if (event.code === "Space") {
//       eventCode.Space = true;
//       console.log("tru");
//     }
//     if (eventCode.MetaLeft && eventCode.ShiftLeft && eventCode.Space) {
//       console.log("success0");
//       let cancelKeys1 = (event) => {
//         console.log(event);
//         if (event.code === "MetaLeft") {
//           eventCode.MetaLeft = false;
//         }
//         if (event.code === "ShiftLeft") {
//           eventCode.ShiftLeft = false;
//         }
//         if (event.code === "Space") {
//           eventCode.Space = false;
//         }
//       };
//       addEventListener("keyup", cancelKeys1);
//       correctImg();
//       correctDisplay();
//       setTimeout(displayQ, 6000);
//       usedQuestions(currentQuestion);
//       console.log(choices);
//       guesses = [];
//       displayQ();
//     }
//   });
// }

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
