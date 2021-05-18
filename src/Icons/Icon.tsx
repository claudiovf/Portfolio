import React from 'react';
import { getPath, IconType } from './Paths';


interface Props {
    color: string;
    iconType: IconType;
}
const Icon: React.FC<Props> = ({color, iconType }: Props) =>{
    return (
        <svg 
        viewBox={getPath(iconType).viewBox} 
        height={getPath(iconType).size} width={getPath(iconType).size}
        aria-hidden="true" 
        focusable="false" 
        fill={color} 
        xmlns="http://www.w3.org/2000/svg">
            <path d={getPath(iconType).path}></path>
        </svg>
    );
};

export default Icon;