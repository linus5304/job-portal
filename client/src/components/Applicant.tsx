import { Box, Flex, Image, Link, Text, Avatar } from "@chakra-ui/react";
import { title } from "process";
import React from "react";
import NextLink from "next/link";
import Moment from "react-moment";

interface ApplicantProps {
  id?: number;
  first_name?: string;
  last_name?: string;
  bg?: string;
  image?: string;
  date: Date;
}

export const Applicant: React.FC<ApplicantProps> = ({
  id,
  first_name,
  last_name,
  bg,
  image,
  date,
}) => {
  return (
    <Box
      as="article"
      w="100%"
      rounded="md"
      bg={bg}
      p={3}
      transition=".2s ease-out"
      _hover={{ boxShadow: "lg", transform: "scale(1,1)" }}
    >
      <Flex flexDirection="column" flex={2} gridGap="10px">
        <Flex alignItems="flex-start" justifyContent="space-between">
          <Avatar src={image} name={`${last_name} ${first_name}`} />
          <Box>
            <Text fontSize="xl" fontWeight="bold">
              {last_name}{" "}
            </Text>
            <Text fontSize="lg">{first_name} </Text>
            <Text fontWeight="semibold" color="#00b074">
              <Moment format="MMM DD YYYY">{date}</Moment>
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
