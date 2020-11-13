const quizData = [{
    question: "How old Azizsige ?",
    a: "17",
    b: "18",
    c: "19",
    d: "20",
    correct: "d"
  },
  {
    question: "Which one is not a Programming Language ?",
    a: "HTML",
    b: "JAVA",
    c: "JAVASCRIPT",
    d: "KOTLIN",
    correct: "a"
  },
  {
    question: "Which one is not for use Web Development",
    a: "Kotlin",
    b: "Javascript",
    c: "Python",
    d: "Laravel",
    correct: "a"
  },
  {
    question: "Which one is not for use Desktop Development",
    a: "Ionic",
    b: "Html",
    c: "Python",
    d: "Javascript",
    correct: "b"
  },
  {
    question: "Which one is not for use Mobile Development",
    a: "Firebase",
    b: "Javascript",
    c: "Python",
    d: "Flutter",
    correct: "a"
  },
];

const question = document.getElementById('question');
const a = document.getElementById('a_text');
const b = document.getElementById('b_text');
const c = document.getElementById('c_text');
const d = document.getElementById('d_text');
const submit = document.getElementById('submit');
const radios = document.querySelectorAll('.answer');
const scoreNum = document.getElementById('no');
const btnRefresh = document.getElementById('try');

let currentQuizData = 0;
let score = 0;

loadQuiz();


function loadQuiz() {
  deselectedAnswer();

  const currentQuiz = quizData[currentQuizData];

  question.innerText = currentQuiz.question;
  a.innerText = currentQuiz.a;
  b.innerText = currentQuiz.b;
  c.innerText = currentQuiz.c;
  d.innerText = currentQuiz.d;
}

// Tankap pilihan user
function getSelected() {
  let answer = undefined;

  radios.forEach(radio => {
    if (radio.checked) {
      answer = radio.id;
    }
  })

  return answer;
}

// Fungsi untuk Nonaktifkan Jawaban saat next load
function deselectedAnswer() {
  radios.forEach(radio => {
    radio.checked = false;
  })

}

submit.addEventListener('click', () => {

  const answer = getSelected();

  if (answer) {
    // Kondisi untuk menambah score
    if (answer == quizData[currentQuizData].correct) {
      score++;
    }

    currentQuizData++;
    // Kondisi jika soal sudah sampai di akhir
    if (currentQuizData < quizData.length) {
      loadQuiz();
    } else {
      alert('Your Finished!');
      scoreNum.innerHTML = score;
      btnRefresh.style.display = "block"
    }
  } else {
    alert('Please Choose Your Answer!')
  }
})














































// const answersEls = document.querySelectorAll('.answer');
// const questionEl = document.getElementById('question');
// const quiz = document.getElementById('quiz');
// const questionNo = document.getElementById('questionNo');
// const a = document.getElementById('a_text');
// const b = document.getElementById('b_text');
// const c = document.getElementById('c_text');
// const d = document.getElementById('d_text');
// const btn = document.getElementById('submit');
// const no = document.getElementById('no');
// const scores = document.getElementById('score');
// const btnTry = document.getElementById('try');

// let currentQuiz = 0;
// let score = 0;

// loadQuiz();

// function loadQuiz() {
//   deselectedAnswer();

//   const currentQuizData = quizData[currentQuiz];
//   questionEl.innerText = currentQuizData.question;

//   a.innerText = currentQuizData.a;
//   b.innerText = currentQuizData.b;
//   c.innerText = currentQuizData.c;
//   d.innerText = currentQuizData.d;
// }

// function getSelected() {
//   let answer = undefined;

//   answersEls.forEach(answerEl => {
//     if (answerEl.checked) {
//       answer = answerEl.id;
//     }
//   })

//   return answer;
// }

// function deselectedAnswer(){
//   answersEls.forEach(answerEl => {
//     answerEl.checked = false;
//   })
// }

// btn.addEventListener('click', () => {
//   const answer = getSelected();

//   console.log(answer)

//   if (answer) {
//     if(answer === quizData[currentQuiz].correct){
//       score++;
//     }
//     currentQuiz++;
//     if (currentQuiz < quizData.length) {
//       loadQuiz();
//       scores.style.display = "block";
//       no.innerHTML = score;
//     } else {
//       btnTry.style.display = "block";
//       alert('Your Finished')
//     }
//   } else {
//     alert('Please Select Your Answer!')
//   }
// })

// btnTry.addEventListener('click', () => {
//   location.reload();
// })