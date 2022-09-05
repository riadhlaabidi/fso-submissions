import { useState } from "react";

const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

const StatisticLine = ({ children, value }) => {
  return (
    <tr>
      <td>{children}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  return (
    <div>
      <h2>Statistics</h2>
      {total ? (
        <table>
          <tbody>
            <StatisticLine value={good}>Good: </StatisticLine>
            <StatisticLine value={neutral}>Neutral: </StatisticLine>
            <StatisticLine value={bad}>Bad: </StatisticLine>
            <StatisticLine value={total}>Total: </StatisticLine>
            <StatisticLine value={average}>Average: </StatisticLine>
            <StatisticLine value={`${positive} %`}>Positive: </StatisticLine>
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGood(good + 1)}>Good</Button>
      <Button onClick={() => setNeutral(neutral + 1)}>Neutral</Button>
      <Button onClick={() => setBad(bad + 1)}>Bad</Button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
