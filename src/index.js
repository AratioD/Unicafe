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
      averageSum: 0,
      positivePercentage: 0,
      topic: "anna palautetta",
      otherTopic: "statistiikka",
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.topic}</h1>
        <button onClick={() => this.setState({ good: this.state.good + 1, buttonclick: this.state.buttonclick + 1, averageSum: this.state.averageSum + 1, ButtonGood })}>
          hyvä
        </button>
        <button onClick={() => this.setState({ neutral: this.state.neutral + 1, buttonclick: this.state.buttonclick + 1 })}>
          neutraali
        </button>
        <button onClick={() => this.setState({ bad: this.state.bad + 1, buttonclick: this.state.buttonclick + 1, averageSum: this.state.averageSum - 1 })}>
          huono
        </button>

        {/* <button onClick={ButtonGood}>testi jee</button>

        <button onClick={() => this.setState({ good: this.state.good + 1, buttonclick: this.state.buttonclick + 1, averageSum: this.state.averageSum + 1, ButtonGood })}>
          testststst
        </button> */}


        <h1>{this.state.otherTopic}</h1>
        <div>hyvä {this.state.good}</div>
        <div>neutraali {this.state.neutral}</div>
        <div>huono {this.state.bad}</div>
        <div>keskiarvo {(this.state.averageSum / this.state.buttonclick).toFixed(1)} </div>
        <div>positiivisia {((this.state.good / this.state.buttonclick) * 100).toFixed(1)} %</div>
        <ButtonGood topic={this.state.good} />
        
      </div>
    )
  }
}

const ButtonGood = (props) => {
  console.log("sdfsdxxx2")
  return (
    <div>
      Hyvä {props.topic}
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)