"use client";
import Footer from "@/components/footer/footer";
import NavigationBar from "@/components/navbar/navbar";
import { ThemeProvider } from "@/components/provider";
import WVLink from "@/components/wv-link";
import { Button, Center, Container, Heading, Text, VStack } from "@chakra-ui/react";

export default function NotFoundPage() {
  return (
    <ThemeProvider>
        <NavigationBar pos="relative" />
      <Container>

        <Center minH="70vh" py={[20, 32]}>
          <VStack align="center" gap={5} maxW="xl" textAlign="center">
            <Text color="primary" fontSize="sm" fontWeight="700" letterSpacing="widest">
              ERROR 404
            </Text>
            <Heading size={["xl", "2xl"]}>Oops, that page is not here</Heading>
            <Text color="fg.muted">
              The page you are looking for does not exist or may have moved.
            </Text>
            <Button asChild mt={2}>
              <WVLink href="/" hideArrow>
                Return home
              </WVLink>
            </Button>
          </VStack>
        </Center>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
