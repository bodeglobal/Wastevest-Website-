"use client";
import {
  Box,
  BoxProps,
  Button,
  ButtonGroup,
  Center,
  Container,
  Dialog,
  Heading,
  HStack,
  IconButton,
  Portal,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Link, { useLinkStatus } from "next/link";
import { navItems } from "./navItems";
import WVLogo from "../wv-logo";
import { BookBode } from "../btns";
import { LuChevronDown, LuMenu } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "motion/react";
import { WhatWeDoData } from "@/app/features/home/sections/what-we-do";
import WVLink from "../wv-link";

export default function NavigationBar({
  bgOpacity = 40,
  ...props
}: BoxProps & { bgOpacity?: number }) {
  const [open, setOpen] = useState<string>();
  const pathname = usePathname();

  const textColor = props.color;
  // const bgOpacity = 40
  const isHome = pathname == "/";
  // const isAbout = pathname.includes("/about");
  // const isSolutions = pathname.includes("/solutions");
  // const isBeacon = pathname.includes("/routebeacon");
  return (
    <Box
      as={"nav"}
      // asChild
      p={2}
      backdropFilter={"auto"}
      backdropBlur={"xl"}
      zIndex={99}
      pos="fixed"
      {...props}
      bg={!props.bg ? undefined : `${props.bg}/${bgOpacity}`}
      bgColor={!props.bgColor ? undefined : `${props.bgColor}/${bgOpacity}`}
      backgroundColor={
        !props.backgroundColor
          ? undefined
          : `${props.backgroundColor}/${bgOpacity}`
      }
      w="full"
    >
      <Container pos="relative">
        <HStack pos="relative" justifyContent={"space-between"}>
          <Heading as="h1">
            <Link href="/">
              <WVLogo
                filter={isHome ? "brightness(0) invert(100%)" : undefined}
                w={[24, null, 32]}
              />
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
              const isPage =
                pathname == item.href ||
                (pathname.startsWith(item.href ?? "") && item.href != "/");

              return (
                <Button
                  key={item.href + item.label}
                  as="li"
                  // asChild={!!item.href || !!item.subMenuName}
                  variant={"ghost"}
                  color={isPage ? "primary" : textColor}
                  _hover={{ bg: isHome ? "bg/5" : undefined }}
                  onClick={() => item.subMenuName && setOpen(item.subMenuName)}
                >
                  {!item.href ||
                    (!!item.subMenuName && (
                      <>
                        {item.label} {item.subMenuName && <LuChevronDown />}
                      </>
                    ))}
                  {item.href && !item.subMenuName && (
                    <Link href={item.href}>{item.label}</Link>
                  )}
                </Button>
              );
            })}
          </HStack>
          <ButtonGroup>
            <BookBode variant={isHome ? "outline" : "solid"} color={"white"} />

            <IconButton hideFrom={"md"} color={isHome ?"white" : undefined} variant={"outline"}>
              <LuMenu />
            </IconButton>
          </ButtonGroup>
        </HStack>

        {open && (
          <Dialog.Root
            open={true}
            onOpenChange={({ open }) => !open && setOpen(undefined)}
            // modal
            motionPreset={"none"}
            // pos="absolute"
            // w="full"
            // p={32}
            // bg="bg"
            // rounded={"2xl"}
            // asChild
          >
            <Portal>
              <Dialog.Backdrop />
              <Dialog.Positioner asChild w="full">
                <motion.div
                  initial={{ y: -200 }}
                  exit={{ y: -200 }}
                  animate={{ y: 10 }}
                >
                  <Container>
                    <Dialog.Content
                      maxW={"full"}
                      bg={`url('/assets/illustrations/wave-lines-dark.svg'), {colors.bg}`}
                      w="full"
                      rounded={"3xl"}
                    >
                      <Dialog.Body p={10}>
                        {open == "solutions" && <SolutionsNavMenu />}
                      </Dialog.Body>
                    </Dialog.Content>
                  </Container>
                </motion.div>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>
        )}
      </Container>
    </Box>
  );
}

function SolutionsNavMenu() {
  return (
    <SimpleGrid columns={[2]} gapX={20} gapY={10}>
      {WhatWeDoData.map((item, i) => {
        return (
          <HStack
            key={i}
            gap={5}
            _hover={{ bg: "primary.muted" }}
            rounded={"2xl"}
            transition={"background .2s ease-in-out"}
          >
            <Center
              rounded={"2xl"}
              fontSize={"4xl"}
              // fontFamily={"heading"}
              fontWeight={"black"}
              p={[10, null, null, 16]}
              // h="full"
              color="white"
              bg="url('/assets/illustrations/noise.svg')"
              bgSize={"cover"}
              bgRepeat={"no-repeat"}
              // bg="primary"
            >
              {(++i).toString().padStart(2, "0")}
            </Center>

            <Box flex={1}>
              <Text fontSize={["md", null, null, "xl"]} fontWeight={"medium"}>
                {item.title}
              </Text>
              <Text
                lineClamp={2}
                my={[2, null, null, 4]}
                maxW={"3xs"}
                color="fg.muted"
              >
                {item.descripton}
              </Text>
              {item.learnMoreUrl && (
                <WVLink
                  href={item.learnMoreUrl}
                  color="primary"
                  fontWeight={"bold"}
                >
                  Learn More
                </WVLink>
              )}
            </Box>
          </HStack>
        );
      })}
    </SimpleGrid>
  );
}
