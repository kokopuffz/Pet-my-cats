console.log("im ded O_O");
let currentQuestion = null;
let outPut = document.getElementById("output");
// let fadeAway = document.querySelector(".fade-away")
let topDisplay = document.getElementById("top-display");
let topCenter = document.querySelector(".top-center");
let cat = document.querySelector(".cat");
let asked = [];
let choices = [0, 1, 2, 3, 4];
let recordPress = [];
// let gameOver = false;
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
  Digit4: false,
  KeyX: false
};

catPix = [
  {
  cat: "dafat1",
  img:"./cats/dafat.jpg",
  alt:"fluffy white cat in a circular bun"
  },
  {
  cat: "dafat2",
  img:"./cats/dafat2.jpg",
  alt:"fluffy white cat belly exposed relaxed"
  },
  {
  cat: "dafat3",
  img:"./cats/dafat3.jpeg",
  alt:"fluffy white cat belly exposed couch"
  },
  {
  cat: "dafat4",
  img:"./cats/dafat4.jpg",
  alt:"fluffy white cat outside under tree looking at leaf"
  },
  {
  cat: "dafat5",
  img:"./cats/dafat5.jpg",
  alt:"fluffy white cat crossed arms staring at camera"
  },
  {
  cat: "dafat6",
  img:"./cats/dafat6.jpg",
  alt:"angry fluffy white cat with princess leia buns"
  },
  {
  cat: "Einstein",
  img:"./cats/einstein.jpeg",
  alt:"tuxedo cat and grey white cat"
  },
  {
  cat: "Ham1",
  img:  "./cats/ham.jpg",
  alt:"white-grey cat destroying a papertowel roll"
  },
  {
  cat: "Ham2",
  img:"./cats/hamm.jpg",
  alt:"white-grey cat sleeping on table"
  },
  {
  cat: "Ham3",
  img:"./cats/hammy1.JPEG",
  alt:"grey-white cat in car"
  },
  {
  cat: "Pudgie",
  img: "./cats/pudgie.jpg",
  alt:"stocky grey-white cat eyes big"
  },

];

let changeCat = () => {
  console.log("meow");
  i = Math.floor(Math.random() * catPix.length);
  let catImg = catPix[i].img ;
  let newCat = document.getElementById("cat-pix");
  newCat.src = catImg;
  newCat.alt = catPix[i].alt
};

const questions = [
  {
    question: "1Mac: emojis",
    // answerOp: {
    //   Meta: false,
    //   Shift: false,
    //   spaceBar: false,
    // },
    answer: "eventCode.MetaLeft && eventCode.ShiftLeft && eventCode.Space",
    answertext: "command-shift-space",
  },

  {
    question: "2Mac: copy current line",
    // answerOp: {
    //   Alt: false,
    //   Shift: false,
    //   ArrowDown: false,
    // },
    answer: "eventCode.AltLeft && eventCode.ShiftLeft && eventCode.ArrowDown",
    answertext: "option-shift-down",
  },

  {
    question: "3Mac-VS: format page",
    answer: "eventCode.AltLeft && eventCode.ShiftLeft && eventCode.KeyF",
    // first conditionals to check if its pressed//actually chck
    // answerOp: {
    //   Alt: false,
    //   Shift: false,
    //   f: false,
    // },
    answertext: "alt-shift-f",
  },

  {
    question: "Mac-VSC: move current line up",
    // answerOp: {
    //   Alt: false,
    //   ArrowUp: false,
    // },
    answer: "eventCode.AltLeft && eventCode.ArrowUp",
    answertext: "alt-up",
  },
  {
    question: "Mac-VSC: delete line",
    // answerOp: {
    //   Alt: false,
    //   ArrowUp: false,
    // },
    answer: "eventCode.MetaLeft && eventCode.KeyX",
    answertext: "command-x",
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
//gj pet hand
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
  // topCenter.style.backgroundColor = "hotpink";
};

let incorrectDisplay = () => {
  topDisplay.innerText = "MY POOR CAT :(";
  // topDisplay.syle.color = "red"
  topCenter.style.backgroundColor = "red";
};

// const catPicker = () => {
//   idx = Math.floor(Math.random() * 11);
// }

//displays question
const displayQ = () => {
  currentQuestion = randomQuestionIndex();
  //display questions
  topCenter.style.backgroundColor = "rgb(27, 15, 4)";
  topDisplay.innerText = questions[currentQuestion].question;
  changeCat();
};

//toggle beginning screen
let toggleGame = (id, toggle) => {
  let screen = document.getElementById(id);
  let display = toggle ? "block" : "none";
  screen.style.display = display;
};

//if no more questions
let displayWin = () => {
  let displayOver = document.getElementById("display-over");
  displayOver.innerText = "Good Job Champ.";
};

let displayLost = () => {
  let displayOver = document.getElementById("display-over");
  displayOver.innerText = `The correct shortcut keys are ${questions[currentQuestion].answertext}`;
};

//toggles end overlay
let endDisplayOn = () => {
  overlay = document.querySelector("div.overlay");
  overlay.style.display = "block";
};
let endDisplayOff = () => {
  overlay = document.querySelector("div.overlay");
  overlay.style.display = "none";
};
//buttonstart
let start = () => {
  console.log("lets go!");
  toggleGame("front-screen", false);
  toggleGame("game-screen", true);
  endDisplayOff();
  reset();
  displayQ();
  document.addEventListener("keydown", listenerDown);
  document.addEventListener("keyup", listenerUp);
};

// console.log(pressedKeys)

//starts here

// document.addEventListener("keydown", function(event) {

function listenerDown(event) {
  let p = document.getElementById("output");
  p.innerText = `${event.key}`;

  if (event.key === " ") {
    p.textContent = "Spacebar";
  }

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
  if (event.code === "Digit4") {
    eventCode.Digit4 = true;
  }
  if (event.code === "KeyX") {
    eventCode.KeyX = true;
  }
  if (
    currentQuestion === 0 &&
    eventCode.MetaLeft &&
    eventCode.ShiftLeft &&
    eventCode.Space
  ) {
    console.log("yay");
    rightAnswer();
  }
  if (
    currentQuestion === 1 &&
    eventCode.AltLeft &&
    eventCode.ShiftLeft &&
    eventCode.ArrowDown
  ) {
    console.log("yay1");
    rightAnswer();
  }
  if (
    currentQuestion === 2 &&
    eventCode.AltLeft &&
    eventCode.ShiftLeft &&
    eventCode.KeyF
  ) {
    console.log("yay2");
    rightAnswer();
  }
  if (currentQuestion === 3 && eventCode.AltLeft && eventCode.ArrowUp) {
    console.log("yay2");
    rightAnswer();
  }
  if (currentQuestion === 4 &&
    eventCode.MetaLeft &&
    eventCode.KeyX) {
    console.log("yay2");
    rightAnswer();
  } else if (guesses.length > 10) {
    console.log("too many guesses/wrong answer");
    console.log(guesses.length);
    gameLoss();
  } else {
    guesses.push(event);
  }
}

function listenerUp(event) {
  if (event.code === "MetaLeft") {
    eventCode.MetaLeft = false;
    console.log("up");
  }
  if (event.code === "ShiftLeft") {
    eventCode.ShiftLeft = false;
    console.log("up");
  }
  if (event.code === "Space") {
    eventCode.Space = false;
    console.log("up");
  }
  if (event.code === "AltLeft") {
    eventCode.AltLeft = false;
    console.log("up");
  }
  if (event.code === "ArrowDown") {
    eventCode.ArrowDown = false;
    console.log("up");
  }
  if (event.code === "KeyF") {
    eventCode.KeyF = false;
    console.log("up");
  }
  if (event.code === "ArrowUp") {
    eventCode.ArrowUp = false;
    console.log("up");
  }
  if (event.code === "Digit4") {
    eventCode.Digit4 = false;
    console.log("up");
  }
  if (event.code === "KeyX") {
    eventCode.KeyX = false;
    console.log("up");
  }
}

console.log(currentQuestion);
console.log(guesses);

const rightAnswer = () => {
  console.log("areuderegod");
  correctImg();
  correctDisplay();
  usedQuestions(currentQuestion);
  if (choices.length === 0) {
    gameOver();
  } else {
    console.log(choices);
    console.log(guesses.length);
    guesses = [];
    console.log("guesses reset");
    setTimeout(displayQ, 6000);
  }
};

const reset = () => {
  choices = [0, 1, 2, 3,4];
  guesses = [];
};
// const checkChoicesNum = () => {

//     }else{
// }
const gameOver = () => {
  document.removeEventListener("keyup", listenerUp);
  document.removeEventListener("keydown", listenerDown);
  endDisplayOn();
  displayWin();
  reset();
};

const gameLoss = () => {
  document.removeEventListener("keyup", listenerUp);
  document.removeEventListener("keydown", listenerDown);
  incorrectDisplay();
  endDisplayOn();
  displayLost();
  reset();
};

// function checkThis(currentQuestion, listener)

//if question0... get answer key(questions[questionindex].answer)
// console.log(questions[0].answer)
// if (currentQuestion === 0) {

// if (eventCode.MetaLeft && eventCode.ShiftLeft && eventCode.Space) {
// console.log('yay')
// correctImg();
//     correctDisplay();
//     setTimeout(displayQ, 6000);
//     usedQuestions(currentQuestion);
//     console.log(choices);
//     guesses = [];
//     displayQ();
//   }
// }
// if (currentQuestion === 1) {

//       addEventListener("keyup", cancelKeys1);
//       correctImg();
//       correctDisplay();
//       // setTimeout(displayQ, 6000);
//       usedQuestions(currentQuestion);
//       console.log(choices);
//       guesses = [];
//       // displayQ();
//     }

// if (currentQuestion === 2) {

//       correctImg();
//       correctDisplay();
//       setTimeout(displayQ, 6000);
//       usedQuestions(currentQuestion);
//       console.log(choices);
//       guesses = [];
//       displayQ();
//     }
// if (currentQuestion === 3) {

//       correctImg();
//       correctDisplay();
//       setTimeout(displayQ, 6000);
//       usedQuestions(currentQuestion);
//       console.log(choices);
//       guesses = [];
//       displayQ();
//     }

//=========================================================================
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
