/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _quizData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quizData */ \"./src/quizData.js\");\n/* eslint-disable no-return-assign */\r\n/* eslint-disable consistent-return */\r\n/* eslint-disable no-use-before-define */\r\n/* eslint-disable camelcase */\r\n/* eslint-disable no-undef */\r\n\r\n\r\nconst quiz = document.getElementById('quiz');\r\nconst a_text = document.getElementById('a_text');\r\nconst b_text = document.getElementById('b_text');\r\nconst c_text = document.getElementById('c_text');\r\nconst d_text = document.getElementById('d_text');\r\nconst e_text = document.getElementById('e_text');\r\nconst f_text = document.getElementById('f_text');\r\nconst submit = document.getElementById('submit');\r\nconst audio = document.querySelector('.audio');\r\nconst userScore = document.querySelector('.score');\r\nconst answerElements = document.querySelectorAll('.answer');\r\nconst sourceImg = document.querySelector('.source-img');\r\nconst correctBirdName = document.querySelector('.correct-bird-name');\r\nconst list = document.querySelectorAll('.list');\r\nconst imgData = document.querySelector('.imgData');\r\nconst birdsNameData = document.querySelector('.birdsNameData');\r\nconst latinNameData = document.querySelector('.latinNameData');\r\nconst footerDescription = document.querySelector('.footerDescription');\r\nconst birdBlocks = document.querySelectorAll('.birds-blocks');\r\nconst time = document.querySelector('.time');\r\nconst btnPlay = document.querySelector('.play');\r\n\r\nlet score = 0;\r\nlet currentQuiz = 0;\r\nconst randomNumFirstPage = randomInteger();\r\nlet randomNumOtherPage; // !!1\r\nconst unknownBird = 'https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg';\r\nconsole.log(`correct answer ${randomNumFirstPage}`);\r\n\r\n// answers\r\n\r\nloadQuiz();\r\n\r\n// === header lights ===\r\n\r\nfunction activeLights() {\r\n  for (let i = 0; i <= 5; i += 1) {\r\n    birdBlocks[i].classList.remove('active');\r\n    birdBlocks[currentQuiz].classList.add('active');\r\n  }\r\n}\r\n\r\n// === submit ===\r\n\r\nsubmit.addEventListener('click', () => {\r\n  currentQuiz += 1; // перелистывает страницу\r\n  if (currentQuiz === 6) {\r\n    if (score === 6) {\r\n      quiz.innerHTML = `<h2 class=\"quiz-end\">Отлично! Вы ответили верно на все вопросы!</h2> <p class=\"quiz-end\">Хотите повторить игру ?</p>\r\n        <button onclick=\"location.reload()\">Повторить</button>`;\r\n    } else {\r\n      quiz.innerHTML = `<h2 class=\"quiz-end\">Вы ответили верно только на ${score} из 6 вопросов</h2> <p class=\"quiz-end\">Хотите повторить игру ?</p>\r\n        <button onclick=\"location.reload()\">Повторить</button>`;\r\n    }\r\n  } else {\r\n    loadQuiz();\r\n    randomNumOtherPage = randomInteger(); // !!!\r\n    console.log(`correct answer ${randomNumOtherPage}`); // !!!\r\n    audio.src = getSongs(currentQuiz, randomNumOtherPage); // !!\r\n    activeLights();\r\n    sourceImg.src = unknownBird;\r\n    correctBirdName.innerHTML = '* * * * *';\r\n    imgData.innerHTML = '';\r\n    birdsNameData.innerText = '';\r\n    latinNameData.innerText = '';\r\n    footerDescription.innerText = '';\r\n    list.forEach((elem) => elem.classList.remove('active-list'));\r\n    list.forEach((elem) => elem.classList.remove('active-list-none'));\r\n    btnPlay.innerHTML = '<i class=\"fa fa-play-circle fa-5x\"></i>';\r\n    btnPlay.classList.remove('pause');\r\n  }\r\n});\r\n\r\nfunction loadQuiz() {\r\n  deselectAnswers();\r\n  a_text.innerText = getBirdName(currentQuiz, 1);\r\n  b_text.innerText = getBirdName(currentQuiz, 2);\r\n  c_text.innerText = getBirdName(currentQuiz, 3);\r\n  d_text.innerText = getBirdName(currentQuiz, 4);\r\n  e_text.innerText = getBirdName(currentQuiz, 5);\r\n  f_text.innerText = getBirdName(currentQuiz, 6);\r\n  if (score === 0) {\r\n    audio.src = getSongs(currentQuiz, randomNumFirstPage); // !!!\r\n  }\r\n}\r\n\r\n// === correct answer ===\r\n\r\nlist.forEach((el) => el.addEventListener('click', () => { // если выбран верный ответ в консоли УРА! answerel\r\n  function getSelected() {\r\n    return el.id;\r\n  }\r\n  if (randomNumFirstPage === +getSelected() || randomNumOtherPage === +getSelected()) { // !!!\r\n    score += 1;\r\n    userScore.innerHTML = `scores ${score} / 6`;\r\n    sourceImg.src = getBirdImg(currentQuiz, +getSelected());\r\n    correctBirdName.innerHTML = getBirdName(currentQuiz, +getSelected());\r\n    el.classList.add('active-list');\r\n    console.log('Correct!');\r\n  } else {\r\n    console.log('No!');\r\n    el.classList.add('active-list-none');\r\n  }\r\n}));\r\n\r\n// === birds content ===\r\n\r\nlist.forEach((elem) => elem.addEventListener('click', () => {\r\n  const numberId = Number(elem.id);\r\n  imgData.innerHTML = `<img class=\"source-img\" src=\"${getBirdImg(currentQuiz, numberId)}\" alt=\"target bird\">`;\r\n  birdsNameData.innerText = getBirdName(currentQuiz, numberId);\r\n  latinNameData.innerText = getLatinData(currentQuiz, numberId);\r\n  footerDescription.innerText = getDescriptionData(currentQuiz, numberId);\r\n}));\r\n\r\n// === functions ===\r\n\r\n// eslint-disable-next-line no-shadow\r\nfunction localFunc(birdsData, index, targetNum) { // выбирает нужный индекс в файле с птицами\r\n  return birdsData[index].find((x) => x.id === targetNum);\r\n}\r\n\r\n// eslint-disable-next-line consistent-return\r\nfunction getDescriptionData(index, targetNum) { // выводит описание птицы\r\n  if (currentQuiz < 6) return localFunc(_quizData__WEBPACK_IMPORTED_MODULE_0__.birdsData, index, targetNum).description;\r\n}\r\n\r\nfunction getLatinData(index, targetNum) { // выводит латинское имя птицы\r\n  if (currentQuiz < 6) return localFunc(_quizData__WEBPACK_IMPORTED_MODULE_0__.birdsData, index, targetNum).species;\r\n}\r\n\r\nfunction getBirdImg(index, targetNum) { // выводит фото птицы\r\n  if (currentQuiz < 6) return localFunc(_quizData__WEBPACK_IMPORTED_MODULE_0__.birdsData, index, targetNum).image;\r\n}\r\n\r\nfunction getBirdName(index, targetNum) { // выводит имя птицы\r\n  if (currentQuiz < 6) return localFunc(_quizData__WEBPACK_IMPORTED_MODULE_0__.birdsData, index, targetNum).name;\r\n}\r\n\r\nfunction getSongs(index, targetNum) { // выводить голос птицы на аудио\r\n  if (currentQuiz < 6) return localFunc(_quizData__WEBPACK_IMPORTED_MODULE_0__.birdsData, index, targetNum).audio;\r\n}\r\n\r\nfunction deselectAnswers() {\r\n  // eslint-disable-next-line no-param-reassign\r\n  answerElements.forEach((answerEl) => answerEl.checked = false);\r\n}\r\n\r\nfunction randomInteger(min = 1, max = 6) {\r\n  const rand = min - 0.5 + Math.random() * (max - min + 1);\r\n  return Math.round(rand);\r\n}\r\n\r\n// audio scripts\r\n\r\nfunction showAudioTime() {\r\n  return setInterval(() => {\r\n    const audioTime = Math.round(audio.currentTime);\r\n    const audioLength = Math.round(audio.duration);\r\n    time.style.width = `${(audioTime * 100) / audioLength}%`;\r\n  });\r\n}\r\n\r\nbtnPlay.addEventListener('click', () => {\r\n  if (btnPlay.classList.contains('pause') === false) {\r\n    audio.play();\r\n    showAudioTime();\r\n    btnPlay.classList.add('pause');\r\n    btnPlay.innerHTML = '<i class=\"fa fa-pause-circle fa-5x\"></i>';\r\n  } else {\r\n    audio.pause();\r\n    btnPlay.classList.remove('pause');\r\n    btnPlay.innerHTML = '<i class=\"fa fa-play-circle fa-5x\"></i>';\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://quiz-bird-song/./src/index.js?");

/***/ }),

/***/ "./src/quizData.js":
/*!*************************!*\
  !*** ./src/quizData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"birdsData\": () => (/* binding */ birdsData)\n/* harmony export */ });\nconst birdsData = [\r\n  [\r\n    {\r\n      id: 1,\r\n      name: 'Ворон',\r\n      species: 'Corvus corax',\r\n      description: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',\r\n      image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3',\r\n    },\r\n    {\r\n      id: 2,\r\n      name: 'Журавль',\r\n      species: 'Grus grus',\r\n      description: 'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',\r\n      image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3',\r\n    },\r\n    {\r\n      id: 3,\r\n      name: 'Ласточка',\r\n      species: 'Delichon urbicum',\r\n      description: 'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',\r\n      image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3',\r\n    },\r\n    {\r\n      id: 4,\r\n      name: 'Козодой',\r\n      species: 'Caprimulgus europaeus',\r\n      description: 'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ',\r\n      image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3',\r\n    },\r\n    {\r\n      id: 5,\r\n      name: 'Кукушка',\r\n      species: 'Cuculus canorus',\r\n      description: 'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.',\r\n      image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3',\r\n    },\r\n    {\r\n      id: 6,\r\n      name: 'Синица',\r\n      species: 'Parus major',\r\n      description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',\r\n      image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3',\r\n    },\r\n  ],\r\n  [\r\n    {\r\n      id: 1,\r\n      name: 'Воробей',\r\n      species: 'Passer domesticus',\r\n      description: 'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.',\r\n      image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3',\r\n    },\r\n    {\r\n      id: 2,\r\n      name: 'Грач',\r\n      species: 'Corvus frugilegus',\r\n      description: 'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',\r\n      image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3',\r\n    },\r\n    {\r\n      id: 3,\r\n      name: 'Галка',\r\n      species: 'Coloeus monedula',\r\n      description: 'Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.',\r\n      image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3',\r\n    },\r\n    {\r\n      id: 4,\r\n      name: 'Певчий дрозд',\r\n      species: 'Turdus philomelos',\r\n      description: 'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',\r\n      image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3',\r\n    },\r\n    {\r\n      id: 5,\r\n      name: 'Сорока',\r\n      species: 'Pica pica',\r\n      description: 'Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.',\r\n      image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3',\r\n    },\r\n    {\r\n      id: 6,\r\n      name: 'Сойка',\r\n      species: 'Garrulus glandarius',\r\n      description: 'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',\r\n      image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3',\r\n    },\r\n  ],\r\n  [\r\n    {\r\n      id: 1,\r\n      name: 'Зяблик',\r\n      species: 'Fringilla coelebs',\r\n      description: 'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',\r\n      image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3',\r\n    },\r\n    {\r\n      id: 2,\r\n      name: 'Клёст',\r\n      species: 'Loxia curvirostra',\r\n      description: 'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',\r\n      image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3',\r\n    },\r\n    {\r\n      id: 3,\r\n      name: 'Горлица',\r\n      species: 'Streptopelia turtur',\r\n      description: 'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.',\r\n      image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3',\r\n    },\r\n    {\r\n      id: 4,\r\n      name: 'Дятел',\r\n      species: 'Dendrocopos major',\r\n      description: 'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',\r\n      image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3',\r\n    },\r\n    {\r\n      id: 5,\r\n      name: 'Удод',\r\n      species: 'Upupa epops',\r\n      description: 'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',\r\n      image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3',\r\n    },\r\n    {\r\n      id: 6,\r\n      name: 'Стриж',\r\n      species: 'Apus apus',\r\n      description: 'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',\r\n      image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3',\r\n    },\r\n  ],\r\n  [\r\n    {\r\n      id: 1,\r\n      name: 'Жаворонок',\r\n      species: 'Alauda arvensis',\r\n      description: 'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',\r\n      image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3',\r\n    },\r\n    {\r\n      id: 2,\r\n      name: 'Соловей',\r\n      species: 'Luscinia luscinia',\r\n      description: 'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',\r\n      image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3',\r\n    },\r\n    {\r\n      id: 3,\r\n      name: 'Скворец',\r\n      species: 'Sturnus vulgaris',\r\n      description: 'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',\r\n      image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3',\r\n    },\r\n    {\r\n      id: 4,\r\n      name: 'Иволга',\r\n      species: 'Oriolus oriolus',\r\n      description: 'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',\r\n      image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3',\r\n    },\r\n    {\r\n      id: 5,\r\n      name: 'Свиристель',\r\n      species: 'Bombycilla garrulus',\r\n      description: 'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',\r\n      image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3',\r\n    },\r\n    {\r\n      id: 6,\r\n      name: 'Щегол',\r\n      species: 'Carduelis carduelis',\r\n      description: 'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',\r\n      image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3',\r\n    },\r\n  ],\r\n  [\r\n    {\r\n      id: 1,\r\n      name: 'Орёл',\r\n      species: 'Aquila nipalensis',\r\n      description: 'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',\r\n      image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3',\r\n    },\r\n    {\r\n      id: 2,\r\n      name: 'Коршун',\r\n      species: 'Milvus migrans',\r\n      description: 'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',\r\n      image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3',\r\n    },\r\n    {\r\n      id: 3,\r\n      name: 'Лунь',\r\n      species: 'Circus cyaneus',\r\n      description: 'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',\r\n      image: 'https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3',\r\n    },\r\n    {\r\n      id: 4,\r\n      name: 'Сокол',\r\n      species: 'Falco peregrinus',\r\n      description: 'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',\r\n      image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3',\r\n    },\r\n    {\r\n      id: 5,\r\n      name: 'Ястреб',\r\n      species: 'Accipiter gentilis',\r\n      description: 'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',\r\n      image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3',\r\n    },\r\n    {\r\n      id: 6,\r\n      name: 'Филин',\r\n      species: 'Bubo bubo',\r\n      description: 'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',\r\n      image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3',\r\n    },\r\n  ],\r\n  [\r\n    {\r\n      id: 1,\r\n      name: 'Альбатрос',\r\n      species: 'Diomedea exulans',\r\n      description: 'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',\r\n      image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3',\r\n    },\r\n    {\r\n      id: 2,\r\n      name: 'Олуша',\r\n      species: 'Sula nebouxii',\r\n      description: 'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',\r\n      image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3',\r\n    },\r\n    {\r\n      id: 3,\r\n      name: 'Буревестник',\r\n      species: 'Puffinus griseus',\r\n      description: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',\r\n      image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3',\r\n    },\r\n    {\r\n      id: 4,\r\n      name: 'Пеликан',\r\n      species: 'Pelecanus',\r\n      description: 'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',\r\n      image: 'https://live.staticflickr.com/65535/49159147156_dcbbb5c12a.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3',\r\n    },\r\n    {\r\n      id: 5,\r\n      name: 'Пингвин',\r\n      species: 'Aptenodytes forsteri',\r\n      description: 'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',\r\n      image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3',\r\n    },\r\n    {\r\n      id: 6,\r\n      name: 'Чайка',\r\n      species: 'Larus argentatus',\r\n      description: 'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',\r\n      image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',\r\n      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3',\r\n    },\r\n  ],\r\n];\r\n\r\n// export default birdsData;\r\n\n\n//# sourceURL=webpack://quiz-bird-song/./src/quizData.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;