import './App.css'
import './InputBox.css'
import Card from "./components/Card.jsx"



function App() {

  return (
    <>
      <div className="intro-container">
        <h1>Guess the Flag</h1>
        <h2>Are you good at identifying different flags? I didn't think so.</h2>
        <h3>Test your knowledge here!</h3>
      </div>

      <Card/>
    </>
  )
}

export default App
