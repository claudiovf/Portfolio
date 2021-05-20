import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Icon from './Icons/Icon';
import { AnimWrap, TitleH2 } from './Layout';
import useVisible from './useVisible';

const AboutWrap = styled.div`
    background-color: #1f1f1f;
    width: 100%;
    height: auto;
    min-height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 4rem 0;
    overflow: hidden;
`;

const ContactBar = styled.div`
    width: 80%;
    max-width: 60rem;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
`;

const ContactIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 5rem;
    height: 5rem;
    cursor: pointer;
    transition: all 0.2s linear;
    
    p {
        color: rgb(255,255,255, 0.7);
        white-space: nowrap;
    }

    div:first-child {
        &:hover {
            transform: scale(1.01);
            border-radius: 0.3rem;
            background-color: rgb(255, 255, 255, 0.1);
        }
    }
    
`;


const Description = styled.div`
    text-align: center;
    max-width: 40rem;
    width: 60%;
    margin: 3rem 0 5rem 0;
    color: rgb(255,255,255, 0.9);
    font-size: 1.5rem;
    line-height: 2.5rem;

    @media (max-width: 768px) {
        width: 80%;
        font-size: 1.25rem;
    }
`;

interface Props { selected: string | null};

const Contact: React.FC<Props> = ({ selected }: Props) => {

    const contactRef = useRef<HTMLDivElement | null>(null);
    const isVisible = useVisible(contactRef.current?.offsetTop);
  
    useEffect(() => {
        if (selected === "Contact" && contactRef && contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: "smooth", block: "start"});
        }
    }, [selected])

  return (
    <AboutWrap ref={contactRef}>
        <AnimWrap isVisible={isVisible}>
            <TitleH2 color={"#667dff"}>Contact</TitleH2>
            <Description>
                Have a question or would like to work together? 
                <br />Say hello!
            </Description>
            <ContactBar>

                <ContactIcon><a href="mailto:someone@example.com">
                    <div><Icon color={"#667dff"} iconType={"Email"}/></div></a>
                    <p>Email</p>
                </ContactIcon>
                <ContactIcon>
                    <div onClick={() => window.open('https://www.linkedin.com/in/claudio-varela-09b18a')}>
                        <Icon color={"#667dff"} iconType={"Linkedin"}/>
                    </div>
                    <p>Linkedin</p>
                </ContactIcon>
                <ContactIcon>
                    <div onClick={() => window.open('https://github.com/claudiovf')}>
                        <Icon color={"#667dff"} iconType={"Github"}/>
                    </div>
                    <p>Github</p>
                </ContactIcon>
            </ContactBar>
        </AnimWrap>
    </AboutWrap>
  );
}

export default Contact;