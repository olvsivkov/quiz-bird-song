import {birdsData} from './quizData.js'

const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');
const f_text = document.getElementById('f_text');
const submit = document.getElementById('submit');
const audio = document.querySelector(".audio");
const userScore = document.querySelector('.score');
const answerElements = document.querySelectorAll('.answer');
let sourceImg = document.querySelector('.source-img');
let correctBirdName = document.querySelector('.correct-bird-name');
let list = document.querySelectorAll('.list');
let imgData = document.querySelector('.imgData');
let birdsNameData = document.querySelector('.birdsNameData');
let latinNameData = document.querySelector('.latinNameData');
let footerDescription = document.querySelector('.footerDescription');
let birdBlocks = document.querySelectorAll('.birds-blocks');

let score = 0;
let currentQuiz = 0;
let randomNum = randomInteger(1, 6)
let unknownBird = "https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg"
console.log(randomNum)
    
// answers

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  a_text.innerText = getBirdName(currentQuiz, 1)
  b_text.innerText = getBirdName(currentQuiz, 2)
  c_text.innerText = getBirdName(currentQuiz, 3)
  d_text.innerText = getBirdName(currentQuiz, 4)
  e_text.innerText = getBirdName(currentQuiz, 5)
  f_text.innerText = getBirdName(currentQuiz, 6)
  audio.src = getSongs(currentQuiz, randomNum)
}

// === header lights ===

function activeLights(){
    for(let i = 0; i <= 5; i++){
        birdBlocks[i].classList.remove('active');
        birdBlocks[currentQuiz].classList.add('active');
    }
}

// === submit ===

submit.addEventListener("click", () => {
    currentQuiz++ // перелистывает страницу
    console.log(currentQuiz)
    if(currentQuiz === 6){
      if(score === 6){  
        quiz.innerHTML = `<h2 class="quiz-end">Отлично! Вы ответили верно на все вопросы!</h2> <p class="quiz-end">Хотите повторить игру ?</p>
        <button onclick="location.reload()">Повторить</button>`
      }
      else {
        quiz.innerHTML = `<h2 class="quiz-end">Вы ответили верно только на ${score} из 6 вопросов</h2> <p class="quiz-end">Хотите повторить игру ?</p>
        <button onclick="location.reload()">Повторить</button>`
      }
    }
    else {
        loadQuiz();
        activeLights();
        sourceImg.src = unknownBird;
        correctBirdName.innerHTML = '* * * * *';
        imgData.innerHTML = ''
        birdsNameData.innerText = ''
        latinNameData.innerText = ''
        footerDescription.innerText = ''
        list.forEach(elem => elem.classList.remove('active-list'));
        list.forEach(elem => elem.classList.remove('active-list-none'));
    }
})

// === correct answer ===

list.forEach(el => el.addEventListener('click', (event) => { // если выбран верный ответ в консоли УРА! answerel
    console.log(el.id)
    function getSelected(){
        return el.id;
    }
    if(randomNum === +getSelected()) { 
      score++
      userScore.innerHTML = `scores ${score} / 6`;
      sourceImg.src = getBirdImg(currentQuiz, +getSelected());
      correctBirdName.innerHTML = getBirdName(currentQuiz, +getSelected())
      el.classList.add('active-list');
      console.log('URA!!!')
    }
    else {
        console.log ("No!");
        el.classList.add('active-list-none');
    }
}))

// === birds content ===

list.forEach( elem => elem.addEventListener('click', () => {
    let numberId = Number(elem.id)
    imgData.innerHTML = `<img class="source-img" src="${getBirdImg(currentQuiz, numberId)}" alt="target bird">`
    birdsNameData.innerText = getBirdName(currentQuiz, numberId);
    latinNameData.innerText = getLatinData(currentQuiz, numberId);
    footerDescription.innerText = getDescriptionData(currentQuiz, numberId);
}) )

// === functions ===

function localFunc(birdsData, index, targetNum) { // выбирает нужный индекс в файле с птицами
    return birdsData[index].find(x => x.id === targetNum)
}

function getDescriptionData(index, targetNum){ // выводит описание птицы
    if(currentQuiz < 6) return localFunc(birdsData, index, targetNum).description
    else return
}

function getLatinData(index, targetNum){ // выводит латинское имя птицы
    if(currentQuiz < 6) return localFunc(birdsData, index, targetNum).species
    else return
}

function getBirdImg(index, targetNum){ // выводит фото птицы 
  if(currentQuiz < 6) return localFunc(birdsData, index, targetNum).image
  else return
}

function getBirdName(index, targetNum){ // выводит имя птицы
  if(currentQuiz < 6) return localFunc(birdsData, index, targetNum).name
  else return
}

function getSongs(index, targetNum){ // выводить голос птицы на аудио
  if(currentQuiz < 6) return localFunc(birdsData, index, targetNum).audio
  else return 
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function randomInteger(min, max) { // функция для случайного числа от 1 до 6, которое выведет аудиодорожку. И с ним же будет сравниваться ответ из getSelected()
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}



