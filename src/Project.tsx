import React, { useRef } from 'react';
import styled from 'styled-components';
import { 
    AnimWrap,
    Description,
  DisabledButton, Divider, 
  ImgWrap, 
  LiveButton, RowWrap, 
  TechTag, TitleH4 } from './Layout';
import useVisible from './useVisible';

  const ProjectWrap = styled.div`
    margin: 0;
    width: 100%;
    overflow: hidden;
`;

export interface ProjectInfo {
    tags: string[];
    image?: {src: string; alt: string; width: string};
    projectName: string;
    liveURL?: string;
    overviewURL?: string;
    description: string;
}

const Project: React.FC<ProjectInfo> = ({tags, image, projectName, liveURL, overviewURL, description}: ProjectInfo) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isVisible = useVisible(ref.current?.offsetTop);


  return (
    <ProjectWrap ref={ref}>
        <AnimWrap isVisible={isVisible}>
        {
            image
            ?<ImgWrap>
                <img src={image.src} alt={image.alt} width={image.width} height={"auto"}/>
            </ImgWrap>
            : null
        }
        <TitleH4>{projectName}</TitleH4>
        <RowWrap>
            {
                tags.map(tag => <TechTag key={tag}>{tag}</TechTag>)
            }
        </RowWrap>
        <Description dangerouslySetInnerHTML={{ __html: description}}></Description>
        
        <RowWrap>
            {
                liveURL ? <LiveButton onClick={() => window.open(liveURL)}>Visit {projectName}</LiveButton> : null
            }
            {
                overviewURL 
                ? <LiveButton onClick={() => window.open(overviewURL)}>Overview & Code</LiveButton>
                : <DisabledButton>Code available upon request</DisabledButton>
            }
        </RowWrap>
        {
            projectName !== "claudiovarela.com" ? <Divider /> : null
        }
        
        </AnimWrap>
    </ProjectWrap>
  );
}

export default Project;