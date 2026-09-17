"use client";

import { useEffect, useState } from "react";
import {
  Button,
  CloseButton,
  Dialog,
  Heading,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react";
import NewsletterSubscriptionForm from "./footer/newsletter-sub-form";

const subscriptionStorageKey = "wv-newsletter-subscribed";
const modalDelay = 15_000;

export default function NewsletterSubscriptionModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(subscriptionStorageKey) === "true") {
      return;
    }

    const timeout = window.setTimeout(() => setOpen(true), modalDelay);
    return () => window.clearTimeout(timeout);
  }, []);

  function handleSuccess() {
    window.localStorage.setItem(subscriptionStorageKey, "true");
    setOpen(false);
  }

  return (
    <Dialog.Root
      open={open}
      onOpenChange={({ open: nextOpen }) => setOpen(nextOpen)}
      placement="center"
      motionPreset="slide-in-bottom"
      size={"xl"}
    >
      <Dialog.Backdrop />
      <Portal>
        <Dialog.Positioner p={4}>
          <Dialog.Content
          boxShadow={"md"}
            bgImage="linear-gradient(rgb(0 0 0 / 45%), rgb(0 0 0 / 45%)), url('/assets/images/newsletter-modal-bg.jpg')"
            bgPos={"bottom"}
            bgSize={"cover"}
            textAlign={"center"}
            color={"white"}
            rounded={"3xl"}
            py={20}
          >
            <Dialog.Header>
              <Dialog.CloseTrigger
                asChild
                color={"white"}
                _hover={{ bg: "white/20" }}
              >
                <CloseButton size="sm" aria-label="Close newsletter dialog" />
              </Dialog.CloseTrigger>
            </Dialog.Header>
            <Dialog.Body>
              <VStack maxW={"xl"} mx="auto">
                <Heading size="5xl" fontSize={"5xl"} textTransform={"capitalize"} fontWeight={"semibold"}>
                  A sustainable future starts with you. Be part of it.
                </Heading>
                <Text fontSize="md" color="white/100" mt={2}>
                  Stay Informed. Stay Sustainable
                </Text>
                <NewsletterSubscriptionForm
                  mt={10}
                  mx={"auto"}
                  
                  w="full"
                  onSuccess={handleSuccess}
                />
              </VStack>
            </Dialog.Body>
            <Dialog.Footer justifyContent={"center"}>
              <Button
                variant="ghost"
                onClick={() => setOpen(false)}
                color={"white"}
                _hover={{
                  bg: "white/10",
                  borderWidth: "thin",
                  borderColor: "white/30",
                }}
              >
                Maybe later
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
