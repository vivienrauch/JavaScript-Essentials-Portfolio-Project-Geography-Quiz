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
/* Adding variables */

/*const questions = [
    {
        question : 'What is the capital of Malawi?',
        choiceA : 'Nairobi',
        choiceB : 'Maputo',
        choiceC : 'Lilongwe',
        choiceD : 'Lusaka',
        correctAnswer: 'd'
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
        chocieB : 'Vietnam',
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
        chocieA : 'Lima',
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

let question = document.addElementById('question');
let choiceA = document.getElementById('choiceA');
let choiceB = document.getElementById('choiceB');
let choiceC = document.getElementById('choiceC');
let choiceD = document.getElementById('choiceD');
let scores = document.getElementById('scores');
let quiz = document.getElementById('game-frame');
let username = document.getElementById('username');
let rules = document.getElementById('rules-panel');
let results = document.getElementById('results-panel');*/
    
/*rules.style.visibility = 'visible';

let lastQuestion = questions.length-1;
let runningQ = 0;*/

 document.addEventListener('DOMContentLoaded', function() {
    let startButton = document.getElementsByClassName('start-game');
    let rules = document.getElementById('rules-panel');
    let results = document.getElementById('results-panel');

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
        })
    }



/* Renders questions */

/*function renderQuestion() {

    rules.style.display = 'none';
    let quiz = document.getElementById('game-frame');
    quiz.classList.remove('hide');

    const questions = [
        {
            question : 'What is the capital of Malawi?',
            choiceA : 'Nairobi',
            choiceB : 'Maputo',
            choiceC : 'Lilongwe',
            choiceD : 'Lusaka',
            correctAnswer: 'd'
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
            chocieB : 'Vietnam',
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
            chocieA : 'Lima',
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
    
    let question = document.addElementById('question');
    let choiceA = document.getElementById('choiceA');
    let choiceB = document.getElementById('choiceB');
    let choiceC = document.getElementById('choiceC');
    let choiceD = document.getElementById('choiceD');
        
    let runningQ = 0;
    let q = questions[runningQ];

    for (i = 0; i <= questions.length; i++) {
    question.innerHTML = '<p>' + q.question[i] + '</p>';
    choiceA.innerHTML = q.choiceA[i];
    choiceB.innerHTML = q.choiceB[i];
    choiceC.innerHTML = q.choiceC[i];
    choiceD.innerHTML = q.choiceD[i];
    }
};*/


function helloPlayer () {

    if (username.value == "") {
        alert('Please enter your name to start the game!');
        return false;

    } else {
        let userLogin = document.getElementById('user-login');
        userLogin.style.display= 'none';
        rules.style.display = 'none';
        let quiz = document.getElementById('game-frame');
        quiz.classList.remove('hide');

        let welcomeMessage = document.getElementById('hidden-welcome');
        welcomeMessage.innerHTML = `Welcome ${username.value} ! Let's play!`;
        startGame();

    }
}
 }) 


function startGame() {

    const questions = [
        {
            question : 'What is the capital of Malawi?',
            choiceA : 'Nairobi',
            choiceB : 'Maputo',
            choiceC : 'Lilongwe',
            choiceD : 'Lusaka',
            correctAnswer: 'd'
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
            chocieB : 'Vietnam',
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
            chocieA : 'Lima',
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
    
    let question = document.addElementById('question');
    let choiceA = document.getElementById('choiceA');
    let choiceB = document.getElementById('choiceB');
    let choiceC = document.getElementById('choiceC');
    let choiceD = document.getElementById('choiceD');

    let runningQ = 0;
    let q = questions[runningQ];

    question.innerHTML = questions[runningQ].question[0];
    choiceA.innerHTML = questions[runningQ].choiceA[0];
    choiceB.innerHTML = questions[runningQ].choiceB[0];
    choiceC.innerHTML = questions[runningQ].choiceC[0];
    choiceD.innerHTML = questions[runningQ].choiceD[0];
}

/** Greets the player and starts the game when they enter a usernamename.
 * Gives an alert if no name is entered and not going to proceed to the game.*/



function nextQuestion() {
    if (runningQ <= lastQuestion) {
        runningQ++;
    } else {
        nextButton.style.display = 'none';
    }
}

function checkAnswer() {

}

function correctAnswer() {
    
}