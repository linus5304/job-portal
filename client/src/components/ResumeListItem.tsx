import {
    Box,
    Button,
    Flex,
    Icon,
    Image,
    Link,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import NextLink from "next/link";
  import React, { useState } from "react";
  import { FaBookmark, FaBuilding, FaRegBookmark } from "react-icons/fa";
  import { MdBuild, MdLocationOn, MdTimer, MdWork } from "react-icons/md";
  import { useGetJobsQuery } from "./../generated/graphql";
  import DayJS from "react-dayjs";


interface ResumeListItemProps{
    position?:string
    description?:string
    imgUrl?:string
    location?:string
    name?:string
    id?:number
}

export const ResumeListItem: React.FC<ResumeListItemProps> = ({
    position,
    description,
    imgUrl,
    name,
    location, id}) => {
        return (
            <Box
      as="article"
      rounded="lg"
      bg="white"
      w="100%"
      p={8}
      transition=".2s ease-out"
      _hover={{ boxShadow: "lg", transform: "scale(1,1)" }}
    >
      <Stack direction={["column", "column", "column", "row", "row"]} >
        <Flex
          width="96px"
          display={["none", "none", "none", "flex", "flex"]}
          height="96px"
        >
          <Image src={imgUrl} width="96px" height="96px" alt="hello" />
        </Flex>
        <Flex flexDirection="column" flex={2} gridGap="20px">
          <Flex alignItems="flex-start" justifyContent="space-between">
            <Box w="100%" >
              <NextLink href={`/resume/${id}`}>
                <Link fontSize="xl" fontWeight="bold">
                  {name}{" "}
                </Link>
              </NextLink>
              
              <Stack
            flexDir={["column", "column", "column", "row", "row"]}
            gridGap="4%"
            w="100%"
            alignItems="center"
            
          >
          <Flex alignItems="center" gridGap="4px">
          <Icon as={MdWork} fontSize="1.2em" color="gray.300"/>
          <Text fontSize="lg" fontWeight="semibold">
                  {position}{" "}
                </Text>
                </Flex>
          <Flex alignItems="center" gridGap="4px">
          <Icon as={MdLocationOn} fontSize="1.2em" color="gray.300"/>
          <Text fontSize="lg" fontWeight="semibold">
                  {location}{" "}
                </Text>
                </Flex>
            

            
            </Stack>
              <Text fontSize="lg">{description} </Text>
            </Box>
            
          </Flex>
          
        </Flex>
        
      </Stack>
    </Box>
        );
};