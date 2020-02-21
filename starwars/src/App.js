import React, {useState, useEffect} from 'react';
import './App.css';
// import CharacterList from './components/CharacterPage/CharacterList';
import CharacterCard from './components/CharacterPage/CharacterCard';

import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  let [characters, setCharacters] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.co/api/people/').then(response => {
      console.log(response.data.results);
      setCharacters(response.data.results);
    })
    .catch(error => {
      console.log("There's an error and it's: ", error)
    });

  }, []);

 
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {characters.map( char => {
    return(
    <CharacterCard key={char.url} char={char}/> 
    );
    
  })};
    </div>
  );
}

export default App;
