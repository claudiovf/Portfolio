import styled from 'styled-components';

export const ProjectWrap = styled.div<{ bg: string }>`
    background-color: ${props => props.bg};
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 4rem 0;
`;