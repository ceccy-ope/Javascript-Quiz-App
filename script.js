const quizQuestions = [
    {
        question: 'What is the capital of Ghana',
        a: 'Berlin',
        b: 'Georgia',
        c: 'Guinea',
        d: 'Accra',
        correct: 'd'
    },

    {
        question: 'What is the capital of India',
        a: 'Jakarta',
        b: 'Tehran',
        c: 'New Delhi',
        d: 'Rome',
        correct: 'c'
    },

    {
        question: 'What is the capital of Japan',
        a: 'Tokyo',
        b: 'Kingston',
        c: 'Nairobi',
        d: 'Hong Kong',
        correct: 'a'
    },

   {
        question: 'What is the capital of Nigeria',
        a: 'Port Harcourt',
        b: 'Lagos',
        c: 'Abuja',
        d: 'Maiduguri',
        correct: 'c'
    },

    {
        question: 'What is the capital of Germany',
        a: 'Mexico',
        b: 'Berlin',
        c: 'Monaco',
        d: 'Maputo',
        correct: 'b'
    }
]
let quizbody = document.querySelector(".quizbody");
let question = document.getElementById('question')
let answers = document.querySelectorAll('.answer')
let a_text = document.getElementById('a_text')
let b_text = document.getElementById('b_text')
let c_text = document.getElementById('c_text')
let d_text = document.getElementById('d_text')
let submitbtn = document.getElementById('submitbtn')

let currentQuiz = 0;
let score = 0;

loadQuiz()

function deselect(){
    for(let answer of answers){
        answer.checked = false
    }
}

function loadQuiz(){
    deselect()
    const currentQuestion = quizQuestions[currentQuiz]

    question.innerText = currentQuestion.question
    a_text.innerText = currentQuestion.a
    b_text.innerText = currentQuestion.b
    c_text.innerText = currentQuestion.c
    d_text.innerText = currentQuestion.d;
}

function grabSelectedOption(){
     let option
    for(let answer of answers){
        if(answer.checked){
             option = answer.id   
        }}
        return option
    }

   submitbtn.addEventListener('click', ()=>{
     const chosenOption = grabSelectedOption()
     if (chosenOption == quizQuestions[currentQuiz].correct) {
        score++
     }
     currentQuiz++

     if(currentQuiz < quizQuestions.length){
        loadQuiz()
     }else{
       quizbody.innerHTML = `<h2>You answered ${score}/${quizQuestions.length} questions correctly</h2>
                                 <button onclick= 'location.reload()'>Reload</button>`
     }
   })
    
   




