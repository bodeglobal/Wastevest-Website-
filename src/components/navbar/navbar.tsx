"use client";
import {
  Box,
  BoxProps,
  Button,
  ButtonGroup,
  Center,
  Container,
  Heading,
  HStack,
  IconButton,
  Menu,
  Popover,
  Portal,
  SimpleGrid,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import Link, { useLinkStatus } from "next/link";
import { navItems } from "./navItems";
import WVLogo from "../wv-logo";
import { BookConsult } from "../btns";
import { LuChevronDown, LuMenu, LuX } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import { WhatWeDoData } from "@/app/features-ui/about/sections/what-we-do";
import WVLink from "../wv-link";
import ArrowRight from "../arrow-right";

export default function NavigationBar({
  bgOpacity = 40,
  ...props
}: BoxProps & { bgOpacity?: number }) {
  const isMobile = useBreakpointValue(
    { base: true, md: false },
    { ssr: false },
  );
  const [open, setOpen] = useState<string>();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const pathname = usePathname();

  const textColor = props.color;
  // const bgOpacity = 40
  const isHome = pathname == "/";
  // const isAbout = pathname.includes("/about");
  // const isSolutions = pathname.includes("/solutions");
  // const isBeacon = pathname.includes("/routebeacon");

  const anchorRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Box
        as={"nav"}
        role="navigation"

        // asChild

        zIndex={99999999}
        pos="fixed"
        backdropFilter={"auto"}
        backdropBlur={"xl"}
        {...props}
        bg={!props.bg ? undefined : `${props.bg}/${bgOpacity}`}
        paddingInline={0}
        w="full"
      >
        <Container pos="relative" ref={anchorRef} py={2}>
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

                if (!item.subMenuName)
                  return (
                    <Button
                      key={item.href + item.label}
                      as="li"
                      // asChild={!!item.href || !!item.subMenuName}
                      variant={"ghost"}
                      color={isPage ? "primary" : textColor}
                      _hover={{ bg: isHome ? "bg/5" : undefined }}
                    >
                      {item.href && <Link href={item.href}>{item.label}</Link>}
                    </Button>
                  );

                return (
                  <Menu.Root size={"md"} lazyMount unmountOnExit>
                    <Menu.Trigger asChild>
                      <Button
                        key={item.href + item.label}
                        as="li"
                        // asChild={!!item.href || !!item.subMenuName}
                        variant={"ghost"}
                        color={isPage ? "primary" : textColor}
                        _hover={{ bg: isHome ? "bg/5" : undefined }}
                        onClick={() => {
                          if (open == item.subMenuName) {
                            setOpen(undefined);
                          } else setOpen(item.subMenuName);
                        }}
                      >
                        {item.label} {item.subMenuName && <LuChevronDown />}
                      </Button>
                    </Menu.Trigger>
                    <Menu.Positioner
                      bg="bg"
                      rounded={"2xl"}
                      overflow={"hidden"}
                      boxShadow={"md"}
                      border={"none"}
                      outline={"none"}
                    >
                      <Menu.Content as="ul">
                        {WhatWeDoData.map((item, idx) => {
                          if (!item.learnMoreUrl) return;
                          return (
                            <Menu.Item
                              key={idx}
                              value={item.title}
                              cursor={"pointer"}

                              _hover={{ bg: "bg.muted" }}
                              rounded={"full"}
                              as={"li"}
                            >
                              <Menu.ItemText asChild border="none">
                                <WVLink href={item.learnMoreUrl}>
                                  {item.title}
                                </WVLink>
                              </Menu.ItemText>
                            </Menu.Item>
                          );
                        })}
                      </Menu.Content>
                    </Menu.Positioner>
                  </Menu.Root>
                );
                return (
                  <Popover.Root
                    open={!!open && !isMobile}
                    portalled
                    unmountOnExit
                    skipAnimationOnMount
                    // modal
                    positioning={{
                      getAnchorElement: () => anchorRef.current,
                      //  getAnchorRect() {
                      //   return anchorRef.current?.getBoundingClientRect()
                      // },
                      // strategy: "absolute",
                      hideWhenDetached: true,
                      // fitViewport: true,
                      // placement: "bottom-end",
                      offset: { mainAxis: 3, crossAxis: 0 },
                      sameWidth: true,
                    }}
                    lazyMount
                    unstyled
                    onOpenChange={({ open }) => !open && setOpen(undefined)}
                  >
                    <Popover.Trigger asChild>
                      <Button
                        key={item.href + item.label}
                        as="li"
                        // asChild={!!item.href || !!item.subMenuName}
                        variant={"ghost"}
                        color={isPage ? "primary" : textColor}
                        _hover={{ bg: isHome ? "bg/5" : undefined }}
                        onClick={() => {
                          if (open == item.subMenuName) {
                            setOpen(undefined);
                          } else setOpen(item.subMenuName);
                        }}
                      >
                        {item.label} {item.subMenuName && <LuChevronDown />}
                      </Button>
                    </Popover.Trigger>
                    <Popover.Positioner
                      m={0}
                      zIndex={9}
                      backdropFilter={"auto"}
                      // asChild/
                      backdropBlur={"xl"}
                      bg={props.bg}
                      // bg={"bg"}
                      rounded={"3xl"}
                      w="full"
                      border={"none"}
                      p={2}
                    >
                      <motion.div
                        initial={{ top: -1000, opacity: 0 }}
                        exit={{ top: -1000, opacity: 0 }}
                        animate={{ top: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut" }}
                      >
                        <Popover.Content w="full">
                          <Popover.Body>
                            {open == "solutions" && <SolutionsNavMenu />}
                          </Popover.Body>
                        </Popover.Content>
                      </motion.div>
                    </Popover.Positioner>
                  </Popover.Root>
                );
              })}
            </HStack>
            <ButtonGroup>
              <BookConsult
                variant={isHome ? "outline" : "solid"}
                color={"white"}
              />

              <IconButton
                hideFrom={"md"}
                colorPalette={isHome ? "secondary" : undefined}
                aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
                onClick={() => setMobileOpen((value) => !value)}
              >
                <Box
                  transform={mobileOpen ? "rotate(90deg)" : "rotate(0deg)"}
                  transition="transform 0.25s ease-in-out"
                >
                  {mobileOpen ? <LuX /> : <LuMenu />}
                </Box>
              </IconButton>
            </ButtonGroup>
          </HStack>
        </Container>
      </Box>

      {mobileOpen && (
        <Box
          display={{ base: "block", md: "none" }}
          pos="fixed"
          inset={0}
          zIndex={99999998}
          bg="blackAlpha.500"
          onClick={() => setMobileOpen(false)}
        >
          <Box
            bg={props.bg ?? "bg"}
            color={textColor}
            backdropFilter="auto"
            backdropBlur="xl"
            borderBottomRadius="3xl"
            animation="slide-down 0.25s ease-out"
            pt="24"
            pb={8}
            px={5}
            onClick={(event) => event.stopPropagation()}
          >
            <VStack as="ul" align="stretch" gap={1}>
              {navItems.map((item) => {
                const isPage =
                  pathname == item.href ||
                  (pathname.startsWith(item.href ?? "") && item.href != "/");

                if (item.subMenuName) {
                  return (
                    <Box as="li" key={item.label}>
                      <Button
                        variant="ghost"
                        w="full"
                        justifyContent="space-between"
                        color={isPage ? "primary" : textColor}
                        onClick={() =>
                          setMobileSolutionsOpen((value) => !value)
                        }
                      >
                        {item.label}
                        <Box
                          transform={
                            mobileSolutionsOpen
                              ? "rotate(180deg)"
                              : "rotate(0deg)"
                          }
                          transition="transform 0.2s ease-in-out"
                        >
                          <LuChevronDown />
                        </Box>
                      </Button>
                      {mobileSolutionsOpen && (
                        <VStack
                          as="ul"
                          align="stretch"
                          gap={1}
                          pl={4}
                          borderLeftWidth="1px"
                          borderColor="whiteAlpha.300"
                        >
                          {WhatWeDoData.map(
                            (service) =>
                              service.learnMoreUrl && (
                                <Button
                                  key={service.title}
                                  asChild
                                  variant="ghost"
                                  justifyContent="start"
                                  color="fg.muted"
                                >
                                  <Link href={service.learnMoreUrl}>
                                    {service.title}
                                  </Link>
                                </Button>
                              ),
                          )}
                        </VStack>
                      )}
                    </Box>
                  );
                }

                return (
                  <Button
                    key={item.label}
                    as="li"
                    asChild
                    variant="ghost"
                    justifyContent="start"
                    color={isPage ? "primary" : textColor}
                  >
                    <Link href={item.href ?? "#"}>{item.label}</Link>
                  </Button>
                );
              })}
            </VStack>
          </Box>
        </Box>
      )}
    </>
  );
}
{
  /* <Dialog.Root
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
                      bg={`bg`}
                      w="full"
                      rounded={"3xl"}
                    >
                      <Dialog.Body p={{ base: 4 }}>
                        {open == "solutions" && <SolutionsNavMenu />}
                      </Dialog.Body>
                    </Dialog.Content>
                  </Container>
                </motion.div>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root> */
}

function SolutionsNavMenu() {
  return (
    <SimpleGrid columns={[3]} gapX={4} gapY={4}>
      {WhatWeDoData.map((item, i) => {
        return (
          <HStack
            key={i}
            gap={5}
            _hover={{ bg: "primary.muted" }}
            rounded={"2xl"}
            transition={"background .2s ease-in-out"}
            p={4}
            lgDown={{ alignItems: "start", flexDir: "column" }}
          >
            <Center
              rounded={"2xl"}
              fontSize={"xl"}
              // fontFamily={"heading"}
              fontWeight={"black"}
              p={[6]}
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
                maxW={"xs"}
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
