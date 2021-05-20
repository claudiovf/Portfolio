import React from 'react';
import styled from 'styled-components';
import { getPath, IconType } from './Paths';

const Svg = styled.svg`
    @media (min-width: 2800px) {
        transform: scale(2, 2);
    }
`;
interface Props {
    color: string;
    iconType: IconType;
}
const Icon: React.FC<Props> = ({color, iconType }: Props) =>{
    return (
        <Svg 
        viewBox={getPath(iconType).viewBox} 
        height={getPath(iconType).size} width={getPath(iconType).size}
        aria-hidden="true" 
        focusable="false" 
        fill={color} 
        xmlns="http://www.w3.org/2000/svg">
            <path d={getPath(iconType).path}></path>
        </Svg>
    );
};

export default Icon;