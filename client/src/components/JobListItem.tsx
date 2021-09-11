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

import { default as dayjs } from "dayjs";
import Moment from "react-moment";
interface JobListItemProps {
  title: string;
  companyName?: string;
  location?: string;
  imgUrl?: string;
  postDate?: string;
  type?: string;
  id?: number;
  salary?: string;
}

export const JobListItem: React.FC<JobListItemProps> = ({
  title,
  companyName,
  location,
  imgUrl,
  postDate,
  type,
  id,
  salary,
}) => {
  
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
      w="100%"
      p={8}
      transition=".2s ease-out"
      _hover={{ boxShadow: "lg", transform: "scale(1,1)" }}
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
          <Flex alignItems="flex-start" justifyContent="space-between">
            <Box>
              <NextLink href={`/jobs/${id}`}>
                <Link fontSize="xl" fontWeight="bold">
                  {title}{" "}
                </Link>
              </NextLink>
              <Text fontSize="lg">{companyName} </Text>
            </Box>
            <Box>
              {isSave ? (
                <Icon
                  as={FaBookmark}
                  fontSize="1.7em"
                  color="green.400"
                  onClick={() => {
                    setIsSave(!isSave);
                  }}
                />
              ) : (
                <Icon
                  as={FaRegBookmark}
                  fontSize="1.7em"
                  color="green.400"
                  onClick={() => {
                    setIsSave(!isSave);
                  }}
                />
              )}
            </Box>
          </Flex>
          <Flex
            flexDir={["column", "column", "column", "row", "row"]}
            gridGap="2px"
          >
            <Button
              leftIcon={<MdLocationOn color="blue.400" />}
              bg="blue.100"
              variant="solid"
              size="sm"
              color="blue.400"
            >
              {location}
            </Button>

            <Button
              leftIcon={<MdWork color="green.400" />}
              bg="green.100"
              variant="solid"
              size="sm"
              color="green.400"
            >
              Full time
            </Button>

            <Button
              leftIcon={<MdTimer color="red.400" />}
              bg="red.100"
              variant="solid"
              size="sm"
              color="red.400"
            >
              <Moment format="MMM DD YYYY">{postDate}</Moment>
            </Button>
          </Flex>
        </Flex>
        <Stack
          direction={["row", "row", "row", "column", "column"]}
          alignItems="center"
        >
          <Text fontSize="lg" fontWeight="semibold">
            {salary}
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};
