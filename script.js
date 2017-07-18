/*function multiplier1() {
  const answerBox = document.getElementById('answer1');
  const input =  document.getElementById('submitInput1').value;

  let displayText = ''

  if (input.toLowerCase() === 'yes') {
    displayText = 'They said yes'
  } else if (input.toLowerCase() === 'no') {
    displayText = 'They said no'
  } else if (input.toLowerCase() === 'sometimes') {
    displayText = 'They said sometimes'
  } else {
    displayText = 'Invalid input'
  }

  answerBox.innerHTML = displayText
}*/

function multiplier1() {
  const choices = document.getElementsByName('home-question')
  const answerBox = document.getElementById('answer1');

  for (const choice of choices) {
    if (choice.checked) {
      answerBox.innerHTML = choice.value
    }
  }
}

const homeBtn = document.getElementById('quiz-home-btn')
homeBtn.addEventListener('click', multiplier1)


function multiplier2() {
  const choices = document.getElementsByName('work-question')
  const answerBox = document.getElementById('answer2');

  for (const choice of choices) {
    if (choice.checked) {
      answerBox.innerHTML = choice.value
    }
  }
}

const workBtn = document.getElementById('quiz-work-btn')
workBtn.addEventListener('click', multiplier2)

function multiplier3() {
  const choices = document.getElementsByName('travel-question')
  const answerBox = document.getElementById('answer3');

  for (const choice of choices) {
    if (choice.checked) {
      answerBox.innerHTML = choice.value
    }
  }
}

const travelBtn = document.getElementById('quiz-travel-btn')
travelBtn.addEventListener('click', multiplier3)

function multiplier4() {
  const choices = document.getElementsByName('goingout-question')
  const answerBox = document.getElementById('answer4');

  for (const choice of choices) {
    if (choice.checked) {
      answerBox.innerHTML = choice.value
    }
  }
}

const goingoutBtn = document.getElementById('quiz-goingout-btn')
goingoutBtn.addEventListener('click', multiplier4)
