import {
  Box,
  Button,
  Flex,
  Icon, Image, Link, Stack,
  Text
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useState } from "react";
import {
  FaBookmark, FaRegBookmark
} from "react-icons/fa";
import { MdLocationOn, MdWork } from "react-icons/md";
import { useGetJobsQuery } from './../generated/graphql';
import DayJS from 'react-dayjs';


import { default as dayjs } from 'dayjs';
import Moment from 'react-moment'
interface JobListItemProps {
  title: string;
  companyName?: string;
  location?: string;
  imgUrl?: string;
  postDate?: string;
  type?: string;
  id?: number;
}

export const JobListItem: React.FC<JobListItemProps> = ({
  title,
  companyName,
  location,
  imgUrl,
  postDate,
  type,
  id,
}) => {
  const {data} = useGetJobsQuery({
    variables: {
      limit: 5, cursor: null
    } 
  })
  const [isSave, setIsSave] = useState(false);
  // const [saveJobs, setSaveJobs] = useState([] as Job[]);


  // const handleSaveJob = (id: number) => {
  //   setSaveJobs((prevJobs) => {
  //     const jobs = data?.getJobs.jobs
  //     const isJobSaved = jobs.find((jobItem) => jobItem.id === id);
      
  //     if (isJobSaved) {
  //         return jobs.filter((val) => {
  //         return val.id !== isJobSaved.id;
  //       });
  //     } else {
  //               console.log([...prevJobs, isJobSaved as Job])

  //       return [...prevJobs, isJobSaved as Job]
  //     }
  //   });
    
  // };
  return (
    <Box
      as="article"
      rounded="lg"
      bg="white"
      h="100%"
      w="full"
      p={6}
      transition=".2s ease-out"
      _hover={{ boxShadow: "dark-lg", transform: "scale(1,1)" }}
    >
      <Stack direction={["column", "column", "column", "row", "row"]}>
        <Flex
          width="96px"
          display={["none", "none", "none", "flex", "flex"]}
          height="96px"
        >
          <Image src={imgUrl} width="96px" height="96px" alt="hello" />
        </Flex>
        <Flex flexDirection="column" flex={2} gridGap="20px">
          <Flex alignItems="center" justifyContent="space-between">
            <Box>
              <NextLink href={`/jobs/${id}`}>
                <Link fontSize="xl" fontWeight="bold">
                  {title}{" "}
                </Link>
              </NextLink>
            </Box>
            <Box>
              {isSave ? (
                <Icon
                  as={FaBookmark}
                  fontSize="1.7em"
                  
                    onClick={() => {
                      setIsSave(!isSave)}}
                />
              ) : (
                <Icon
                  as={FaRegBookmark}
                  fontSize="1.7em"
                  onClick={() => {
                    setIsSave(!isSave)}}
                />
              )}
            </Box>
          </Flex>
          <Flex
            gridGap={2}
            flexDir={["column", "column", "column", "row", "row"]}
          >
            <Flex alignItems="center">
              <Icon as={MdWork} fontSize="lg" />
              <Text>{companyName}</Text>
            </Flex>
            <Flex alignItems="center">
              <Icon as={MdLocationOn} fontSize="lg" />
              <Text fontSize="lg">{location}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Stack
          direction={["row", "row", "row", "column", "column"]}
          alignItems="center"
        >
          <Text><Moment format="MMM DD YYYY">{postDate}</Moment></Text>
          <Button variant="ghost">Full Time</Button>
        </Stack>
      </Stack>
    </Box>
  );
};
