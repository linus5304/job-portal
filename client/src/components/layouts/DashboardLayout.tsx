import { Flex } from "@chakra-ui/react";
import React from "react";
import { DNavBar } from "../dashboard/DNavBar";
import { Sidebar } from "../dashboard/Sidebar";
import { HStack, VStack } from "@chakra-ui/react";
import { Navbar } from "../Navbar";
import { MainLayout } from "./MainLayout";
import { useMeQuery } from "../../generated/graphql";
import { JsSidebar } from "./../dashboard/JsSidebar";
let me;
interface DashboardLayoutProps {}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  const { data, loading, error } = useMeQuery();

  if (!data?.me?.user_type && loading) {
    return <div>loading</div>;
  }
  
  // while(!data?.me === undefined && loading){

  //   return <div>Loading....</div>
  // }

  return (
    <>
      <MainLayout>
        <Flex mx="auto" w="80%" mt={50}>
          {data?.me?.user_type === "company" ? (
            <Sidebar username={data?.me?.username} />
          ) : (
            <JsSidebar username={data?.me?.username} />
          )}

          <Flex overflow="auto" w="100%" px="8%" mb="3%">
            {children}
          </Flex>
        </Flex>
      </MainLayout>
    </>
  );
};
