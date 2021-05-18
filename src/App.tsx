import React  from 'react';
import styled from 'styled-components';
import About from './About';
import Home from './Home';
import Projects from './Projects';

const AppContainer= styled.div`
  max-width: 100vw;
  //background-color: tomato;
  display: flex;
  flex-direction: column;
  justify-content; flex-start;
  align-items: center;

`;

const App: React.FC = () => {

  
  return (
    <AppContainer>
        <Home />
        <About />
        <Projects />
    </AppContainer>
  );
}

export default App;
