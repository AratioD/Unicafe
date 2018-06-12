import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      bad: 0,
      badValue: -1,
      neutral: 0,
      neutralValue: 0,
      good: 0,
      goodValue: 1,
      buttonclick: 0,
      topic: "anna palautetta",
      otherTopic: "statistiikka",
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.topic}</h1>
        <button onClick={() => this.setState({ good: this.state.good + 1, buttonclick: this.state.buttonclick + 1 })}>
          hyvä
        </button>
        <button onClick={() => this.setState({ neutral: this.state.neutral + 1, buttonclick: this.state.buttonclick + 1 })}>
          neutraali
        </button>
        <button onClick={() => this.setState({ bad: this.state.bad + 1, buttonclick: this.state.buttonclick + 1 })}>
          huono
        </button>


        <h1>{this.state.otherTopic}</h1>
        <div>hyvä {this.state.good}</div>
        <div>neutraali {this.state.neutral}</div>
        <div>huono {this.state.bad}</div>
        <div>keskiarvo {(this.state.badValue*this.state.bad) +
         (this.state.neutralValue*this.state.neutral) +
         (this.state.goodValue*this.state.good)
          / this.state.buttonclick}</div>

      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)