/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
import { birdsData } from './quizData';

const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');
const f_text = document.getElementById('f_text');
const submit = document.getElementById('submit');
const audio = document.querySelector('.audio');
const userScore = document.querySelector('.score');
const answerElements = document.querySelectorAll('.answer');
const sourceImg = document.querySelector('.source-img');
const correctBirdName = document.querySelector('.correct-bird-name');
const list = document.querySelectorAll('.list');
const imgData = document.querySelector('.imgData');
const birdsNameData = document.querySelector('.birdsNameData');
const latinNameData = document.querySelector('.latinNameData');
const footerDescription = document.querySelector('.footerDescription');
const birdBlocks = document.querySelectorAll('.birds-blocks');

let score = 0;
let currentQuiz = 0;
const randomNum = randomInteger(1, 6);
const unknownBird = 'https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg';
console.log(randomNum);

// answers

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  a_text.innerText = getBirdName(currentQuiz, 1);
  b_text.innerText = getBirdName(currentQuiz, 2);
  c_text.innerText = getBirdName(currentQuiz, 3);
  d_text.innerText = getBirdName(currentQuiz, 4);
  e_text.innerText = getBirdName(currentQuiz, 5);
  f_text.innerText = getBirdName(currentQuiz, 6);
  audio.src = getSongs(currentQuiz, randomNum);
}

// === header lights ===

function activeLights() {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i <= 5; i++) {
    birdBlocks[i].classList.remove('active');
    birdBlocks[currentQuiz].classList.add('active');
  }
}

// === submit ===

submit.addEventListener('click', () => {
  // eslint-disable-next-line no-plusplus
  currentQuiz++; // перелистывает страницу
  console.log(currentQuiz);
  if (currentQuiz === 6) {
    if (score === 6) {
      quiz.innerHTML = `<h2 class="quiz-end">Отлично! Вы ответили верно на все вопросы!</h2> <p class="quiz-end">Хотите повторить игру ?</p>
        <button onclick="location.reload()">Повторить</button>`;
    } else {
      quiz.innerHTML = `<h2 class="quiz-end">Вы ответили верно только на ${score} из 6 вопросов</h2> <p class="quiz-end">Хотите повторить игру ?</p>
        <button onclick="location.reload()">Повторить</button>`;
    }
  } else {
    loadQuiz();
    activeLights();
    sourceImg.src = unknownBird;
    correctBirdName.innerHTML = '* * * * *';
    imgData.innerHTML = '';
    birdsNameData.innerText = '';
    latinNameData.innerText = '';
    footerDescription.innerText = '';
    list.forEach((elem) => elem.classList.remove('active-list'));
    list.forEach((elem) => elem.classList.remove('active-list-none'));
  }
});

// === correct answer ===

list.forEach((el) => el.addEventListener('click', () => { // если выбран верный ответ в консоли УРА! answerel
  console.log(el.id);
  function getSelected() {
    return el.id;
  }
  if (randomNum === +getSelected()) {
    // eslint-disable-next-line no-plusplus
    score++;
    userScore.innerHTML = `scores ${score} / 6`;
    sourceImg.src = getBirdImg(currentQuiz, +getSelected());
    correctBirdName.innerHTML = getBirdName(currentQuiz, +getSelected());
    el.classList.add('active-list');
    console.log('URA!!!');
  } else {
    console.log('No!');
    el.classList.add('active-list-none');
  }
}));

// === birds content ===

list.forEach((elem) => elem.addEventListener('click', () => {
  const numberId = Number(elem.id);
  imgData.innerHTML = `<img class="source-img" src="${getBirdImg(currentQuiz, numberId)}" alt="target bird">`;
  birdsNameData.innerText = getBirdName(currentQuiz, numberId);
  latinNameData.innerText = getLatinData(currentQuiz, numberId);
  footerDescription.innerText = getDescriptionData(currentQuiz, numberId);
}));

// === functions ===

// eslint-disable-next-line no-shadow
function localFunc(birdsData, index, targetNum) { // выбирает нужный индекс в файле с птицами
  return birdsData[index].find((x) => x.id === targetNum);
}

// eslint-disable-next-line consistent-return
function getDescriptionData(index, targetNum) { // выводит описание птицы
  if (currentQuiz < 6) return localFunc(birdsData, index, targetNum).description;
}

function getLatinData(index, targetNum) { // выводит латинское имя птицы
  if (currentQuiz < 6) return localFunc(birdsData, index, targetNum).species;
}

function getBirdImg(index, targetNum) { // выводит фото птицы
  if (currentQuiz < 6) return localFunc(birdsData, index, targetNum).image;
}

function getBirdName(index, targetNum) { // выводит имя птицы
  if (currentQuiz < 6) return localFunc(birdsData, index, targetNum).name;
}

function getSongs(index, targetNum) { // выводить голос птицы на аудио
  if (currentQuiz < 6) return localFunc(birdsData, index, targetNum).audio;
}

function deselectAnswers() {
  // eslint-disable-next-line no-param-reassign
  answerElements.forEach((answerEl) => answerEl.checked = false);
}

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
