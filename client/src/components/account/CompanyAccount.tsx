import {
  Button, Divider,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs, Text, VStack
} from "@chakra-ui/react";
import React from "react";
import { Dashboard } from "../Dashboard";
import { JobListItem } from "../JobListItem";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { MainLayout } from "../layouts/MainLayout";
import { Sidebar } from "../dashboard/Sidebar";

interface CompanyAccountProps {}

export const CompanyAccount: React.FC<CompanyAccountProps> = ({}) => {
  return (
    <DashboardLayout>
      <Dashboard/>
    </DashboardLayout>
      
    

  );
};
