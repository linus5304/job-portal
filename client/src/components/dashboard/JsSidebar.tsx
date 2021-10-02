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
import { MdEdit, MdFavoriteBorder } from "react-icons/md";
import {
  useFileUploadMutation,
  useGetJsProfileQuery,
  useLogoutMutation,
  useUpdateJsProfileMutation,
} from "../../generated/graphql";

interface JsSidebarProps {
  username?: string;
}

export const JsSidebar: React.FC<JsSidebarProps> = ({ username }) => {
  const apolloClient = useApolloClient();
  const router = useRouter();
  const [logout] = useLogoutMutation();
  const [uploadFile] = useFileUploadMutation();
  const [update] = useUpdateJsProfileMutation();

  const { data, loading } = useGetJsProfileQuery();

  const [profileImage, setprofileImage] = useState(() => "");

  if (!data && loading) return <div>Loading....</div>;

  console.log("profile", profileImage);

 

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
              profileImage !== "" ? profileImage : data?.getJSProfile.profile_pic
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
                    data: { profile_pic: fData.fileUpload.url },
                    id: data?.getJSProfile.id,
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
          <NextLink href="/account/job-seeker">
            <Flex
              alignItems="center"
              cursor="pointer"
              gridGap="4%"
              p="5%"
              _hover={{ bg: "green.100" }}
              w="100%"
            >
              <Icon as={FaUser} fontSize="4xl" color="#00b074" />
              <Text fontSize="xl" fontWeight="bold">
                Profile
              </Text>
            </Flex>
          </NextLink>
          <NextLink href="/account/job-seeker/resume">
            <Flex
              alignItems="center"
              cursor="pointer"
              gridGap="4%"
              p="5%"
              _hover={{ bg: "green.100" }}
              w="100%"
            >
              <Icon as={IoDocumentText} fontSize="4xl" color="#00b074" />
              <Text fontSize="xl" fontWeight="bold">
                My Resume
              </Text>
            </Flex>
          </NextLink>
          
          <NextLink href="/account/job-seeker/applied-jobs">
            <Flex
              alignItems="center"
              cursor="pointer"
              gridGap="4%"
              p="5%"
              _hover={{ bg: "green.100" }}
              w="100%"
            >
              <Icon as={IoDocumentText} fontSize="4xl" color="#00b074" />
              <Text fontSize="xl" fontWeight="bold">
                Applied Jobs
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
