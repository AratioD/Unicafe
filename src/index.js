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
        <button onClick={() => this.setState({ neutral: this.state.neutral + 1, buttonclick: this.state.buttonclick + 1, ButtonNeutral })}>
          neutraali
        </button>
        <button onClick={() => this.setState({ bad: this.state.bad + 1, buttonclick: this.state.buttonclick + 1, averageSum: this.state.averageSum - 1, ButtonBad })}>
          huono
        </button>

        <h1>{this.state.otherTopic}</h1>
        <ButtonGood buttonValueGood={this.state.good} />
        <ButtonNeutral buttonValueNeutral={this.state.neutral} />
        <ButtonBad buttonValueBad={this.state.bad} />
        <StatisticsAvg statisticsAvg={(this.state.averageSum / this.state.buttonclick).toFixed(1)} />
        <StatisticsPositivs statisticsPositivs={((this.state.good / this.state.buttonclick) * 100).toFixed(1)} />
      </div>
    )
  }
}

const ButtonGood = (props) => {
  // console.log("buttongood value")
  return (
    <div>
      hyvä {props.buttonValueGood}
    </div>
  )
}

const ButtonNeutral = (props) => {
  // console.log("buttonneutral log")
  return (
    <div>
      neutraali {props.buttonValueNeutral}
    </div>
  )
}

const ButtonBad = (props) => {
  // console.log("buttonneutral log")
  return (
    <div>
      huono {props.buttonValueBad}
    </div>
  )
}

const StatisticsAvg = (props) => {
  // console.log("buttonneutral log")
  return (
    <div>
      keskiarvo {props.statisticsAvg}
    </div>
  )
}

const StatisticsPositivs = (props) => {
  // console.log("buttonneutral log")
  return (
    <div>
      keskiarvo {props.statisticsPositivs} %
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)