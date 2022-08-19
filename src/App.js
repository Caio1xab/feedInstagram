import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Perfil from './components/Pages/Perfil/Perfil';
import Post from './components/Post/Post';
import styled, { themeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes.js';

const StyledApp = styled.div``;

function App() {
  const [theme,setTheme]= useState("dark");

  const themeToggler = () => {
    theme === "light"? setTheme("dark") : setTheme("light");
    console.log(themeToggler)
  
  };

  return (
    <themeProvider theme={theme === "light" ? "darkTheme" : "lightTheme"}>
    <GlobalStyles />
    <StyledApp>Hello World</StyledApp> <button onClick={() => themeToggler()}>Mudar tema</button>
  
    </themeProvider>
  );
}

export default App;
