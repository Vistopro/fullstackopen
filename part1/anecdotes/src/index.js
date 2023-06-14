import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const Header = (props) => {
  return (
    <h2>{props.text}</h2>
  )
}
const Text = (props) => {
  return (
  <div>
    <p>{props.text}</p>
    <p>has {props.votes} votes </p>
    </div>
  )
}

const Winner = (props) => {
  const highestVoteCount = Math.max(...props.allVotes)
  const winnerIndex = props.allVotes.indexOf(highestVoteCount)
  const winner = props.anecdotes[winnerIndex]
  if (highestVoteCount === 0) {
    return (
      <p>No votes yet</p>
    )
  }

  return (
    <div>
      <p>{winner}</p>
      <p>has {highestVoteCount} votes</p>
    </div>
  )
}

const Button = (props) => {
  return (
 <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(getRandomIndex());
  const [allVotes, setAllVotes] = useState(Array(6).fill(0))

  function getRandomIndex() {
    const min = 0;
    const max = props.anecdotes.length - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
  const handleVoteClick = () => {
    const newAllVotes = [...allVotes]
    newAllVotes[selected] += 1
    setAllVotes(newAllVotes)
    }

  const setToRandom = () => setSelected(getRandomIndex)
  
  return (
    <div>
      <Header text="Anecdote of the day"/>
      <Text text={props.anecdotes[selected]} votes={allVotes[selected]}/>
      <Button handleClick = {setToRandom} text="next anecdote"/>
      <Button handleClick = {handleVoteClick} text="vote"/>

      <Header text="Anecdote with most votes"/>
      <Winner allVotes={allVotes} anecdotes={anecdotes}/>
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

createRoot(document.getElementById('root')).render(
  <App anecdotes={anecdotes} />
);
