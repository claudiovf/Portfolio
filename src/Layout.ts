import styled from 'styled-components';

export const ProjectWrap = styled.div<{ bg: string }>`
    background-color: ${props => props.bg};
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 4rem 0;
    @media (min-width: 2800px) {
      padding: 8rem 0;
  }
`;

export const TitleH2 = styled.h2<{color: string}>`
    margin: 0;
    font-size: 3rem;
    color: ${props => props.color};
    padding: 0;
    @media (max-width: 768px) {
      font-size: 2.75rem;
  }
    @media (min-width: 2800px) {
      font-size: 8rem;
  }
`;
export const TitleH4 = styled.h4`
    margin: 0;
    font-size: 2rem;
    color: #2f2f2f;
    padding: 0;
    margin-bottom: 3rem;
    @media (max-width: 768px) {
      font-size: 2rem;
  }
    @media (min-width: 2800px) {
      font-size: 6rem;
      margin-bottom: 6rem;
  }
`;

export const Description = styled.div`
    text-align: center;
    max-width: 40rem;
    width: 60%;
    margin: 1rem 0 3rem 0;
    color: rgb(0,0,0,0.5);
    font-size: 1.5rem;
    line-height: 2rem;
    span {
        color: rgb(0,0,0,0.7);
        
    }

    @media (max-width: 768px) {
      width: 80%;
      font-size: 1.25rem;
  }
    @media (min-width: 2800px) {
      width: 100%;
      max-width: 40%;
      font-size: 3rem;
      line-height: 3rem;
      margin: 1rem 0 6rem 0;
  }
`;


export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;

  @media (min-width: 2800px) {
    margin-bottom: 6rem;
}
`;

export const TechTag = styled.div`
    background-color: rgb(102, 125, 255, 0.1);
    color: rgb(79, 105, 255);
    font-size: 0.75rem;
    margin: 0.25rem;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    white-space: no-wrap;

    @media (min-width: 2800px) {
      font-size: 2rem;
      padding: 1rem 2rem;
      border-radius: 0.75rem;
      margin: 0.75rem;
  }
`;

export const StyledButton = styled.button`
    -webkit-tap-highlight-color: transparent;
    outline: 0;

    &:focus, &:hover, &:visited, &:link, &:active {
        -webkit-tap-highlight-color: transparent;
        outline: 0;
    }
`;
export const LiveButton = styled(StyledButton)`
  background-color: rgb(79, 105, 255);
  color: #FFF;
  border: none;
  padding: 1rem 1.5rem;
  font-family: Helvetica;
  font-weight: 700;
  margin: 1.25rem;
  white-space: nowrap;
  border-radius: 2rem;
  scroll-snap-align: center;
  cursor: pointer;
  @media (hover: hover) and (pointer: fine) {
    &:hover { 
        transform: scale(1.01);
        background-color: rgb(79, 105, 255, 0.95);
    }
  }    
    @media (min-width: 2800px) {
      padding: 2rem 3rem;
      font-size: 2rem;
      border-radius: 4rem;
  }


  @media (max-width: 768px) {
      font-size: 0.75rem;
      padding: 1rem 1.5rem;
      margin: 1.25rem 0.25rem ;
  }
`;
export const DisabledButton = styled(StyledButton)`
  background-color: rgb(79, 105, 255, 0.1);
  color: #4f4f4f;
  border: none;
  padding: 1rem 1.5rem;
  font-family: Helvetica;
  font-weight: 700;
  margin: 1.25rem;
  white-space: nowrap;
  border-radius: 2rem;
  scroll-snap-align: center;

  @media (max-width: 768px) {
      font-size: 0.75rem;
      padding: 1rem 1.5rem;
      margin: 1.25rem 0.25rem ;
  }
  @media (min-width: 2800px) {
    padding: 2rem 3rem;
    font-size: 2rem;
    border-radius: 4rem;
}
`;

export const Divider = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
    width: 80%;
    max-width: 60rem;
    border-bottom: 2px solid #dadada;
    margin: 2rem 0 5rem 0;

    @media (min-width: 2800px) {
      margin: 4rem 0 10rem 0;
      max-width: 50%;
    }
`;
export const ImgWrap = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    margin: 0 0 3rem 0;
`;

export const AnimWrap = styled.div<{ isVisible: boolean }>`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    transition: all 0.5s linear;
    ${props => props.isVisible
        ? "transform: translateY(0); opacity: 1;"
        : "transform: translateY(5rem); opacity: 0;"
    }
`;