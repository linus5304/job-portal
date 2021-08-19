import React from 'react';
import { Button as ChakraButton} from '@chakra-ui/react';

export type btn_style = "primary" | "link" |  "outline" | "ghost"

interface ButtonProps{
    variant?: btn_style
    size?:string
    text:string
}


export const Button: React.FC<ButtonProps> = ({ variant, size, text, ...props}) => {
    if(variant === "ghost"){
        return (
            <ChakraButton bg="#00b074" color="white" size={size} _hover={{bg:"#00b074"}}>{text}</ChakraButton>
            );
    }
    if(variant === "link"){
        return (
            <ChakraButton  color="white" size={size} _hover={{bg:"#00b074"}}>{text}</ChakraButton>
            );
    }
    if(variant === "outline"){
        return (
            <ChakraButton bg="#00b074" color="white" size={size} _hover={{bg:"#00b074"}}>{text}</ChakraButton>
            );
    }
    return (
        <ChakraButton bg="#00b074" color="white" size={size} _hover={{bg:"#00b074"}}>{text}</ChakraButton>
        );
    
        
};