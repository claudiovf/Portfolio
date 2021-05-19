import React from 'react';
import { 
    Description,
  DisabledButton, Divider, 
  ImgWrap, 
  LiveButton, RowWrap, 
  TechTag, TitleH4 } from './Layout';

export interface ProjectInfo {
    tags: string[];
    image?: {src: string; alt: string; width: string};
    projectName: string;
    liveURL?: string;
    overviewURL?: string;
    description: string;
}

const Project: React.FC<ProjectInfo> = ({tags, image, projectName, liveURL, overviewURL, description}: ProjectInfo) => {
    

  return (
    <React.Fragment>
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
        
        
    </React.Fragment>
  );
}

export default Project;