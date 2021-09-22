import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { title } from "process";
import React from "react";
import NextLink from 'next/link'

interface ApplicantProps {
    id?: number
    first_name?: string
    last_name?: string
    bg?: string
}

export const Applicant: React.FC<ApplicantProps> = ({id, first_name, last_name, bg}) => {
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
