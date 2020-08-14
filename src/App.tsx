import QuestionCard from './components/QuestionCard'
import React, {useState} from 'react'
import { fetchQuizQuestions, Difficulty, QuestionState } from './API'

export type AnswerObject = {
  question: string,
  answer: string,
  correct: boolean,
  correctAnswer: string
}

const TOTAL_QUESTIONS = 10

const App = () => {

  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  console.log(questions)

  const startQuiz = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.MEDIUM
    )
    
    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver){
      // get users answer
      const answer = e.currentTarget.value

      // check answer against correct answer
      const correct = questions[number].correct_answer === answer

      // add score if answer is correct
      if(correct){
        setScore(prev => prev + 1)
      }

      // save answer in userAnswers array
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      }
      setUserAnswers(prev => [...prev, answerObject])
    }
  }

  const nextQuestion = () => {
    // Next question if not last question
    const nextQuestion = number + 1

    if(nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
  }

  return (
    <div>
      <div className="App">
        <h1>Sports Quiz</h1>

        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button 
          className="start"
          onClick={startQuiz}>
            Start
        </button>
        ): null}

        {!gameOver ? (<p className="score">Score:</p>): null}

        { loading ? (<p>Loading Questions...</p>): null} {/** Add a spinner */}

      </div>
      <div>

      {!loading && !gameOver && (
          <QuestionCard
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
      )}

      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
          <button 
            className="next"
            onClick={nextQuestion}>
            Next Question
          </button>
      ): null}

      </div> 
    </div>
  )
}

export default App
