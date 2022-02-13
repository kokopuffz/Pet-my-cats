console.log("iam not a cat lady");
let currentQuestion = null;
let outPut = document.getElementById("output");
// let fadeAway = document.querySelector(".fade-away")
let topDisplay = document.getElementById("top-display");
let topCenter = document.querySelector(".top-center");
let cat = document.querySelector(".cat");
let asked = [];
let choices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let choicesPC = [1,2,3,4,5,6,7,8,9,10]
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
  ArrowUp: false,
  Digit4: false,
  KeyF: false,
  KeyX: false,
  KeyY: false,
  KeyA: false,
  KeyK: false,
  Home: false,
  End: false,
  ArrowRight: false,
  ControlLeft: false,
  Backspace: false,
  Delete: false
};
//switches for mac or pc or linux
let mac = true
let pc = false
// linux another time
// let linux = false


let pudgemeow = new Audio("pudgemeow.mp3");

catPix = [
  {
    cat: "dafat1",
    img: "./cats/dafat.jpg",
    img2: "https://cdn.discordapp.com/attachments/919468128432455700/940403303282516019/IMG_0247.JPG",
    alt: "fluffy white cat in a circular bun",
  },
  {
    cat: "dafat2",
    img: "./cats/dafat2.jpg",
    img2: "https://cdn.discordapp.com/attachments/919468128432455700/940403303806824448/IMG_0342.JPG",
    alt: "fluffy white cat belly exposed relaxed",
  },
  {
    cat: "dafat3",
    img: "./cats/dafat3.jpeg",
    img2: "https://cdn.discordapp.com/attachments/919468128432455700/940403486267432960/IMG_2241.JPEG",
    alt: "fluffy white cat belly exposed couch",
  },
  {
    cat: "dafat4",
    img: "./cats/dafat4.jpg",
    img2: "https://cdn.discordapp.com/attachments/919468128432455700/940403487781556254/IMG_2657.JPG",
    alt: "fluffy white cat outside under tree looking at leaf",
  },
  {
    cat: "dafat5",
    img: "./cats/dafat5.jpg",
    img2: "https://cdn.discordapp.com/attachments/919468128432455700/940403486988861440/IMG_2728.JPG",
    alt: "fluffy white cat crossed arms staring at camera",
  },
  {
    cat: "dafat6",
    img: "./cats/dafat6.jpg",
    img2: "https://cdn.discordapp.com/attachments/919468128432455700/940403147661262868/IMG_5931.jpg",
    alt: "angry fluffy white cat with princess leia buns",
  },
  {
    cat: "Einstein",
    img: "./cats/einstein.jpeg",
    img2: "https://cdn.discordapp.com/attachments/919468128432455700/919717181858668544/IMG_0931.JPEG",
    alt: "tuxedo cat and grey white cat",
  },
  {
    cat: "Ham1",
    img: "./cats/ham.jpg",
    img2: "https://cdn.discordapp.com/attachments/296063428043341834/919118232261107712/image0.jpg",
    alt: "white-grey cat destroying a papertowel roll",
  },
  {
    cat: "Ham2",
    img: "./cats/hamm.jpg",
    img2: "https://cdn.discordapp.com/attachments/919468128432455700/940396207073820672/IMG_1954.jpg",
    alt: "white-grey cat sleeping on table",
  },
  {
    cat: "Ham3",
    img: "./cats/hammy1.JPEG",
    img2: "https://cdn.discordapp.com/attachments/296063428043341834/885717522056364062/IMG_0826.JPEG",
    alt: "grey-white cat in car",
  },
  {
    cat: "Pudgie",
    img: "./cats/pudgie.jpg",
    img2: "https://cdn.discordapp.com/attachments/919468128432455700/940396208155926548/IMG_1971.jpg",
    alt: "stocky grey-white cat eyes big",
  },
];

//changes cat pictures
let changeCat = () => {
  console.log("new cat pic");
  i = Math.floor(Math.random() * catPix.length);
  let catImg = catPix[i].img2;
  let newCat = document.getElementById("cat-pix");
  newCat.src = catImg;
  newCat.alt = catPix[i].alt;
};

const questions = [
  {
    //q1
    //not pc friendly
    question: "Mac: emojis",
    answer: "eventCode.MetaLeft && eventCode.ShiftLeft && eventCode.Space",
    answertext: "command-shift-space",
  },

  {
    //q2
    question: "Mac: copy current line",
    questionPC: "PC: copy current line",
    answer: "eventCode.AltLeft && eventCode.ShiftLeft && eventCode.ArrowDown",
    answerPC:
      " eventCode.ShiftLeft && eventCode.AltLeft && eventCode.ArrowDown",
    // answerLinux:
    // " eventCode.ControlLeft && eventCode.ShiftLeft && eventCode.AltLeft && eventCode.ArrowDown",
    answertext: "option-shift-arrowdown",
    answertextPC: "shift-alt-arrowdown",
    // answertextLinux: "control-shift-alt-arrowdown",
  },

  {
    //q3
    question: "Mac|VSC: format page",
    questionPC: "PC|VSC: format page",
    answer: "eventCode.AltLeft && eventCode.ShiftLeft && eventCode.KeyF",
    answertext: "option-shift-f",
    answertextPC: "shift-alt-f",
    // answertextLinux: "control-shift-i",
  },

  {
    //q4
    question: "Mac|VSC: move current line up",
    questionPC: "PC|VSC: move current line up",
    answer: "eventCode.AltLeft && eventCode.ArrowUp",
    answertext: "option-arrowup",
    answertextPC: "alt-arrowup",
    // answertextLinux: "control-shift-alt-arrowdown",
  },
  {
    //q5
    question: "Mac|VSC: delete line",
    questionPC: "PC|VSC: delete line",
    answer: "eventCode.MetaLeft && eventCode.KeyX",
    answertext: "command-x",
    answertextPC: "control-shift-k",
  },
  {
    //q6
    question: "Mac|Zoom: raise hand",
    questionPC: "PC|Zoom: raise hand",
    answer: "eventCode.AltLeft && eventCode.KeyY",
    answertext: "option-y",
    answertextPC: "alt-y",
  },
  {
    //q7
    question: "Mac|VSC: Go to the beginning of line",
    questionPC: "PC|VSC: Go to the beginning of line",
    answer: "eventCode.Home",
    answertext: "home",
  },
  {
    //q8
    question: "Mac|VSC: Move to last character of line",
    questionPC: "PC|VSC: Move to last character of line",
    answer: "eventCode.End",
    answertext: "end",
  },
  {
    //q9
    question: "Mac|VSC: Go to the next word",
    questionPC: "PC|VSC: Go to the next word",
    answer: "eventCode.AltLeft && eventCode.ArrowRight",
    answertext: "option-right",
    answertextPC: "control-right",
  },
  {
    //q10
    question: "Mac|Zoom: Push to talk",
    questionPC: "PC|Zoom: Push to talk",
    answer: "eventCode.Space",
    answertext: "spacebar",
  },
  {
    //q11
    question: "Mac|VSC: Delete previous word",
    questionPC: "PC|VSC: Delete previous word",
    answer: "eventCode.Space",
    answertext: "control-delete",
    answertextPC: "control-backspace",
  },
];

//random number from choices
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
  pet.src = "./img/gianthand.png";
  const parent = document.querySelector(".gianthand");
  parent.appendChild(pet);
  setTimeout(() => parent.removeChild(pet), 3800);
};

//prompt turns green with correct msg
let correctDisplay = () => {
  topDisplay.innerText = "correct! YAY PETS!!";
  topCenter.style.backgroundColor = "rgb(186 220 172)";
};

//prompt turns red with incorrect msg
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
  displayOver.innerText = "You got them all right!";
  displayOver.innerText += "\nAnd my cats are pleased.";
  displayOver.innerText += "\nowo";
};
//if you get question wrong
let displayLost = () => {
  let displayOver = document.getElementById("display-over");
  displayOver.innerText = "correct keys are:";
  displayOver.innerText += `\n${questions[currentQuestion].answertext}`;
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
  p.style.color = "white";

  if (event.key === " ") {
    p.textContent = "Spacebar";
  }
  if (event.key === "Alt") {
    p.textContent = "Option";
  }
  if (event.key === "Meta") {
    p.textContent = "Command";
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
  if (event.code === "KeyY") {
    eventCode.KeyY = true;
  }
  if (event.code === "KeyA") {
    eventCode.KeyA = true;
  }
  if (event.code === "KeyK") {
    eventCode.KeyK = true;
  }
  if (event.code === "Home") {
    eventCode.Home = true;
  }
  if (event.code === "End") {
    eventCode.End = true;
  }
  if (event.code === "Delete") {
    eventCode.Delete = true;
  }
  if (event.code === "ArrowRight") {
    eventCode.ArrowRight = true;
  }
  if (event.code === "ControlLeft") {
    eventCode.ControlLeft = true;
  }
  if (event.code === "Backspace") {
    eventCode.ControlLeft = true;
  }
  if (
    currentQuestion === 0 &&
    eventCode.MetaLeft &&
    eventCode.ShiftLeft &&
    eventCode.Space
  ) {
    p.textContent = "command-shift-space";
    p.style.color = "var(--light-green)";
    rightAnswer();
  }
  if (
    currentQuestion === 1 &&
    eventCode.AltLeft &&
    eventCode.ShiftLeft &&
    eventCode.ArrowDown
  ) {
    p.textContent = "option-shift-down";
    p.style.color = "var(--light-green)";
    rightAnswer();
  }
  if (
    currentQuestion === 2 &&
    eventCode.AltLeft &&
    eventCode.ShiftLeft &&
    eventCode.KeyF
  ) {
    p.textContent = "option-shift-f";
    p.style.color = "var(--light-green)";
    rightAnswer();
  }
  if (currentQuestion === 3 && eventCode.AltLeft && eventCode.ArrowUp) {
    p.textContent = "option-up";
    p.style.color = "var(--light-green)";
    rightAnswer();
  }
  if (currentQuestion === 4 && eventCode.MetaLeft && eventCode.KeyX) {
    p.textContent = "command-x";
    p.style.color = "var(--light-green)";
    rightAnswer();
  }
  if (currentQuestion === 5 && eventCode.AltLeft && eventCode.KeyY) {
    p.textContent = "option-y";
    p.style.color = "var(--light-green)";
    rightAnswer();
  }
  if (currentQuestion === 6 && eventCode.Home) {
    p.textContent = "home";
    p.style.color = "var(--light-green)";
    rightAnswer();
  }
  if (currentQuestion === 7 && eventCode.End) {
    p.textContent = "end";
    p.style.color = "var(--light-green)";
    rightAnswer();
  }
  if (currentQuestion === 8 && eventCode.AltLeft && eventCode.ArrowRight) {
    p.textContent = "option-arrowright";
    p.style.color = "var(--light-green)";
    rightAnswer();
  }
  if (currentQuestion === 9 && eventCode.Space) {
    p.textContent = "option-arrowright";
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
//listens specific up keys
function listenerUp(event) {
  if (event.code === "MetaLeft") {
    eventCode.MetaLeft = false;
    console.log("metaup");
  }
  if (event.code === "ShiftLeft") {
    eventCode.ShiftLeft = false;
    console.log("shiftup");
  }
  if (event.code === "Space") {
    eventCode.Space = false;
    console.log("spaceup");
  }
  if (event.code === "AltLeft") {
    eventCode.AltLeft = false;
    console.log("altup");
  }
  if (event.code === "ArrowDown") {
    eventCode.ArrowDown = false;
    console.log("arrowDup");
  }
  if (event.code === "KeyF") {
    eventCode.KeyF = false;
    console.log("fup");
  }
  if (event.code === "ArrowUp") {
    eventCode.ArrowUp = false;
    console.log("arrowUup");
  }
  if (event.code === "Digit4") {
    eventCode.Digit4 = false;
    console.log("4up");
  }
  if (event.code === "KeyX") {
    eventCode.KeyX = false;
    console.log("xup");
  }
  if (event.code === "KeyK") {
    eventCode.KeyK = false;
    console.log("kup");
  }

  if (event.code === "KeyY") {
    eventCode.KeyY = false;
    console.log("yup");
  }
  if (event.code === "KeyA") {
    eventCode.KeyA = false;
    console.log("aup");
  }
  if (event.code === "Home") {
    eventCode.Home = false;
    console.log("homeup");
  }
  if (event.code === "End") {
    eventCode.End = false;
    console.log("endup");
  }
  if (event.code === "ArrowRight") {
    eventCode.ArrowRight = false;
    console.log("arrowRup");
  }
  if (event.code === "Delete") {
    eventCode.Delete = false;
    console.log("dup");
  }
  if (event.code === "ControlLeft") {
    eventCode.ControlLeft = false;
    console.log("ctrlup");
  }
  if (event.code === "Backspace") {
    eventCode.Backspace = false;
    console.log("bkup");
  }
}

console.log(currentQuestion);
console.log(guesses);

//if sound on play, if not dont
let pudgie = () => {
  let soundOn = document.getElementById("sound-on");
  if (soundOn.checked) {
    pudgemeow.play();
    // document.getElementsByTagName('audio')
  } else {
    return;
  }
};

// if right ... if there is no more choices, then gameover
const rightAnswer = () => {
  pudgie();
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
    setTimeout(displayQ, 5000);
  }
};

//resets variables to starting variables
const reset = () => {
  choices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  choicesPC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  guesses = [];
  eventCode = {
    AltLeft: false,
    ShiftLeft: false,
    ArrowDown: false,
    MetaLeft: false,
    Space: false,
    KeyF: false,
    KeyK: false,
    ArrowUp: false,
    Digit4: false,
    KeyX: false,
    KeyY: false,
    KeyA: false,
    Home: false,
    End: false,
    ArrowRight: false,
    ControlLeft: false,
    Delete: false,
    Backspace: false
  };
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
