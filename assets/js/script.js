/** functions to add:
 * say hello to the player when they enter their name + press enter or click the start button - done
 * show only one question at a time
 * only one click allowed
 * highlight the background with green if it's correct and with red if it's incorrect 
 * add a next question icon - done
 * increment the score if the answer is correct
 * logo resets game and scores
 * alert/pop-up window at the end with the total scores + message
 */


/* Load page and add listeners for clicking the start and next buttons or pressing Enter. */
document.addEventListener('DOMContentLoaded', function() {
    rules.classList.remove('hide');
    results.style.display = 'none';

    for (let button of startButton) {
        button.addEventListener('click', function() {
                helloPlayer();
        })
    }

    document.getElementById('username').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            helloPlayer();
        }
    })

    let nextButton = document.getElementById('next-question');

    for (let button of nextButton) {
        button.addEventListener('click', function () {
                nextQuestion();
                userLogin.style.display= 'none';
                rules.style.display = 'none';
                results.style.display = 'none';
        })
    }

/** Greets the player and starts the game when they enter a usernamename.
 * Gives an alert if no name is entered and not going to proceed to the game.*/

function helloPlayer () {

    if (username.value == "") {
        alert('Please enter your name to start the game!');
        return false;

    } else {
        let userLogin = document.getElementById('user-login');
        userLogin.style.display= 'none';
        rules.style.display = 'none';
        results.style.display = 'none';
        let quiz = document.getElementById('game-frame');
        quiz.classList.remove('hide');

        let welcomeMessage = document.getElementById('hidden-welcome');
        welcomeMessage.innerHTML = `Welcome ${username.value}! Let's play!`;
        runningQuestion = 0; /**put this in fixed bugs too! */
        renderQuestion();

    }
}
 }) 

/* Adding variables */
let startButton = document.getElementsByClassName('start-game');
let rules = document.getElementById('rules-panel');
let results = document.getElementById('results-panel');

const questions = [
    {
        question : 'What is the capital of Malawi?',
        choiceA : 'Nairobi',
        choiceB : 'Maputo',
        choiceC : 'Lilongwe',
        choiceD : 'Lusaka',
        correctAnswer: 'c'
    },

    {
        question : 'Manila is the capital of...',
        choiceA : 'Philippines',
        choiceB : 'Afghanistan',
        choiceC : 'Andorra',
        choiceD : 'Mozambique',
        correctAnswer: 'a'
    },

    {
        question : 'Vientiane is the capital of...',
        choiceA : 'Thailand',
        choiceB : 'Vietnam',
        choiceC : 'Laos',
        choiceD : 'Taiwan',
        correctAnswer : 'c'
    },

    {
        question : 'What is the capital of Albania?',
        chocieA : 'Bishkek',
        choiceB : 'Sarajevo',
        choiceC : 'Minsk',
        choiceD : 'Tirana',
        correctAnswer: 'd'
    },

    {
        question : 'What is the capital of Chile?',
        choiceA : 'Lima',
        choiceB : 'Santiago',
        choiceC : 'Caracas',
        choiceD : 'Quito',
        correctAnswer : 'b'
    },

    {
        question : 'Montevideo is the capital of...',
        choiceA : 'Cuba',
        choiceB : 'Hawaii',
        choiceC : 'Uruguay',
        choiceD : 'Paraguay',
        correctAnswer : 'c'
    },

    {
        question : 'What is the capital of Colombia?',
        choiceA : 'Buenos Aires',
        choiceB : 'Paramaribo',
        choiceC : 'Bogotá',
        choiceD : 'La Paz',
        correctAnswer: 'c'
    },

    {
        question : 'Budapest is the capital of...',
        choiceA : 'Romania',
        choiceB : 'Iceland',
        choiceC : 'Slovakia',
        choiceD : 'Hungary',
        correctAnswer : 'd'
    },

    {
        question : 'What is the capital of Latvia?',
        choiceA : 'Tallinn',
        choiceB : 'Riga',
        choiceC : 'Vilnius',
        choiceD : 'Oslo',
        correctAnswer : 'b'
    },

    {
        question : 'What is the capital of Belgium?',
        choiceA : 'Brussels',
        choiceB : 'Bern',
        choiceC : 'Berlin',
        choiceD : 'Bonn',
        correctAnswer : 'a'
    },

    {
        question : 'Jerusalem is the capital of...',
        choiceA : 'Egypt',
        choiceB : 'Jordan',
        choiceC : 'Israel',
        choiceD : 'Lebanon',
        correctAnswer : 'c'
    },

    {
        question : 'What is the capital of Sweden?',
        choiceA : 'Malmö',
        choiceB : 'Göteborg',
        choiceC : 'Uppsala',
        choiceD : 'Stockholm',
        correctAnswer : 'd'
    },

    {
        question : 'What is the capital of New Zealand?',
        choiceA : 'Canberra',
        choiceB : 'Wellington',
        choiceC : 'Ottawa',
        choiceD : 'Brisbane',
        correctAnswer : 'b'
    },

    {
        question : 'Canberra is the capital of...',
        choiceA : 'Monaco',
        choiceB : 'Lichtenstein',
        choiceC : 'Australia',
        choiceD : 'Croatia',
        correctAnswer : 'c'
    },

    {
        question : 'Yaoundé is the capital of...',
        choiceA : 'Mali',
        choiceB : 'Ghana',
        choiceC : 'Congo',
        choiceD : 'Cameroon',
        correctAnswer : 'd'
    },
];
let runningQuestion = 0;
let scores = document.getElementById('scores');
let score = 0;

const lastQuestion = questions.length - 1;


let question = document.getElementById('question');
let choiceA = document.getElementById('a');
let choiceB = document.getElementById('b');
let choiceC = document.getElementById('c');
let choiceD = document.getElementById('d');

/** This function gets the question from the array and deploys it in the frame.
 * These lines of code are inspired by this tutorial: https://youtu.be/49pYIMygIcU
 */
function renderQuestion() {
    
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

    scores.innerHTML = `${score}/${questions.length}`;
}

/** Checks answer
 * If the answer is correct:
 * sets the background to green
 * increments the score
 * 
 * If the answer is incorrect:
 * sets the background to red
 * 
 * enables the next question button
 */
function checkAnswer(answer) {
    let answers = document.getElementsByClassName('answers');
    
    if (answer === questions[runningQuestion].correctAnswer){
        score++;
        scores.innerHTML = `${score}/${questions.length}`;
        
       for (answer of answers) {
            answer.style.backgroundColor = "green"; 
        }
    } else {       
        scores.innerHTML = `${score}/${questions.length}`;
        for (let wrong of answers) {
            wrong.style.backgroundColor = "red";  
        }
    }
}

    nextQuestion();


/** Renders the next question and calls the results after the last */
function nextQuestion() {
    
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion(runningQuestion);
        /**put this in the readme fixed bugs big tiiiiimeeeeeee */
    } else {
        results.classList.remove('hide');
    }
}