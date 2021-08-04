import { Button } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

interface NavItemProps {
    link: string;
    px:string;
    name: string
    variant?: string
    size?: string
    colorScheme?: string;
    w?: string
}

export const NavItem: React.FC<NavItemProps> = ({link,px, name, variant="link", size, colorScheme, w}) => {
  return (
    <NextLink href={"/"+link}>
      <Button variant={variant} px={px} size={size} colorScheme={colorScheme} w={w}> {name}</Button>
    </NextLink>
  );
};
