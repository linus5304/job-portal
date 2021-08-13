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
  Link,
  Image
} from "@chakra-ui/react";
import { FaBookmark, FaMapPin, FaSuitcase } from "react-icons/fa";
import { MdWork,MdLocationOn } from "react-icons/md";

interface JobListItemProps {
  title: string
  companyName?: string
  location?:string
  imgUrl?:string
  postDate?:string
  type?: string
  id?:number
}

export const JobListItem: React.FC<JobListItemProps> = ({title, companyName, location, imgUrl, postDate, type, id}) => {
  
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
          <Image src={imgUrl} width="96px" height="96px" alt="hello"/>
        </Flex>
        <Flex flexDirection="column" flex={2} gridGap="20px">
          <Flex alignItems="center" justifyContent="space-between" >
            <Box>
              <LinkOverlay href={`/jobs/${id}`}>
                <Text fontSize="xl" fontWeight="bold">{title} </Text>
              </LinkOverlay>
            </Box>
            <Box>
              <Icon as={FaBookmark} fontSize="xl"/>
            </Box>
          </Flex>
          <Flex gridGap={2} flexDir={['column', 'column', 'column','row','row']}>
            <Flex alignItems="center">
              <Icon as={MdWork} fontSize="lg"/>
              <Text>{companyName}</Text>
            </Flex>
            <Flex alignItems="center">
              <Icon as={MdLocationOn} fontSize="lg"/>
              <Text fontSize="lg">{location}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Stack direction={['row', 'row', 'row','column','column']} alignItems="center">
          <Text>{postDate}</Text>
          <Button variant="ghost">Full Time</Button>
        </Stack>
      </Stack>
    </LinkBox>
  );
};
