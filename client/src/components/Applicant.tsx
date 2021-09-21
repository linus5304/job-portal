import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { title } from "process";
import React from "react";
import NextLink from 'next/link'

interface ApplicantProps {
    id?: number
    first_name?: string
    last_name?: string
}

export const Applicant: React.FC<ApplicantProps> = ({id, first_name, last_name}) => {
  return (
    <Box
      as="article"
      rounded="lg"
      bg="white"
      w="100%"
      p={4}
      transition=".2s ease-out"
      _hover={{ boxShadow: "lg", transform: "scale(1,1)" }}
    >
      <Flex flexDirection="column" flex={2} gridGap="10px">
        <Flex alignItems="flex-start" justifyContent="space-between">
          <Box>
            <NextLink href={`/jobs/${id}`}>
              <Link fontSize="xl" fontWeight="bold">
                {last_name}{" "}
              </Link>
            </NextLink>
            <Text fontSize="lg">{first_name} </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
