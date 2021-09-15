import {
  Box,
  Stack,
  Flex,
  Link,
  Divider,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/react";
import { title } from "process";
import React from "react";
import {
  MdLocationOn,
  MdWork,
  MdTimer,
  MdEdit,
  MdDelete,
} from "react-icons/md";
import Moment from "react-moment";
import NextLink from "next/link";

interface AppliedJobItemProps {
  id?: number;
  title?: string;
  companyName?: string;
  salary?: string;
  postDate?: string;
  location?: string;
  description?: string;
  imgUrl?: string;
  category?: string;
  expDate?: string;
  applicants?: number;
}

export const AppliedJobItem: React.FC<AppliedJobItemProps> = ({
  id,
  title,
  companyName,
  salary,
  postDate,
  location,
  description,
  imgUrl,
  category,
  expDate,
  applicants,
}) => {

 
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
      <Stack direction={["column", "column", "column", "row", "row"]}>
        <Flex flexDirection="column" flex={2} gridGap="10px">
          <Flex alignItems="flex-start" justifyContent="space-between">
            <Box>
              <NextLink href={`/jobs/${id}`}>
                <Link fontSize="xl" fontWeight="bold">
                  {title}{" "}
                </Link>
              </NextLink>
              <Text fontSize="lg">{companyName} </Text>
            </Box>
          </Flex>
          <Flex
            flexDir={["column", "column", "column", "row", "row"]}
            gridGap="2px"
          >
            <Text fontWeight="semibold" color="green.400" px="2%">
              Active
            </Text>
            <Divider orientation="vertical" h="30px" mr="2%" />
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
      </Stack>
    </Box>
  );
};
