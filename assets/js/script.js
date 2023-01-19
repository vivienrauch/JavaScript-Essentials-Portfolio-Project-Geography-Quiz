let question = document.getElementById('question');
let answers = Array.from(document.getElementsByClassName('answer-text'));
let scores = document.getElementById('scores');

let currentQuestion = {};
let acceptAnswer = true;
let score = 0;
let questionCount = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'What is the capital of Malawi?',
        answer1 : 'Nairobi',
        answer2 : 'Maputo',
        answer3 : 'Lilongwe',
        answer4 : 'Lusaka',
        answer: 'Lilongwe',
    },
    {
        question: 'Manila is the capital of...',
        answer1 : 'Philippines',
        answer2 : 'Afghanistan',
        answer3 : 'Andorra',
        answer4 : 'Mozambique',
        answer: 'Philippines',
    },
    {
        question: 'Vientiane is the capital of...',
        answer1 : 'Thailand',
        answer2 : 'Vietnam',
        answer3 : 'Laos',
        answer4 : 'Taiwan',
        answer: 'Laos',
    },
    {
        question: 'What is the capital of Albania?',
        answer1 : 'Bishkek',
        answer2 : 'Sarajevo',
        answer3 : 'Minsk',
        answer4 : 'Tirana',
        answer: 'Tirana',
    },
    {
        question: 'What is the capital of Chile?',
        answer1 : 'Lima',
        answer2 : 'Santiago',
        answer3 : 'Caracas',
        answer4 : 'Quito',
        answer: 'Santiago',
    },
    {
        question: 'Montevideo is the capital of...',
        answer1 : 'Cuba',
        answer2 : 'Hawaii',
        answer3 : 'Uruguay',
        answer4 : 'Paraguay',
        answer: 'Uruguay',
    },
    {
        question: 'What is the capital of Colombia?',
        answer1 : 'Buenos Aires',
        answer2 : 'Paramaribo',
        answer3 : 'Bogotá',
        answer4 : 'La Paz',
        answer: 'Bogotá',
    },
    {
        question: 'Budapest is the capital of...',
        answer1 : 'Romania',
        answer2 : 'Iceland',
        answer3 : 'Slovakia',
        answer4 : 'Hungary',
        answer: 'Hungary',
    },
    {
        question: 'What is the capital of Latvia?',
        answer1 : 'Tallinn',
        answer2 : 'Riga',
        answer3 : 'Vilnius',
        answer4 : 'Oslo',
        answer: 'Riga',
    },
    {
        question: 'What is the capital of Belgium?',
        answer1 : 'Brussels',
        answer2 : 'Bern',
        answer3 : 'Berlin',
        answer4 : 'Bonn',
        answer: 'Brussels',
    },
    {
        question: 'Jerusalem is the capital of...',
        answer1 : 'Egypt',
        answer2 : 'Jordan',
        answer3 : 'Israel',
        answer4 : 'Lebanon',
        answer: 'Israel',
    },
    {
        question: 'What is the capital of Sweden?',
        answer1 : 'Malmö',
        answer2 : 'Göteborg',
        answer3 : 'Uppsala',
        answer4 : 'Stockholm',
        answer: 'Stockholm',
    },
    {
        question: 'What is the capital of New Zealand?',
        answer1 : 'Canberra',
        answer2 : 'Wellington',
        answer3 : 'Ottawa',
        answer4 : 'Brisbane',
        answer: 'Wellington',
    },
    {
        question: 'Canberra is the capital of...',
        answer1 : 'Monaco',
        answer2 : 'Lichtenstein',
        answer3 : 'Australia',
        answer4 : 'Croatia',
        answer: 'Australia',
    },
    {
        question: 'Yaoundé is the capital of...',
        answer1 : 'Mali',
        answer2 : 'Ghana',
        answer3 : 'Congo',
        answer4 : 'Cameroon',
        answer: 'Cameroon',
    },
]
