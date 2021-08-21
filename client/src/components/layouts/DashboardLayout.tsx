import { Flex } from "@chakra-ui/react";
import React from "react";
import { DNavBar } from "../dashboard/DNavBar";
import { Sidebar } from "../dashboard/Sidebar";
import { HStack, VStack } from "@chakra-ui/react";
import { Navbar } from "../Navbar";
import { MainLayout } from "./MainLayout";

interface DashboardLayoutProps {}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  return (
    <>
      <MainLayout>
        <Flex mx="auto" w="80%" mt={50}>
          <Sidebar />
          <Flex overflow="auto" w="100%" px="8%" mb="3%">
          {children}
          </Flex>
        </Flex>
      </MainLayout>
    </>
  );
};
