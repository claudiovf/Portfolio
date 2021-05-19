import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Icon from './Icons/Icon';
import { IconType } from './Icons/Paths';
import { Description, TitleH2 } from './Layout';

const AboutWrap = styled.div`
    background-color: #f5f6ff;
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
        color: rgb(0,0,0, 0.7);
        white-space: nowrap;
    }
`;


const DescAbout = styled(Description)`
    color: rgb(0,0,0,0.5);
    span {
        color: rgb(0,0,0,0.7);
        
    }
`;

interface Props { selected: string | null};

const About: React.FC<Props> = ({selected}: Props) => {

    const aboutRef = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
        if (selected === "About" && aboutRef && aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start"});
        }
    }, [selected])

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
    <AboutWrap ref={aboutRef}>
        <TitleH2 color={"#667dff"}>About</TitleH2>
        <DescAbout>
            I develop web applications using a modern tech stack. 
            Focusing on <span>Clean & Intuitive Designs</span> as well as <span>Performance and Responsiveness</span> to craft a unique experience for the user.
        </DescAbout>
        <StackBar>
            {
                TechList.map(tech => 
                    <TechBox key={tech}>
                        <Icon color={"#667dff"} iconType={tech}/>
                        <p>{tech}</p>
                    </TechBox>
                )
            }
        </StackBar>
    </AboutWrap>
  );
}

export default About;