import React, { useState } from "react";

import {
  Box,
  HStack,
  Icon,
  Text,
  LinkBox,
  LinkOverlay,
  Link,
  Flex,
  Button,
  IconButton,
  VStack
} from "@chakra-ui/react";
import NextLink from "next/link";
import { NavItem } from "./NavItem";
import { FaKeycdn } from "react-icons/fa";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [display, changeDisplay] = useState("none");
  return (
    <Flex top={0} zIndex={40} bg="white" px={8} py={4} position="sticky">
      <Flex justifyContent="space-between" w="100%">
        <Flex>
        <NextLink href="/" passHref>
          <Link>
            <Flex alignItems="center">
              <Icon as={FaKeycdn} fontSize="4xl" />
              <Text fontSize="xl" fontWeight="bold">
                goJobs
              </Text>
            </Flex>
          </Link>
          </NextLink>
        </Flex>
        <Flex
          justifyContent="space-between"
          display={["none", "none", "none", "flex", "flex"]}
        >
          <HStack spacing="24px">
            <NavItem link="" px="2%" name="Jobs" />
            <NavItem link="" px="2%" name="Post Job" size="lg" />
            <NavItem link="login" px="2%" name="Login" variant="outline" w="100px" />
            <NavItem
              link="register"
              px="2%"
              name="Register"
              variant="solid"
              size="lg"
              w="100px"
            />
          </HStack>
        </Flex>
      </Flex>
      <Flex>
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "flex", "none", "none"]}
        />
        <Flex
          w="100vw"
          display={display}
          bgColor="gray.50"
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          zIndex={20}
          overflowY="auto"
          flexDir="column"
          px={8}
        >
          <Flex justify="flex-end" >
            <IconButton
              mt={2}
              mr={2}
              aria-label="Open Menu"
              size="lg"
              icon={<CloseIcon />}
              onClick={() => changeDisplay("none")}
            />
            </Flex>
            <Flex>
            <VStack spacing="24px" mx="auto">
              <NavItem link="" px="2%" name="Jobs" w="100%" />  
              <NavItem link="" px="2%" name="Post Job" size="lg" w="100%" />
              <NavItem
                link="login"
                px="2%"
                name="Login"
                variant="outline"
                w="100%"
              />
              <NavItem
                link="register"
                px="2%"
                name="Register"
                variant="solid"
                size="lg"
                w="100%"
              />
            </VStack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
