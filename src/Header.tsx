import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { LiveButton } from './Layout';

export const HeaderStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    min-height: 3rem;
    max-height: 3rem;
    max-width: 100vw;
    width: 100%;
    position: fixed;
    overflow: hidden;
    z-index: 1000;
    background-color: rgb(255,255,255, 0.9);
    backdrop-filter: blur(10px) opacity(70%) brightness(90%);

    @media (max-width: 768px) {
        justify-content: space-between;
    }
`;

const NavButton = styled(LiveButton)`
    color: #2f2f2f;
    background-color: transparent;
    padding: 0.5rem 1rem;
    margin: 0.5rem 1rem;
    transition: all 0.1s linear;

    @media (hover: hover) and (pointer: fine) {
        &:hover { 
            color: #FFF;
            transform: scale(1);
        }
      }    
 

    @media (max-width: 768px) {
        margin: 0.5rem 0.5rem;
    }
`;


interface Props {
    handleSelection: (selection: string | null) => void;
}

const Header: React.FC<Props> = ({handleSelection}: Props) => {
    const [selected, setSelected] = useState<string | null>(null);

  
    useEffect(() => {
        const onScroll = () => {
            setSelected(null);
            handleSelection(null);
            };
            
            window.addEventListener("scroll", onScroll);
        
            return () => window.removeEventListener("scroll", onScroll);
    }, [selected, handleSelection]);


  return (
      <React.Fragment>
        <HeaderStyled > 
            {
                ["Home", "About", "Work", "Contact"].map(nav => 
                    <NavButton 
                        key={nav}
                        onClick={() => {
                            handleSelection(nav)
                            setSelected(nav)
                        }}
                        >
                            {nav}<span></span>
                    </NavButton>
                )
            }
        </HeaderStyled>
      </React.Fragment>
  );
};

export default Header;
