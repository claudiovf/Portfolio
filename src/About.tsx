import React from 'react';
import styled from 'styled-components';
import Icon from './Icons/Icon';
import { IconType } from './Icons/Paths';

const AboutWrap = styled.div`
    background-color: #667dff;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 4rem 0;
`;

const StackBar = styled.div`
    width: 80%;
    max-width: 60rem;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    justify-content: space-between;
    align-items: center;
`;

const TechBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 5rem;
    height: 5rem;
    
    p {
        color: rgb(255,255,255, 0.8);
        font-family: Arial Black;
        white-space: nowrap;
    }
`;

const TitleH2 = styled.h2`
    margin: 0;
    font-size: 3rem;
    color: #fff;
    padding: 0;
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const Description = styled.div`
    text-align: center;
    font-family: Arial;
    max-width: 40rem;
    width: 60%;
    margin: 3rem 0 5rem 0;
    color: rgb(255,255,255, 0.7);
    font-size: 1.5rem;

    span {
        color: rgb(255,255,255, 1);
        
    }

    @media (max-width: 768px) {
        width: 80%;
        font-size: 1.25rem;
    }
`;


const About: React.FC = () => {

    const TechList: IconType[] = [
        "Typescript",
        "React",
        "Graphql",
        "Apollo", 
        "Redux",
        "HTML",
        "CSS",
        "NodeJS",
        "MongoDB",
    ];

  return (
    <AboutWrap>
        <TitleH2>About</TitleH2>
        <Description>
            I develop web applications using a modern tech stack. 
            Focusing on <span>Clean & Intuitive Designs</span> as well as <span>Performance and Responsiveness</span> to craft a unique experience for the user.
        </Description>
        <StackBar>
            {
                TechList.map(tech => 
                    <TechBox key={tech}>
                        <Icon color={"rgb(255,255,255, 0.8)"} iconType={tech}/>
                        <p>{tech}</p>
                    </TechBox>
                )
            }
        </StackBar>
    </AboutWrap>
  );
}

export default About;