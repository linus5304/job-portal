import { useApolloClient } from "@apollo/client";
import {
  Avatar,
  Box,
  Flex,
  Icon,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoDocumentText } from "react-icons/io5";
import { MdEdit, MdPeople, MdWork } from "react-icons/md";
import {
  useFileUploadMutation,
  useGetCompanyProfileQuery,
  useLogoutMutation,
  useUpdateCompanyProfileMutation,
} from "../../generated/graphql";

interface SidebarProps {
  username?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ username }) => {
  const [isActive, setIsActive] = useState(false);
  const [logout] = useLogoutMutation();
  const apolloClient = useApolloClient();
  const router = useRouter();
  const { data, loading } = useGetCompanyProfileQuery();
  const [uploadFile] = useFileUploadMutation();
  const [update] = useUpdateCompanyProfileMutation();

  const [profileImage, setprofileImage] = useState(() => "");

  if (!data && loading) {
    return <div>loading....</div>;
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
          <Avatar
            size="2xl"
            src={
              profileImage !== "" ? profileImage : data.getCompanyProfile.logo
            }
          >
            <Dropzone
              onDrop={async ([file]) => {
                const { data: fData } = await uploadFile({
                  variables: { imgUrl: file },
                });
                console.log(fData.fileUpload.url);
                setprofileImage(fData.fileUpload.url);
                update({
                  variables: {
                    data: { logo: fData.fileUpload.url },
                    id: data?.getCompanyProfile.id,
                  },
                });
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <Box {...getRootProps()}>
                  <input {...getInputProps()} name="imgUrl" />
                  <IconButton
                    aria-label="Search database"
                    icon={<MdEdit fontSize="1.5em" />}
                    position="absolute"
                    top="0"
                    right="0"
                    size="sm"
                    variant="outline"
                    bg="#00b074"
                    color="white"
                    _hover={{ bg: "#00b074" }}
                  />
                </Box>
              )}
            </Dropzone>
          </Avatar>

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
          >
            <Icon as={FiLogOut} fontSize="4xl" color="#00b074" />
            <Text
              fontSize="xl"
              fontWeight="bold"
              onClick={async () => {
                await logout();
                // apolloClient.resetStore();
                apolloClient.cache.reset();
                router.push("/");
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
