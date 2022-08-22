import React, { useState, createContext } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Perfil from './components/Pages/Perfil/Perfil';
import Post from './components/Post/Post';

function App(){
  const [darkMode, setDarkMode] = useState(false);

  return (
  <div className="App" style={{backgroundColor:darkMode?"#222":"white"}}>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} /> 
      <Post />
  </div> 
  );
}
  


export default App;
