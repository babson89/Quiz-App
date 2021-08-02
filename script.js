

const quizData = [

    {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "<javascript>",
    b: "<script>",
    c: "<js>",
    d: "<scripting>",
    correct: "b",
    },
    
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5? ",
        a: "if(i<> 5)",
        b: "if i<>5",
        c: "if(i!=5)",
        d: "if i=!5 then",
        correct: "c",
    },

    {
        question: "How do you create a function in JavaScript?",
        a: "function = myFunction()",
        b: "function myFunction()",
        c: "function:myFunction",
        d: "function = myFunction",
        correct: "b",
    },

    {
        question: "How do you round the number 7.25, to the nearest integer?",
        a: "Math.round(7.25)",
        b: "rnd(7.25)",
        c: "round(7.25)",
        d: "Math.rnd(7.25)",
        correct: "a",
    },

]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')

const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
   let answer
   
   answerEls.forEach(answerEl => {
       if(answerEl.checked) {
           answer = answerEl.id
       }
   })

   return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        }else {
            quiz.innerHTML = `
            <h2>You answered ${score}
            /${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})