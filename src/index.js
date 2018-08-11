import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      bad: 0,
      badValue: -1,
      neutral: 0,
      neutralValue: 0,
      good: 0,
      goodValue: 1,
      buttonclick: 0,
      averageSum: 0,
      positivePercentage: 0,
      // name variables
      topic: "anna palautetta",
      otherTopic: "statistiikka",
      nameBad: "huono",
      nameGood: "hyvä",
      nameNeutral: "neutraali",
      nameAverage: "keskiarvo",
      namePositive: "positiivisia"
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.topic}</h1>
        <button onClick={() => this.setState({ good: this.state.good + 1, buttonclick: this.state.buttonclick + 1, averageSum: this.state.averageSum + 1 })}>
          {this.state.nameGood}
        </button>
        <button onClick={() => this.setState({ neutral: this.state.neutral + 1, buttonclick: this.state.buttonclick + 1 })}>
          {this.state.nameNeutral}
        </button>
        <button onClick={() => this.setState({ bad: this.state.bad + 1, buttonclick: this.state.buttonclick + 1, averageSum: this.state.averageSum - 1 })}>
          {this.state.nameBad}
        </button>

        <h1>{this.state.otherTopic}</h1>

        <GeneralComponent
          //names
          nameGood={this.state.nameGood}
          nameNeutral={this.state.nameNeutral}
          nameBad={this.state.nameBad} u
          nameAverage={this.state.nameAverage}
          namePositive={this.state.namePositive}
          //values
          buttonValueGood={this.state.good}
          buttonValueBad={this.state.bad}
          buttonValueNeutral={this.state.neutral}
          //formulas to calculate
          noFeedback={this.state.good + this.state.neutral + this.state.bad}
          statisticsAvg={(this.state.averageSum / this.state.buttonclick).toFixed(1)}
          statisticsPositivs={((this.state.good / this.state.buttonclick) * 100).toFixed(1)} />
      </div>
    )
  }
}

const GeneralComponent = (props) => {
  if (props.noFeedback === 0) {
    return (
      <div>
        ei yhtään palautetta annettu
      </div>
    )
  } else {
    return (
      <table>
        <thead>
          <tr>
            <td> {props.nameGood} {props.buttonValueGood}</td>
          </tr>
          <tr>
            <td>{props.nameNeutral} {props.buttonValueNeutral}</td>
          </tr>
          <tr>
            <td>{props.nameBad} {props.buttonValueBad}</td>
          </tr>
          <tr>
            <td>{props.nameAverage} {props.statisticsAvg}</td>
          </tr>
          <tr>
            <td>{props.namePositive} {props.statisticsPositivs} %</td>
          </tr>
        </thead>
      </table>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)