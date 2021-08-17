import { useApolloClient } from "@apollo/client";
import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Text,
  VStack,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useState } from "react";
import { FaKeycdn } from "react-icons/fa";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [display, changeDisplay] = useState("none");
  const { data } = useMeQuery();
  const [logout] = useLogoutMutation();
  const apolloClient = useApolloClient();

  const logoutFn = async () => {
    await logout();
    apolloClient.resetStore();
  };

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
          {data?.me ? (
            <HStack spacing="24px">
              <NextLink href="/jobs">
                <Button variant="ghost">Jobs</Button>
              </NextLink>
              <NextLink href="/post-job">
                <Button variant="ghost">Post Job</Button>
              </NextLink>

              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  My Account
                </MenuButton>
                <MenuList>
                  <NextLink href="/account/1">
                    <MenuItem>Info</MenuItem>
                  </NextLink>
                  <NextLink href="/">
                    <MenuItem
                      onClick={async () => {
                        await logout();
                        apolloClient.resetStore();
                      }}
                    >
                      Logout
                    </MenuItem>
                  </NextLink>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          ) : (
            <HStack spacing="24px">
              <NextLink href="/jobs">
                <Button variant="ghost">Jobs</Button>
              </NextLink>
              <NextLink href="/post-job">
                <Button variant="ghost">Post Job</Button>
              </NextLink>
              <NextLink href="/login">
                <Button variant="ghost">Login</Button>
              </NextLink>
              <NextLink href="/register">
                <Button>Register</Button>
              </NextLink>
            </HStack>
          )}
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
          <Flex justify="flex-end">
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
            {data?.me ? (
              <VStack spacing="24px" mx="auto">
                <NextLink href="/jobs">
                  <Button variant="ghost">Jobs</Button>
                </NextLink>
                <NextLink href="/post-job">
                  <Button variant="ghost">Post Job</Button>
                </NextLink>
                <NextLink href="">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      logoutFn;
                      changeDisplay("flex");
                    }}
                  >
                    Logout
                  </Button>
                </NextLink>
                <NextLink href="/account/1">
                  <Button>My Account</Button>
                </NextLink>
              </VStack>
            ) : (
              <VStack spacing="24px" mx="auto">
                <NextLink href="/jobs">
                  <Button variant="ghost" onClick={() => changeDisplay("none")}>
                    Jobs
                  </Button>
                </NextLink>
                <NextLink href="/post-job">
                  <Button variant="ghost" onClick={() => changeDisplay("none")}>
                    Post Job
                  </Button>
                </NextLink>
                <NextLink href="/login">
                  <Button variant="ghost" onClick={() => changeDisplay("none")}>
                    Login
                  </Button>
                </NextLink>
                <NextLink href="/register">
                  <Button onClick={() => changeDisplay("none")}>
                    Register
                  </Button>
                </NextLink>
              </VStack>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
