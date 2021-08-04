import {
  Flex,
  useColorModeValue,
  Box,
  Link,
  chakra,
  Image,
} from "@chakra-ui/react";
import React from "react";

interface CompanyCardProps {}

export const CompanyCard: React.FC<CompanyCardProps> = ({}) => {
  return (
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
        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="avatar"
      />

      <Box py={5} textAlign="center">
        <Link
          display="block"
          fontSize="2xl"
          color={useColorModeValue("gray.800", "white")}
          fontWeight="bold"
        >
          John Doe
        </Link>
        <chakra.span
          fontSize="sm"
          color={useColorModeValue("gray.700", "gray.200")}
        >
          Software Engineer
        </chakra.span>
      </Box>
    </Box>
  );
};
