import React from 'react';
import { Icon, VStack , Text, LinkBox, LinkOverlay} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';


interface CategoryCardProps{
    title?: string
    jobs?: number
    boxColor?: string
    iconColor?:string
    icon?:any 
}


export const CategoryCard: React.FC<CategoryCardProps> = ({title, jobs, boxColor, iconColor, icon}) => {
        return (
            <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
            <VStack align="flex-start" border="1px solid #fff" borderRadius="4%" bg="#fff" spacing="10px" p="8%" w="300px" transition=".2s ease-out"
            _hover={{ boxShadow: "lg", transform: "scale(1,1)" }}>
                <Box p="8%" bg={boxColor} borderRadius="4%">
                <Icon as={icon} fontSize="3em" color={iconColor}/>
                </Box>
                <LinkOverlay href="#">
                <Text fontSize="xl" fontWeight="semibold">{title}</Text>
                </LinkOverlay>
                <Text fontSize="lg">{jobs} Job vacancies</Text>

            </VStack>
            </LinkBox>
        );
};