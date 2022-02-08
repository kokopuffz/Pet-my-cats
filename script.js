console.log("im ded O_O");
let currentQuestion = null;
let outPut = document.getElementById("output");
// let fadeAway = document.querySelector(".fade-away")
let topDisplay = document.getElementById("top-display");
let topCenter = document.querySelector(".top-center");
let cat = document.querySelector(".cat");
let asked = [];
let choices = [0, 1];
let recordPress = [];
let gameOver = false;
let guesses = [];
let catpics = [];

// let changeCat = () => {
//   urls = [
//     'url(./cats/dafat.jpg)',
//     'url(./cats/dafat2.jpg)',
//     'url(./cats/dafat3.jpeg)',
//     'url(./cats/dafat4.jpg)',
//     'url(./cats/dafat6.jpg)',
//     'url(./cats/dafat6.jpg)',
//     'url(./cats/einstein.jpeg)',
//     'url(./cats/ham.jpg)',
//     'url(./cats/hamm.jpg)',
//     'url(./cats/hammy1.jpg)',
//     'url(./cats/pudgie.jpg)'
//   ]
//   i = Math.floor(Math.random() * urls.length)
//   return urls[i]
// }
// changeCat()

// let imgReplace = () => {
//   let newCat = document.querySelector(".cat")[0];
//   newCat.src= changeCat()
// }
// imgReplace()

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

const question0 = () => {
  let eventCode = {
    MetaLeft: false,
    ShiftLeft: false,
    Space: false,
  };

  addEventListener("keydown", (event) => {
    if (event.code === "MetaLeft") {
      eventCode.MetaLeft = true;
      console.log('r')
    }
    if (event.code === "ShiftLeft") {
      eventCode.ShiftLeft = true;
      console.log("a");
    }
    if (event.code === "Space") {
      eventCode.Space = true;
      console.log("r");
    }

    if (eventCode.MetaLeft && eventCode.ShiftLeft && eventCode.Space) {
      console.log("success0");

      let cancelKeys1 = (event) => {
        console.log(event);
        if (event.code === "MetaLeft") {
          eventCode.MetaLeft = false;
        }
        if (event.code === "ShiftLeft") {
          eventCode.ShiftLeft = false;
        }
        if (event.code === "Space") {
          eventCode.Space = false;
        }
      };
      addEventListener("keyup", cancelKeys1);
      //giant hand goes across screeen

      correctImg();
      correctDisplay();
      setTimeout(displayQ, 6000);
      usedQuestions(currentQuestion);
      console.log(choices);
      guesses = [];
      displayQ();

    } else {
      //find a way to give a number of guesses
      console.log("WTF DID U DO");
      guesses.push(event.code);
      if (guesses.length > 10) {
        console.log("doneski");
        incorrectDisplay();
        (gameOver)
      }
    }
  });
};

const question1 = () => {
  let eventCode = {
    AltLeft: false,
    ShiftLeft: false,
    ArrowDown: false,
  };

  addEventListener("keydown", (event) => {
    if (event.code === "AltLeft") {
      eventCode.AltLeft = true;

    }
    if (event.code === "ShiftLeft") {
      eventCode.ShiftLeft = true;

    }
    if (event.code === "ArrowDown") {
      eventCode.ArrowDown = true;

    }
    if (eventCode.AltLeft && eventCode.ShiftLeft && eventCode.ArrowDown) {
      console.log("success1")
      let cancelKeys2 = (event) => {
        console.log(event);
        if (event.code === "AltLeft") {
          eventCode.AltLeft = false;
        }
        if (event.code === "ShiftLeft") {
          eventCode.ShiftLeft = false;
        }
        if (event.code === "ArrowDown") {
          eventCode.ArrowDown = false;
        }
      };
      addEventListener("keyup", cancelKeys2);

      question = true
      correctImg();
      correctDisplay();
      setTimeout(displayQ, 6000);
      usedQuestions(currentQuestion);
      console.log(choices);
      guesses = [];
      displayQ();
    } else {
      console.log("WTF DID U DO");
      guesses.push(event.code);
      if (guesses.length > 10) {
        console.log("negatory");
        incorrectDisplay();
        (gameover)
      }
    }
  });
};

const question2 = () => {

  let eventCode = {
    AltLeft: false,
    ShiftLeft: false,
    KeyF: false,
  };

  addEventListener("keydown", (event) => {
    if (event.code === "AltLeft") {
      eventCode.AltLeft = true;
    }
    if (event.code === "ShiftLeft") {
      eventCode.ShiftLeft = true;
    }
    if (event.code === "KeyF") {
      eventCode.KeyF = true;
    }
    if (eventCode.AltLeft && eventCode.ShiftLeft && eventCode.KeyF) {
      console.log("success2");
      let cancelKeys3 = (event) => {
        console.log(event);
        if (event.code === "AltLeft") {
          eventCode.AltLeft = false;
        }
        if (event.code === "ShiftLeft") {
          eventCode.ShiftLeft = false;
        }
        if (event.code === "KeyF") {
          eventCode.KeyF = false;
        }
      };
      addEventListener("keyup", cancelKeys3);

      correctImg();
      correctDisplay();
      setTimeout(displayQ, 6000);
      usedQuestions(currentQuestion);
      console.log(choices);
      guesses = [];
      displayQ();
    } else {
      guesses.push(event.code);
      if (guesses.length > 10) {
        incorrectDisplay();
        gameOver = true
      }
    }
  });
};

let question3 = () => {

  let eventCode = {
    AltLeft: false,
    ArrowUp: false,
  };

  addEventListener("keydown", (event) => {
    if (event.code === "AltLeft") {
      eventCode.AltLeft = true;
    }
    if (event.code === "ArrowUp") {
      eventCode.ArrowUp = true;
    }
    if (eventCode.AltLeft && eventCode.ArrowUp) {
      console.log("success3");
      let cancelKeys4 = (event) => {
        console.log(event);
        if (event.code === "AltLeft") {
          eventCode.AltLeft = false;
        }
        if (event.code === "ArrowUp") {
          eventCode.ArrowUp = false;
        }
      };
      addEventListener("keyup", cancelKeys4);

      correctImg();
      correctDisplay();
      setTimeout(displayQ, 6000);
      usedQuestions(currentQuestion);
      console.log(choices);
      guesses = [];
      displayQ();
    } else {
      guesses.push(event.code);
      if (guesses.length > 10) {
        console.log("dundundun");
        incorrectDisplay();
        (gameover)

      }
    }
  });
};

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

// goal #1 show pressed keys on screen
//make pressedDisplay that also listens to keyup** later

//button that starts this madnesss*******************

const displayQ = () => {
  //make it the current question
  currentQuestion = randomQuestionIndex();
  console.log(currentQuestion);
  console.log(choices);
  //display questions
  topCenter.style.backgroundColor = "rgb(27, 15, 4)";
  topDisplay.innerText = questions[currentQuestion].question;
};

//STARTS HEREEEEE

displayQ();

if (choices.length === 0) {
    gameOver = true;
    console.log("goodjob all cats are happy");
}
if (currentQuestion === 0) {
    question0();
}
if (currentQuestion === 1) {
    question1()
}
if (currentQuestion === 2) {
    question2()
}
if (currentQuestion === 3) {
    question3()
}


  //index taken out only if question is right --done in questionfunction
  //get question - if statements start here



  // if ((question = true && choices.length < 4)) {
  //   usedQuestions(currentQuestion);
  // }


// let currentQuestion = randomQuestionIndex()
// console.log(currentQuestion)
// //display questions
// topCenter.style.backgroundColor = "rgb(27, 15, 4)"
// topDisplay.innerText = questions[currentQuestion].question
// gameLoop()

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
