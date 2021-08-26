import {
  Flex,
  useColorModeValue,
  Box,
  Link,
  chakra,
  Image,
  Divider,
  LinkBox,
  LinkOverlay,
  VStack,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface CompanyCardProps {
  name?: string;
  jobs?: number;
  imgUrl?: string;
  id?:number
}

export const CompanyCard: React.FC<CompanyCardProps> = ({
  name,
  imgUrl,
  jobs,
  id
}) => {
  return (
    <LinkBox as="article" maxW="sm">
      <VStack
        bg="#fff"
        align="flex-start"
        border="1px solid #fff"
        borderRadius="4%"
        spacing="10px"
        p="8%"
        w="300px"
        transition=".2s ease-out"
        _hover={{ boxShadow: "lg", transform: "scale(1,1)" }}
      >
        <Box p="8%" borderRadius="4%">
          <Image
            objectFit="cover"
            boxSize="100px"
            src={imgUrl ? imgUrl : "/default.jpg"}
          />
        </Box>
        <LinkOverlay href={`/company/${id}`}>
          <Text fontSize="xl" fontWeight="semibold">
            {name}
          </Text>
        </LinkOverlay>
        <Text fontSize="lg">{jobs} Jobs</Text>
      </VStack>
    </LinkBox>
  );
};
