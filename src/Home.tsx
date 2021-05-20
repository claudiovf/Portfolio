import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import useFade from './useFade';

const HomeWrap = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    max-width: 80rem;
    @media (min-width: 2800px) {
        max-width: 50%;
    }
`;

const Intro = styled.div<{ opacity: number}>`
    font-size: 4rem;
    color: #2f2f2f;
    padding: 4rem;
    max-width: 60rem;
    opacity: ${props => 1 - props.opacity};

    @media (max-width: 768px) {
        font-size: 2rem;
        padding: 2rem;
    }
    @media (min-width: 2800px) {
        font-size: 10rem;
        max-width: 100%;
    }
`;

const Name = styled.span`
    color: #667dff;
`;

interface Props { selected: string | null};

const Home: React.FC<Props> = ({selected}: Props) => {
    const homeRef = useRef<HTMLDivElement | null>(null);
    const opacity =  useFade(homeRef.current?.offsetHeight);
  
    useEffect(() => {
        if (selected === "Home" && homeRef && homeRef.current) {
            homeRef.current.scrollIntoView({ behavior: "smooth", block: "start"});
        }
    }, [selected])

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
