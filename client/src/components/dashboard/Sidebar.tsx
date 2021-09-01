import React, { useState } from "react";
import {
  Text,
  Flex,
  VStack,
  Link,
  Avatar,
  IconButton,
  Box,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Icon } from "@chakra-ui/react";
import {
  MdDashboard,
  MdPeople,
  MdWork,
  MdSettings,
  MdEdit,
} from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Dashboard } from "./../Dashboard";
import { Divider } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Dropzone, { useDropzone } from "react-dropzone";
import {
  useLogoutMutation,
  useFileUploadMutation,
  useMeQuery,
  useGetCompanyProfileQuery,
} from "../../generated/graphql";
import { useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";

interface SidebarProps {
  username?:string
}

export const Sidebar: React.FC<SidebarProps> = ({username}) => {
  const [isActive, setIsActive] = useState(false);
  const [logout] = useLogoutMutation();
  const apolloClient = useApolloClient();
  const router = useRouter();
  const {data, loading} = useGetCompanyProfileQuery()

  if(!data && loading){
    return <div>loading....</div>
  }
 

  return (
    <Flex w="300px" minH="100%" overflow="hidden" mb={50}>
      <VStack w="100%" align="flex-start">
        <VStack
          p="8%"
          border="1px solid #fff"
          borderRadius="2%"
          bg="#fff"
          spacing="10px"
          w="100%"
          transition=".2s ease-out"
          _hover={{ boxShadow: "lg", transform: "scale(1,1)" }}
        >
          <Avatar size="2xl" src={data?.getCompanyProfile.logo}/>
            
          
          <Text fontSize="2em" fontWeight="bold">
            @{username}
          </Text>
        </VStack>

        {/* sidebar Items */}
        <VStack pt="5%" w="100%">
          <NextLink href="/account/company">
            <Flex
              alignItems="center"
              cursor="pointer"
              gridGap="4%"
              p="5%"
              _hover={{ bg: "green.100" }}
              w="100%"
              // onClick={(isa) =>setIsActive(!isa)}
              // bg={isActive ? "green.100" : null}
            >
              <Icon as={FaUser} fontSize="4xl" color="#00b074" />
              <Text fontSize="xl" fontWeight="bold">
                Company Profile
              </Text>
            </Flex>
          </NextLink>
          <NextLink href="/post-job">
            <Flex
              alignItems="center"
              cursor="pointer"
              gridGap="4%"
              p="5%"
              _hover={{ bg: "green.100" }}
              w="100%"
              // onClick={(isa) =>setIsActive(!isa)}
              // bg={isActive ? "green.100" : null}
            >
              <Icon as={IoDocumentText} fontSize="4xl" color="#00b074" />
              <Text fontSize="xl" fontWeight="bold">
                Post A Job
              </Text>
            </Flex>
          </NextLink>
          <NextLink href="/jobs/my-jobs">
            <Flex
              alignItems="center"
              cursor="pointer"
              gridGap="4%"
              p="5%"
              _hover={{ bg: "green.100" }}
              w="100%"
            >
              <Icon as={MdWork} fontSize="4xl" color="#00b074" />
              <Text fontSize="xl" fontWeight="bold">
                Manage Jobs
              </Text>
            </Flex>
          </NextLink>
          <Flex
            alignItems="center"
            cursor="pointer"
            gridGap="4%"
            p="5%"
            _hover={{ bg: "green.100" }}
            w="100%"
            // onClick={() =>setIsActive(!isActive)}
            // bg={isActive ? "green.100" : null}
          >
            <Icon as={MdPeople} fontSize="4xl" color="#00b074" />
            <Text fontSize="xl" fontWeight="bold">
              Applicants
            </Text>
          </Flex>

          <Flex
            alignItems="center"
            cursor="pointer"
            gridGap="4%"
            p="5%"
            _hover={{ bg: "green.100" }}
            w="100%"
          >
            <Icon as={FiLogOut} fontSize="4xl" color="#00b074" />
            <Text
              fontSize="xl"
              fontWeight="bold"
              onClick={async () => {
                await logout();
                router.push("/");
                apolloClient.resetStore();
              }}
            >
              Logout
            </Text>
          </Flex>
        </VStack>
      </VStack>
    </Flex>
  );
};
