import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      bad: 1,
      neutral: 1,
      good: 1,
      topic: "anna palautetta",
      otherTopic: "statistiikka",
    }

  }

  render() {
    return (
      <div>
        <h1>{this.state.topic}</h1>
        <button onClick={() => this.setState({ good: this.state.good + 1 })}>
          hyvä
          </button>
        <button onClick={() => this.setState({ neutral: this.state.neutral + 1 })}>
          neutraali
          </button>
        <button onClick={() => this.setState({ bad: this.state.bad + 1 })}>
          huono
          </button>


        <h1>{this.state.otherTopic}</h1>
        <div>hyvä {this.state.good}</div>
        <div>neutraali {this.state.neutral}</div>
        <div>huono {this.state.bad}</div>

      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)