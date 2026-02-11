const quizData = [
    {
        question : 'What is the capital of Italy?',
        a: "Venice",
        b: "Rome",
        c: "Florence",
        d: "Milan",
        correct: "b",
    },

    {
        question : 'What colours can you find on the Italian flag?',
        a: "Red, White, Green",
        b: "Blue, Yellow, Red",
        c: "Red, White, Black",
        d: "Green, Yellow, Black",
        correct: "a",
    },

    {
        question : 'Which currency is used in Italy?',
        a: "American Dollar",
        b: "Japanese Yen",
        c: "Euro",
        d: "Pound Sterling",
        correct: "c",
    },

    {
        question : 'In which century was the Italian Unification?',
        a: "17th",
        b: "18th",
        c: "19th",
        d: "20th",
        correct: "c",
    },

    {
        question : 'Who was the last king of Italy?',
        a: "Umberto II",
        b: "Vittorio Emanuele",
        c: "Umberto I",
        d: "Napoleon",
        correct: "a",
        },

    {
        question : 'What is the shape of Italy similar to?',
        a: "Book",
        b: "Hand",
        c: "Boot",
        d: "Knife",
        correct: "c",
    },

    {
        question : 'What is the official name of Italy?',
        a: "Republic of Italy",
        b: "Italian Republic",
        c: "Italy Land",
        d: "City of Italy",
        correct: "b",
    },

    {
        question : 'How many official languages are there in Italy?',
        a: "34",
        b: "2",
        c: "1",
        d: "4",
        correct: "c",
    },

    {
        question : 'What is the longest river in Italy?',
        a: "River Adige",
        b: "River Po",
        c: "River Piave",
        d: "River Tiber",
        correct: "b",
    },

    {
        question : 'Rome has only one sister city. Which one of the following?',
        a: "Madrid",
        b: "New York City",
        c: "Berlin",
        d: "Paris",
        correct: "d",
    },

    {
        question : 'In which Italian city was the pizza invented?',
        a: "Naples",
        b: "Verona",
        c: "Florence",
        d: "Rome",
        correct: "a",
    },

    {
        question : 'Which Italian dessert can be translated as "lift me up"?',
        a: "Panna Cotta",
        b: "Semifreddo",
        c: "Tiramisu",
        d: "Cannoli",
        correct: 'c',
    },

    {
        question : 'Who painted "The Last Supper"?',
        a: "Michelangelo",
        b: "Leonardo da Vinci",
        c: "Donatello",
        d: "Sandro Botticelli",
        correct: "b",
    },

    {
        question : 'In which city was Ferrero created?',
        a: "Milan",
        b: "Turin",
        c: "Verona",
        d: "Alba",
        correct: "d",
    },

    {
        question : 'What does "Calcio" mean in Italian?',
        a: "Soccer",
        b: "Tennis",
        c: "Basketball",
        d: "Hockey",
        correct: "a",
    },

    {
        question : 'Which poet wrote the "Divine Comedy"?',
        a: "Victor Hugo",
        b: "Dante Alighieri",
        c: "Pierre de Ronsard",
        d: "Shakespeare",
        correct: "b",
    },

    {
        question : 'Which Prime Minister was elected in 2001?',
        a: "Giulio Andreotti",
        b: "Giorgio Napolitano",
        c: "Silvio Berlusconi",
        d: "Sergio Mattarella",
        correct: "c",
    },

    {
        question : 'When did Italy become a republic (year)?',
        a: "2000",
        b: "1946",
        c: "1986",
        d: "1896",
        correct: "b",
    },

    {
        question : 'Who was the first emperor of Rome?',
        a: "Tiberius",
        b: "Nero",
        c: "Augustus",
        d: "Caligula",
        correct: "c",
    },

    {
        question : 'In which Italian city is "Romeo and Juliet" (Shakespeare) set?',
        a: "Rome", 
        b: "Verona",
        c: "Florence",
        d: "Alba",
        correct: "b",
    }
]

const quiz = document.getElementById('quiz')
const quizMain = document.querySelector('.quiz-main')
const quizResults = document.getElementById('quizResults')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const progressFill = document.getElementById('progressFill')
const progressText = document.getElementById('progressText')

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

    updateProgress()
}

function updateProgress() {
    const percent = ((currentQuiz + 1) / quizData.length) * 100
    progressFill.style.width = `${percent}%`
    progressText.textContent = `Question ${currentQuiz + 1} of ${quizData.length}`
}

function deselectAnswers() {
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

function getMessage(score, total) {
    const percent = Math.round((score / total) * 100)
    if (percent >= 90) return "Bellissimo! You really know Italy!"
    if (percent >= 75) return "Molto bene! Great Italian knowledge."
    if (percent >= 50) return "Non male! Keep exploring la bella Italia."
    return "Keep learning — Italy has so much to discover!"
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quizResults.querySelector('#resultsScore').textContent = `${score} / ${quizData.length}`
            quizResults.querySelector('#resultsMessage').textContent = getMessage(score, quizData.length)
            quizMain.classList.add('results-mode')
            quizResults.classList.add('visible')
        }
    }
})

document.getElementById('reloadBtn').addEventListener('click', () => {
    location.reload()
})
