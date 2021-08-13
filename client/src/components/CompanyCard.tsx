import {
  Flex,
  useColorModeValue,
  Box,
  Link,
  chakra,
  Image,
  LinkBox, LinkOverlay
} from "@chakra-ui/react";
import React from "react";

interface CompanyCardProps {
  name?:string
  description?:string
  imgUrl?: string
  id?:number
}

export const CompanyCard: React.FC<CompanyCardProps> = ({name, description, imgUrl, id}) => {
  return (
    <LinkBox as="article" >
    <Box
      w={['200px','200px','200px','270px', '270px' ]}
      bg={useColorModeValue("white", "gray.800")}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition='.2s ease-out'
      _hover={{boxShadow: 'dark-lg', transform: 'scale(1,1)'}}
      
    >
      <Image
        w="full"
        h={56}
        fit="cover"
        src={imgUrl}
        alt="avatar"
      />

      <Box py={5} textAlign="center">
        <LinkOverlay
          display="block"
          fontSize="2xl"
          color={useColorModeValue("gray.800", "white")}
          fontWeight="bold"
          href={`/company/${id}`}
        >
          {name}
        </LinkOverlay>
        <chakra.span
          fontSize="sm"
          color={useColorModeValue("gray.700", "gray.200")}
        >
          {description}
        </chakra.span>
      </Box>
    </Box>
    </LinkBox>
  );
};
