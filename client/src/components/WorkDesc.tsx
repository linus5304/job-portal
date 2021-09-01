import React from "react";
import { VStack, Flex, Text, HStack, Icon } from "@chakra-ui/react";
import { MdWork } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { useGetAllWorkQuery } from "../generated/graphql";

interface WorkDescProps {
  degree?: string;
  startDate?: any;
  endDate?: any;
  jsId: number;
}

export const WorkDesc: React.FC<WorkDescProps> = ({
  degree,
  startDate,
  endDate,
  jsId,
}) => {
  const { data, loading, error } = useGetAllWorkQuery({
    variables: { jsId },
  });

  if (!data && loading) return <div>Loading...</div>;
  if (!data && !loading) return <div>{`Error ${error.message}`}</div>;

  return (
    <VStack align="flex-start">
      {data?.getAllWork.map((wk) => {
        <>
          <Text fontSize="xl" fontWeight="semibold">
            {wk.field}
          </Text>
          <HStack>
            <Flex alignItems="center">
              <Icon as={FiCalendar} fontSize="lg" />
              <Text>
                {wk.start_date} - {wk.end_date}
              </Text>
            </Flex>

            <Flex alignItems="center">
              <Icon as={FaGraduationCap} fontSize="lg" />
              <Text>{wk.company_name}</Text>
            </Flex>
          </HStack>
        </>;
      })}
    </VStack>
  );
};
