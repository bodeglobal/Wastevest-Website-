"use client";

import { SubmitEvent, useState } from "react";
import { Box, BoxProps, Button, HStack, Input, Text } from "@chakra-ui/react";
import { toaster } from "../toaster";

type NewsletterSubscriptionFormProps = BoxProps & {
  onSuccess?: () => void;
};

export default function NewsletterSubscriptionForm({
  onSuccess,
  ...props
}: NewsletterSubscriptionFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    const email = formData.get("email");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await response.json()) as { message?: string };
      toaster.create({
        type: response.ok ? "success" : "error",
        title: response.ok ? "Subscription successful" : "Subscription failed",
        description: data.message,
        duration: 5000,
        closable: true,
      });

      if (response.ok) {
        event.target.reset();
        onSuccess?.();
      }
    } catch {
      toaster.error({
        title: "Subscription failed",
        description:
          "We could not process your subscription. Please try again.",
        duration: 5000,
        closable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Box {...props} asChild>
      <form onSubmit={handleSubmit}>
        <HStack
          borderWidth={"thin"}
          borderColor="white"
          //   maxW={"sm"}
          w="full"
          _focusWithin={{
            focusRing: "outside",
            focusRingWidth: "thin",
          }}
          gap={0}
          rounded={"full"}
          // hidden
          p={1}
        >
          <Input
            name="email"
            type="email"
            placeholder="your@company.com"
            outline={"none"}
            required
            disabled={isSubmitting}
            _placeholder={{ color: "white/70" }}
            focusRing={"none"}
            border={"none"}
          />
          <Button
            py={2}
            colorPalette="primary"
            type="submit"
            loading={isSubmitting}
          >
            Subscribe
          </Button>
        </HStack>
      </form>
    </Box>
  );
}
