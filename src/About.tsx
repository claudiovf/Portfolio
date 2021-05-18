import React from 'react';
import styled from 'styled-components';
import Icon from './Icons/Icon';
import { IconType } from './Icons/Paths';

const AboutWrap = styled.div`
    //background-color: #f2f2f2;
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
        color: #afafaf;
        font-family: Arial Black;
        white-space: nowrap;
    }
`;

const TitleH2 = styled.h2`
    margin: 0 0 3rem 0;
    font-size: 3rem;
    color: #2f2f2f;
    padding: 0 0 0.5rem 0;
    border-bottom: 0.5rem solid #667dff;
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
    ];

  return (
    <AboutWrap>
        <TitleH2>About</TitleH2>
        <StackBar>
            {
                TechList.map(tech => 
                    <TechBox key={tech}>
                        <Icon color={"#afafaf"} iconType={tech}/>
                        <p>{tech}</p>
                    </TechBox>
                )
            }
        </StackBar>
    </AboutWrap>
  );
}

export default About;