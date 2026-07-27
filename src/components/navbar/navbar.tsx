"use client"
import {
  Box,
  BoxProps,
  Button,
  ButtonGroup,
  Container,
  Heading,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import Link, { useLinkStatus } from "next/link";
import { navItems } from "./navItems";
import WVLogo from "../wv-logo";
import { BookBode } from "../btns";
import { LuMenu } from "react-icons/lu";

export default function NavigationBar(props: BoxProps) {
  const a = useLinkStatus()
  return (
    <Box
      as={"nav"}
      // asChild
      p={4}
      backdropFilter={"auto"}
      backdropBlur={"xl"}
      zIndex={99}
      pos="fixed"
      {...props}
      bg={`${props.bg}/80`}
      bgColor={`${props.bgColor}/80`}
      backgroundColor={`${props.backgroundColor}/80`}
      w="full"
    >
      <Container pos="relative">
        <HStack pos="relative" justifyContent={"space-between"}>
          <Heading as="h1">
            <Link href="/">
              <WVLogo w={[24, null, 40]} />
            </Link>
          </Heading>
          <HStack
            as="ul"
            pos="absolute"
            top={"50%"}
            left={"50%"}
            transform={"translate(-50%, -50%)"}
            hideBelow={"md"}
          >
            {navItems.map((item) => {
              return (
                <Button
                  key={item.href + item.label}
                  as="li"
                  asChild
                  variant={"ghost"}
                  
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              );
            })}
          </HStack>
          <ButtonGroup>
            <BookBode variant="outline" />

            <IconButton hideFrom={"md"} variant={"outline"}>
              <LuMenu />
            </IconButton>
          </ButtonGroup>
        </HStack>
      </Container>
    </Box>
  );
}
