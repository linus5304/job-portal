import React from "react";
import {
  Box,
  Button,
  Flex,
  Icon,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
  Link
} from "@chakra-ui/react";
import { Image } from "./Image";
import { FaBookmark, FaMapPin, FaSuitcase } from "react-icons/fa";
import { MdWork,MdLocationOn } from "react-icons/md";

interface JobListItemProps {}

export const JobListItem: React.FC<JobListItemProps> = ({}) => {
  const imageSize = useBreakpointValue(
    { base: "80px", md: "96px", 'xl': "192px" }, 'xl'
  );
  return (
    <LinkBox
      as="article"
      rounded="lg"
      bg="white"
      h="100%"
      w="full"
      p={6}
      transition=".2s ease-out"
      _hover={{ boxShadow: "dark-lg", transform: "scale(1,1)" }}

    >
      <Stack direction={['column', 'column', 'column','row','row']} >
        <Flex width="96px" display={['none', 'none', 'none','flex', 'flex']} height="96px">
          <Image src="/bg2.jpg"width="96px" height="96px"/>
        </Flex>
        <Flex flexDirection="column" flex={2} gridGap="20px">
          <Flex alignItems="center" justifyContent="space-between" >
            <Box>
              <LinkOverlay href="/">
                <Link fontSize="xl" fontWeight="bold">Credit Analyst [Sample Job] </Link>
              </LinkOverlay>
            </Box>
            <Box>
              <Icon as={FaBookmark} fontSize="xl"/>
            </Box>
          </Flex>
          <Flex gridGap={2} flexDir={['column', 'column', 'column','row','row']}>
            <Flex alignItems="center">
              <Icon as={MdWork} fontSize="lg"/>
              <Text>Sample Employer</Text>
            </Flex>
            <Flex alignItems="center">
              <Icon as={MdLocationOn} fontSize="lg"/>
              <Text fontSize="lg">Yaounde, Ekoounou Cameroon</Text>
            </Flex>
          </Flex>
        </Flex>
        <Stack direction={['row', 'row', 'row','column','column']} alignItems="center">
          <Text>May 15, 2017</Text>
          <Button variant="ghost">Full Time</Button>
        </Stack>
      </Stack>
    </LinkBox>
  );
};
