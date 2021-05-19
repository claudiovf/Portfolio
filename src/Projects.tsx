import React, { useEffect, useRef } from 'react';
import {  ProjectWrap, TitleH2 } from './Layout';
import Project from './Project';

interface Props { selected: string | null};

const Projects: React.FC<Props> = ({ selected }: Props) => {

  const workRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
      if (selected === "Work" && workRef && workRef.current) {
          workRef.current.scrollIntoView({ behavior: "smooth", block: "start"});
      }
  }, [selected])

  const projectInfo = [
    {
      tags: ["Typescript", "React", "ApolloClient", "GraphQL", "Styled-Components", "Redux", "React-Helmet"],
      image: {
        src: './images/ref1_mockup_2.png',
        alt: 'Ref1 App Mockup',
        width: "90%"
      },
      projectName: "Ref1 App",
      liveURL: "https://ref1.app",
      overviewURL: "https://github.com/claudiovf/Ref1-Front/blob/main/README.md",
      description: "Easy-to-use <span>Mobile-First</span> Formula 1 reference Progressive Web App now with <span>over 180k page views in over 120 countries</span> since March/2021."
    },
    {
      tags: ["Typescript", "Apollo", "GraphQL", "NodeJS", "MongoDB", "Mongoose", "JWT" ],
      projectName: "Ref1 API",
      overviewURL: "https://github.com/claudiovf/ref1-Backend",
      description: "<span>Robust API</span> built to serve the Ref1 App (and soon to be open for everyone). Combines the power of MongoDB aggregation pipelines with the flexibility of GraphQL queries to provide <span>over 6000 unique request responses</span>."
    },
    {
      tags: ["Typescript", "React", "ApolloClient", "GraphQL" ],
      projectName: "Ref1 Admin",
      description: "<span>Process over 70 years of Formula 1 history using an algorithm made from scratch</span> to create a snapshot of each of the 850+ drivers, 200+ teams and 1000+ events."
    },
    {
      tags: ["Typescript", "React", "Styled-Components"],
      image: {
        src: './images/smartmockups_kouqtrqu.png',
        alt: 'claudiovarela.com mockup',
        width: "70%"
      },
      projectName: "claudiovarela.com",
      overviewURL: "https://github.com/claudiovf/Portfolio",
      description: "<span>Clean, simple</span>  and fully <span> responsive</span> one-pager portfolio."
    },

  ]
  return (
    <React.Fragment>
      <ProjectWrap bg={""} ref={workRef}>
          <TitleH2 color={"#2f2f2f"}>Work</TitleH2>
          {
            projectInfo.map(proj => 
              <Project 
              key={proj.projectName}
              image={proj.image}
              tags={proj.tags}
              projectName={proj.projectName}
              liveURL={proj.liveURL}
              overviewURL={proj.overviewURL}
              description={proj.description} 
              />)
            }
          
      </ProjectWrap>
    </React.Fragment>
  );
}

export default Projects;