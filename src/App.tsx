import React  from 'react';
import styled from 'styled-components';
import About from './About';
import Home from './Home';
import Projects from './Ref1Front';

const AppContainer= styled.div`
  width: 100vw;
  //background-color: tomato;
  display: flex;
  flex-direction: column;
  justify-content; flex-start;
  align-items: center;

`;
const Wrap = styled.div`
  width: 100%;
  max-width: 80rem;
  //background-color: teal;
`;

const App: React.FC = () => {

  
  return (
    <AppContainer>
      <Wrap>
        <Home />
        <About />
        <Projects />
      </Wrap>
    </AppContainer>
  );
}

export default App;
