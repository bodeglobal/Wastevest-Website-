"use client";
import Footer from "@/components/footer/footer";
import NavigationBar from "@/components/navbar/navbar";
import { ThemeProvider } from "@/components/provider";
import WVLink from "@/components/wv-link";
import { Button, Center, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  const isDevelopment = process.env.NODE_ENV === "development";

  return (
    <ThemeProvider>
      <NavigationBar pos="relative" />
      <Container>
        <Center minH="70vh" py={[20, 32]}>
          <VStack align="center" gap={5} maxW="xl" textAlign="center">
            <Text color="primary" fontSize="sm" fontWeight="700" letterSpacing="widest">
              ERROR 500
            </Text>
            <Heading size={["xl", "2xl"]}>Oops, something went wrong</Heading>
            <Text color="fg.muted">
              {isDevelopment
                ? "The application encountered an unexpected error. Review the details below while developing."
                : "We could not complete your request right now. Please try again shortly."}
            </Text>

            {isDevelopment && (
              <Text
                maxW="full"
                overflowX="auto"
                p={4}
                rounded="md"
                bg="bg.subtle"
                color="fg.muted"
                fontFamily="mono"
                fontSize="sm"
                textAlign="left"
                whiteSpace="pre-wrap"
                wordBreak="break-word"
              >
                {error.message}
                {error.digest && `\n\nDigest: ${error.digest}`}
              </Text>
            )}

            <VStack gap={3} pt={2}>
              <Button onClick={unstable_retry}>Try again</Button>
              <WVLink href="/" hideArrow>
                Return home
              </WVLink>
            </VStack>
          </VStack>
        </Center>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
