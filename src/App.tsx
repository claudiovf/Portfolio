import React, { useState }  from 'react';
import styled from 'styled-components';
import About from './About';
import Contact from './Contact';
import Header from './Header';
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
  const [ selected, setSelected ] = useState<string | null>(null);

  const handleSelection = (selection: string | null) => {
    setSelected(selection);
  };

  return (
    <AppContainer>
        <Header handleSelection={handleSelection} />
        <Home selected={selected}/>
        <About selected={selected}/>
        <Projects selected={selected}/>
        <Contact selected={selected}/>
    </AppContainer>
  );
}

export default App;
