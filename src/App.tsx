import QuestionCard from './components/QuestionCard'
const React = require('react')

const App = () => {

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
