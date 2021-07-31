const startButton=document.getElementById('btn-one')
startButton.addEventListener('click',startGame)
const main=document.getElementById('main')
const questionElement=document.getElementById('wm')
const answerButtonElement=document.getElementById('answer_buttons')
let shuffledQuestions,currentQuestionIndex
function startGame(){
    console.log('started')
    main.style.display='inline-block';
    startButton.style.display='none';
    shuffledQuestions=question.sort(()=>Math.random()-.5)
    urrentQuestionIndex=0
}

function setNextQuestion() {
showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(){
    questionElement.innerText=questions.question
}
function selectAnswer(){

}
const question = [
    {
        question:'what is 2+2',
        answers: [
            { text:'4',correct:true},
            { text:'22',correct:false}
        ]
    }
]
