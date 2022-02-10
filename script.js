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

//changes cat pictures
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
  topCenter.style.backgroundColor = "red";
};


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
  displayOver.innerText = "Shortcut Champ!";
};

let displayLost = () => {
  let displayOver = document.getElementById("display-over");
  displayOver.innerText = 'correct keys are:'      
  displayOver.innerText += `\n${questions[currentQuestion].answertext}`    
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



//listens specific down keys
function listenerDown(event) {
  //displays keys
  let p = document.getElementById("output");
  p.innerText = `${event.key}`;
  p.style.color="white"
  if (event.key === " ") {
    p.textContent = "Spacebar";
  }

  if (event.code === "MetaLeft") {
    eventCode.MetaLeft = true;
  }
  if (event.code === "ShiftLeft") {
    eventCode.ShiftLeft = true;
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
    p.textContent = "command-shift-space";
    p.style.color = "green"
    rightAnswer();
  }
  if (
    currentQuestion === 1 &&
    eventCode.AltLeft &&
    eventCode.ShiftLeft &&
    eventCode.ArrowDown
  ) {
    p.textContent = "alt-shift-down";
    p.style.color = "var(--light-green)";
    rightAnswer();
  }
  if (
    currentQuestion === 2 &&
    eventCode.AltLeft &&
    eventCode.ShiftLeft &&
    eventCode.KeyF
  ) {
    p.textContent = "alt-shift-f";
    p.style.color = "var(--light-green)";
    rightAnswer();
  }
  if (currentQuestion === 3 && eventCode.AltLeft && eventCode.ArrowUp) {
    p.textContent = "alt-up";
    p.style.color = "var(--light-green)";
    rightAnswer();
  }
  if (currentQuestion === 4 &&
    eventCode.MetaLeft &&
    eventCode.KeyX) {
    console.log("yay2");
    p.textContent = "command-x";
    p.style.color = "var(--light-green)";
    rightAnswer();
  } else if (guesses.length > 9) {
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

//resets questions to full
const reset = () => {
  choices = [0, 1, 2, 3,4];
  guesses = [];
};

//over because all questions correct
const gameOver = () => {
  document.removeEventListener("keyup", listenerUp);
  document.removeEventListener("keydown", listenerDown);
  endDisplayOn();
  displayWin();
  reset();
};

//over because wrong keys pressed
const gameLoss = () => {
  document.removeEventListener("keyup", listenerUp);
  document.removeEventListener("keydown", listenerDown);
  incorrectDisplay();
  endDisplayOn();
  displayLost();
  reset();
};
