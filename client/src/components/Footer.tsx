import React from "react";
import { Flex, Link, VStack, Text, Icon } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Flex bg="#1d292e" h="100%" py="6%" bottom="0" w="100%" >
        <Flex w={["80%","80%","80%","60%"]} justifyContent="space-between" m="auto" flexDir="row" alignItems="center" flexWrap="wrap" gridGap="3%">

        
      <VStack color="gray.300" spacing="16px" alignItems="flex-start">
        <Link>Home</Link>
        <Link>Contact</Link>
        <Link>About</Link>
        <Link>Terms and Condition</Link> 
      </VStack>
      <VStack color="gray.300" spacing="16px" alignItems="flex-start">
        <Text fontWeight="bold" color="white">Employer</Text>
        <Link>Post Job</Link>
        <Link>Search Resume</Link>
        <Link>Sign In</Link>
      </VStack>
      <VStack color="gray.300" spacing="16px" alignItems="flex-start">
        <Text fontWeight="bold" color="white">Job Seeker</Text>
        <Link>Find Job</Link>
        <Link>Create Resume</Link>
        <Link>Sign In</Link>
      </VStack>
      <VStack color="gray.300" spacing="16px" alignItems="flex-start">
        <Link alignItems="center" display="flex" gridGap="4px"><Icon as={FaFacebook} fontSize="lg"/><Text>Facebook</Text></Link>
        <Link alignItems="center" display="flex" gridGap="4px"><Icon as={FaTwitter} fontSize="lg"/><Text>Twitter</Text></Link>
        <Link alignItems="center" display="flex" gridGap="4px"><Icon as={FaInstagram} fontSize="lg"/><Text>Instagram</Text></Link>
        <Link alignItems="center" display="flex" gridGap="4px"><Icon as={FaLinkedin} fontSize="lg"/><Text>LinkedIn</Text></Link>
   
        
      </VStack>
      
      </Flex>
    </Flex>
  );
};
