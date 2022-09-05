import { useState } from "react";
import "./App.css";

const getMaxIndex = (array) => {
  let max = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[max]) {
      max = i;
    }
  }
  return max;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  return (
    <div className="container">
      <div className="box gradient">
        <span className="upvoted">⭐ Most upvoted</span>
        <p className="anecdote">{anecdotes[getMaxIndex(votes)]}</p>
      </div>
      <div className="box">
        <p className="anecdote">{anecdotes[selected]}</p>
        <span className="votes">
          Has <span className="bold">{votes[selected]}</span> vote
          {votes[selected] !== 1 && "s"}
        </span>
        <div className="wrapper">
          <button
            onClick={() =>
              setVotes([
                ...votes.slice(0, selected),
                votes[selected] + 1,
                ...votes.slice(selected + 1),
              ])
            }
          >
            Vote
          </button>
          <span className="spacing" />
          <button
            onClick={() =>
              setSelected(Math.floor(Math.random() * anecdotes.length))
            }
          >
            Next anecdote
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
