import React from 'react';
import styled from 'styled-components';
import { ProjectWrap } from './Layout';

const TitleH2 = styled.h2`
    margin: 0;
    font-size: 3rem;
    color: #2f2f2f;
    padding: 0;
    @media (max-width: 768px) {
      font-size: 2rem;
  }
`;
const TitleH4 = styled.h4`
    margin: 0;
    font-size: 2rem;
    color: #2f2f2f;
    padding: 0;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
      font-size: 1.5rem;
  }
`;

const Description = styled.div`
    text-align: center;
    font-family: Arial;
    max-width: 40rem;
    width: 60%;
    margin: 1rem 0 1rem 0;
    color: rgb(0,0,0,0.5);
    font-size: 1.5rem;

    span {
        color: rgb(0,0,0,0.7);
        
    }

    @media (max-width: 768px) {
      width: 80%;
      font-size: 1.25rem;
  }
`;


const TagWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const TechTag = styled.div`
    background-color: rgb(102, 125, 255, 0.1);
    color: rgb(79, 105, 255);
    font-size: 0.75rem;
    margin: 0.25rem;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-family: Arial;
    white-space: no-wrap;
`;

export const StyledButton = styled.button`
    -webkit-tap-highlight-color: transparent;
    outline: 0;

    &:focus, &:hover, &:visited, &:link, &:active {
        -webkit-tap-highlight-color: transparent;
        outline: 0;
    }
`;
const LiveButton = styled(StyledButton)`
  background-color: rgb(79, 105, 255);
  color: #FFF;
  border: none;
  padding: 1rem 1.5rem;
  font-family: Arial Black;
  margin: 1.25rem;
  white-space: nowrap;
  border-radius: 2rem;
  scroll-snap-align: center;
  cursor: pointer;
  &:hover {
      transform: scale(1.1);
  }

  @media (max-width: 768px) {
      font-size: 0.75rem;
      padding: 1rem 1.5rem;
      margin: 1.25rem 0.25rem ;
  }
`;


const Projects: React.FC = () => {
  const tags = [
    "Typescript", "React", "ApolloClient", "GraphQL", "Styled-Components", "Redux", "React-Helmet"
  ]
  return (
    <ProjectWrap bg={""}>
        <TitleH2>Work</TitleH2>
        <img src={'./images/ref1_mockup_2.png'} 
          alt={'Ref1 App Mockup'} width={"90%"} height={"auto"}/>
          <TagWrap>
            {
              tags.map(tag => <TechTag key={tag}>{tag}</TechTag>)
            }
          </TagWrap>
        <TitleH4>Ref1 App</TitleH4>
        <Description>
          Easy-to-use <span>Mobile-First</span> Formula 1 reference Progressive Web App now with over&nbsp;
          <span>180k page views in over 120 countries</span> since March/2021.
        </Description>
        <TagWrap>
          <LiveButton onClick={() => window.open("https://ref1.app")}>Visit Ref1 App</LiveButton>
          <LiveButton onClick={() => window.open("https://github.com/claudiovf/Ref1-Front/blob/main/README.md")}>Overview & Code</LiveButton>
        </TagWrap>
    </ProjectWrap>
  );
}

export default Projects;