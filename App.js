import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  const All = +good + +neutral + +bad;
  if (All === 0) {
    return (
      <div>
        <p>No Feedback given</p>
      </div>
    );
  } else {
    const avarage = (+good * 1 + +neutral * 0 + bad * -1) / 3;
    const positive = (good / All) * 100;
    return (
      <div>
        <table>
          <tr>Good: {good}</tr>
          <tr>Neutral: {neutral}</tr>
          <tr>Bad: {bad}</tr>
          <div>
            <tr>All: {All}</tr>
            <tr>Avarage: {avarage}</tr>
            <tr>positive: {positive}%</tr>
          </div>
        </table>
      </div>
    );
  }
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(+1);
    setGood(good + 1);
    console.log(good);
  };

  const handleNeutral = () => {
    setNeutral(+1);
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(+1);
    setBad(bad + 1);
  };

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <button onClick={handleGood}>Good</button>
        <button onClick={handleNeutral}>Neutral</button>
        <button onClick={handleBad}>Bad</button>
      </div>
      <div>
        <h1>Statistics</h1>
        <Statistics good={good} bad={bad} neutral={neutral} />
      </div>
    </div>
  );
};

export default App;
