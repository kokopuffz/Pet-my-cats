console.log('im ded')

let outPut = document.getElementById("output")
let fadeAway = document.getElementById("fade-away")

//keyboardlistener
window.addEventListener("keydown", function(event) {
  const p = document.createElement("p");
  p.textContent = `${event.key}`;
  outPut.appendChild(p);
  // fadeAway.classList.toggle(fade)
}, true);

const pressedKeys = { }
document.addEventListener('keydown', e => pressedKeys[e.key] = true)
document.addEventListener('keyup', e => pressedKeys[e.key] = false) 
console.log(pressedKeys)




// function pressedkeys() {
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

function gameLoop() {
  // clear the canvas and then render
  // clear the entire canvs from tp left to bottom right
  pressedKeys()
}


// let askedQuestions = []

// const questions = [

//   { question: "Mac: Emoticons",
//     answer: {

//     },
//     answertext: "command-shift-space"
//   }

// ]

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

})