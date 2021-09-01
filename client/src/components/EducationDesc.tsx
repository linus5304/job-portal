import React from "react";
import { VStack, Flex, Text, HStack, Icon } from "@chakra-ui/react";
import { MdWork } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";
import { useGetAllEducationQuery } from "../generated/graphql";

interface EducationDescProps {
  degree?: string;
  startDate?: any;
  endDate?: any;
  jsId: number;
}

export const EducationDesc: React.FC<EducationDescProps> = ({
  degree,
  startDate,
  endDate,
  jsId,
}) => {
  const { data, loading, error } = useGetAllEducationQuery({
    variables: { jsId },
  });

  if (!data && loading) return <div>Loading...</div>;

  return (
    <VStack align="flex-start">
      {data?.getAllEducation.map((js) => (
        <>
          <Text fontSize="xl" fontWeight="semibold">
            {js.degree}
          </Text>
          <HStack>
            <Flex alignItems="center">
              <Icon as={FiCalendar} fontSize="lg" />
              <Text>
                {js.start_date} - {js.end_date}
              </Text>
            </Flex>

            <Flex alignItems="center">
              <Icon as={MdWork} fontSize="lg" />
              <Text>{js.school}</Text>
            </Flex>
          </HStack>
        </>
      ))}
    </VStack>
  );
};
