import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [voteData, setVoteData] = useState(
    Array.from({ length: anecdotes.length }, () => ({ votes: 0 }))
  );

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * 8));
    console.log(selected);
  };

  const handleVoteUp = () => {
    const updatedVoteData = [...voteData];
    updatedVoteData[selected].votes += 1;
    setVoteData(updatedVoteData);
  };

  const getMostLikedQuote = () => {
    let mostLikedIndex = 0;
    for (let i = 1; i < voteData.length; i++) {
      if (voteData[i].votes > voteData[mostLikedIndex].votes) {
        mostLikedIndex = i;
      }
    }
    return mostLikedIndex;
  };

  const mostLikedIndex = getMostLikedQuote();

  return (
    <div>
      <div>
        <h3>Anecdote of the day</h3>
        <p>{anecdotes[selected]}</p>
        <button onClick={handleClick}>Next anecdote</button>
        <button onClick={handleVoteUp}>Vote Up</button>
      </div>
      <div>
        <h3>Most Liked Anecdote</h3>
        <p>{anecdotes[mostLikedIndex]}</p>
        <p>Votes: {voteData[mostLikedIndex].votes}</p>
      </div>
    </div>
  );
};

export default App;
