/* if (questions[runningQuestion].correctAnswer){
        score += 0;
        let answers = document.getElementsByClassName('answer-text');
        for (let i = 0; i < answers; i++){
            answers[i].oncick = '';
        }
    }*/

   /* for (runningQuestion of questions){ 
    if (score += 1){
        score =+ 0;
        runningQuestion.onclick = '';
        runningQuestion.onclick = '';
        runningQuestion.choiceC.onclick = '';
        runningQuestion.choiceD.onclick = '';
    }
    }*/


    /*let answers = document.getElementsByClassName('answer-text');
    answers.addEventListener('click', function(){
        for (let i = 0; i < answers.length; i++){
        checkAnswer();
        answers[i].onclick = '';
        };
        
        });*/


        const answers = document.getElementsByClassName('answers-container');
let allAnswers = answers.children.length;

for (let i = 0; i < allAnswers; i++) {
    answers.children[i].classList.add('disabled');
}