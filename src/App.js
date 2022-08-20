import React, { useState, createContext } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Perfil from './components/Pages/Perfil/Perfil';
import Post from './components/Post/Post';

function App(){
  return (
  <div className="App">
      <Nav />
      <Post />
  </div> 
  );
}
  


export default App;
