let questions = [
    {
        question: 'What is the capital of Malawi?',
        answers: {

            a : 'Nairobi',
            b : 'Maputo',
            c : 'Lilongwe',
            d : 'Lusaka'
        },
        
        correctAnswer: 'd'
    },

    {
        question: 'Manila is the capital of...',
        answers: {

            a : 'Philippines',
            b : 'Afghanistan',
            c : 'Andorra',
            d : 'Mozambique'
        },

        correctAnswer: 'a'
    },

    {
        question: 'Vientiane is the capital of...',
        answers: {

            a : 'Thailand',
            b : 'Vietnam',
            c : 'Laos',
            d : 'Taiwan'
        },

        correctAnswer: 'c'
    },

    {
        question: 'What is the capital of Albania?',
        answers: {

            a : 'Bishkek',
            b : 'Sarajevo',
            c : 'Minsk',
            d : 'Tirana'
        },

        correctAnswer: 'd'
    },

    {
        question: 'What is the capital of Chile?',
        answers: {

            a : 'Lima',
            b : 'Santiago',
            c : 'Caracas',
            d : 'Quito'
        },

        answer: 'b'
    },

    {
        question: 'Montevideo is the capital of...',
        answers: {

            a : 'Cuba',
            b : 'Hawaii',
            c : 'Uruguay',
            d : 'Paraguay'
        },

        correctAnswer: 'c'
    },

    {
        question: 'What is the capital of Colombia?',
        answers: {

            a : 'Buenos Aires',
            b : 'Paramaribo',
            c : 'Bogotá',
            d : 'La Paz'
        },
        
        correctAnswer: 'c'
    },

    {
        question: 'Budapest is the capital of...',
        answers: {

            a : 'Romania',
            b : 'Iceland',
            c : 'Slovakia',
            d : 'Hungary'
        },

        correctAnswer: 'd'
    },

    {
        question: 'What is the capital of Latvia?',
        answers: {

            a : 'Tallinn',
            b : 'Riga',
            c : 'Vilnius',
            d : 'Oslo'
        },

        correctAnswer: 'b'
    },

    {
        question: 'What is the capital of Belgium?',
        answers: {

            a : 'Brussels',
            b : 'Bern',
            c : 'Berlin',
            d : 'Bonn'
        },

        correctAnswer: 'a'
    },

    {
        question: 'Jerusalem is the capital of...',
        answers: {

            a : 'Egypt',
            b : 'Jordan',
            c : 'Israel',
            d : 'Lebanon'
        },

        correctAnswer: 'c'
    },

    {
        question: 'What is the capital of Sweden?',
        answers: {

            a : 'Malmö',
            b : 'Göteborg',
            c : 'Uppsala',
            d : 'Stockholm'
        },

        correctAnswer: 'd'
    },

    {
        question: 'What is the capital of New Zealand?',
        answers: {

            a : 'Canberra',
            b : 'Wellington',
            c : 'Ottawa',
            d : 'Brisbane'
        },

        correctAnswer: 'b'
    },

    {
        question: 'Canberra is the capital of...',
        answers: {

            a : 'Monaco',
            b : 'Lichtenstein',
            c : 'Australia',
            d : 'Croatia'
        },

        correctAnswer: 'c'
    },

    {
        question: 'Yaoundé is the capital of...',
        answers: {

            a : 'Mali',
            b : 'Ghana',
            c : 'Congo',
            d : 'Cameroon'
        },

        correctAnswer: 'd'
    },
]



/** functions:
 * say hello to the player when they enter their name + press enter or click the start button
 * show only one question at a time
 * highlight the background with green if it's correct and with red if it's incorrect 
 * add a next question icon
 * increment the score if the answer is correct
 * logo resets game and scores
 * alert/pop-up window at the end with the total scores + message
 */




/*function showQuestions () {

    let output = [];
    let answers;

    for (let i = 0; i < questions.length; i++) {
        answers = [];

        for (letter in questions[i].answers){

        }
    }

}*/
