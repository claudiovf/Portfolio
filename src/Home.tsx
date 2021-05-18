import React, { useRef } from 'react';
import styled from 'styled-components';
import useFade from './useFade';

const HomeWrap = styled.div`
    font-family: Arial Black;
    font-size: 4rem;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

`;

const Intro = styled.div<{ opacity: number}>`
    color: #2f2f2f;
    padding: 4rem;
    max-width: 60rem;
    opacity: ${props => 1 - props.opacity};
`;

const Name = styled.span`
    color: #667dff;
`;

const Home: React.FC = () => {
    const homeRef = useRef<HTMLDivElement | null>(null);
    const opacity =  useFade(homeRef.current?.offsetHeight);
  

  return (
    <HomeWrap ref={homeRef}>
        <Intro opacity={opacity}>
            Hi!
            <br /> I'm <Name>Claudio</Name>.
            <br /> Web Developer based in Melbourne, Australia.
        </Intro>
    </HomeWrap>
  );
}

export default Home;
