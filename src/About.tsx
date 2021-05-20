import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Icon from './Icons/Icon';
import { IconType } from './Icons/Paths';
import { AnimWrap, Description, TitleH2 } from './Layout';
import useVisible from './useVisible';

const AboutWrap = styled.div`
    background-color: #f5f6ff;
    width: 100%;
    height: auto;
    min-height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 4rem 0;

    @media (min-width: 2800px) {
        padding: 8rem 0;
    }
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

    @media (min-width: 2800px) {
        max-width: 50%;
    }
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

    @media (min-width: 2800px) {
        width: 10rem;
        height: 10rem;

        p {
            color: rgb(0,0,0, 0.7);
            white-space: nowrap;
            font-size: 2rem;
        }
    }
`;


const DescAbout = styled(Description)`
    margin: 3rem 0;
    color: rgb(0,0,0,0.5);
    span {
        color: rgb(0,0,0,0.7);
        
    }

    @media (min-width: 2800px) {
        margin: 6rem 0 10rem 0;
    }
`;


interface Props { selected: string | null };

const About: React.FC<Props> = ({selected}: Props) => {

    const aboutRef = useRef<HTMLDivElement | null>(null);

    const isVisible = useVisible(aboutRef.current?.offsetTop);

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
        <AnimWrap isVisible={isVisible}>
            <TitleH2 color={"#667dff"}>About</TitleH2>
                <DescAbout>
                    I develop web applications using a modern stack. 
                    Focusing on <span>Clean & Intuitive Designs</span> as well as <span>Performance and Responsiveness</span> to craft a unique user experience.
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
        </AnimWrap>
      
    </AboutWrap>
  );
}

export default About;