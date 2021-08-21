import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Icon,
  HStack,
  Button,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import router from "next/router";
import React from "react";
import { FaKeycdn } from "react-icons/fa";
import NextLink from "next/link";
import { useLoginMutation, useMeQuery } from "../../generated/graphql";
import { useApolloClient } from "@apollo/client";

interface DNavBarProps {}

export const DNavBar: React.FC<DNavBarProps> = ({}) => {
  const { data } = useMeQuery();
  const [logout] = useLoginMutation();
  const apolloClient = useApolloClient();

  return (
    <Flex top={0} zIndex={40} px={8} py={4} position="sticky" bg="white" w="100%">
      <Flex justifyContent="space-between" w="100%">
        <Flex>
          
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
              <NextLink href="/company">
                <Button variant="ghost">Companies</Button>
              </NextLink>
              <NextLink href="/post-job">
                <Button variant="ghost">Post Job</Button>
              </NextLink>
              <Menu>
                <MenuButton
                  as={Avatar}
                  rightIcon={<ChevronDownIcon />}
                  cursor="pointer"
                />

                <MenuList>
                  <NextLink href={`/account/${data?.me.id}`}>
                    <MenuItem>My account</MenuItem>
                  </NextLink>

                  <MenuItem
                    onClick={async () => {
                      await logout();
                      router.push("/");
                      apolloClient.resetStore();
                    }}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          ) : (
            <HStack spacing="24px">
            <NextLink href="/jobs">
                <Button variant="ghost" >Jobs</Button>
              </NextLink>
              <NextLink href="/company">
                <Button variant="ghost">Companies</Button>
              </NextLink>
              <NextLink href="/post-job">
                <Button variant="ghost">Post Job</Button>
              </NextLink>
              <NextLink href="/login">
                <Button variant="ghost" size="lg">Login</Button>
              </NextLink>
              <NextLink href="/register">
                <Button bg="#00b074" color="white" size="lg" _hover={{bg:"#00b074"}}>Register</Button>
              </NextLink>
            </HStack>)}
        </Flex>
      </Flex>
    </Flex>
  );
};
