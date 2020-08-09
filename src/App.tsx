import QuestionCard from './components/QuestionCard'
import React, {useState} from 'react'

const App = () => {

  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  const startQuiz = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div>
      <div className="App">
        <h1>Sports Quiz</h1>
        <button 
          className="start"
          onClick={startQuiz}>
            Start
        </button>
        <p className="score">Score:</p>
        <p>Loading Questions...</p> {/** Add a Spinner */}
      </div>
      <QuestionCard />
      <div>
        <button 
          className="next"
          onClick={nextQuestion}>
          Next Question
        </button>
      </div> 
    </div>
  )
}

export default App
