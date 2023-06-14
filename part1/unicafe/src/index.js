import React, { useState } from 'react'
import { createRoot } from 'react-dom';

const Header = (props) => {

  return (
    <h1>{props.name}</h1>
    )
}

const Button = (props) => {
  return (
 <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  if (text === 'positive') {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}%</td>
      </tr>
      )
  }
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )

}

const Statistics = ({good, neutral, bad}) => {
  const all = good + bad +neutral;
  const average = ((all)/3);
  const positive = (good*100/all);
  if (all === 0) {
    return (
      <div>
        <p></p>
        No feedback given
      </div>
    )
  }

  return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value ={good} />
            <StatisticLine text="neutral" value ={neutral} />
            <StatisticLine text="bad" value ={bad} />
            <StatisticLine text="all" value ={all} />
            <StatisticLine text="average" value ={average} />
            <StatisticLine text="positive" value ={positive} />
          </tbody>
        </table>
      </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (good) => setGood(good)
  const setToNeutral = (neutral) => setNeutral(neutral)
  const setToBad = (bad) => setBad(bad)

  return (
    <div>
      <Header name = "Give feedback"/>
      <Button handleClick={() =>setToGood(good + 1)} text="good" />
      <Button handleClick={() =>setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() =>setToBad(bad + 1)} text="bad" />
      <Header name = "Statistics"/>
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);