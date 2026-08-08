import ArrowRight from "@/components/arrow-right";
import WVLink from "@/components/wv-link";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Extra() {
  return (
    <Box as="section" bg="#0A0A0A" color="white" borderColor="white">
      <Container py={[10, null, 100]}>
        <SimpleGrid columns={[1, 2]} gap={20}>
          <Podcast />
          <Newsletter />
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function Podcast() {
  return (
    <Box>
      <Box asChild rounded={"4xl"} w={"full"}>
        <Image
          width={1080}
          height={1080}
          src={"/assets/images/circular-brief-podcast.png"}
          alt="Circular Brief Podcast Banner"
        />
      </Box>

      <Heading
        size={["2xl", null, "3xl"]}
        fontSize={["xl", null, "3xl"]}
        maxW={"sm"}
        my={6}
      >
        Where climate literacy meets circular action.
      </Heading>

      <ButtonGroup>
        <Button colorPalette={"blue"} asChild>
          <WVLink
          hideArrow
            href={
              "https://open.spotify.com/episode/39VXwD8ei2cQSq7TTFJHJA?si=LX49PLeXQuGFe0z1uKYvVA&utm_source=copy-link"
            }
          >
            Listen on spotify
          </WVLink>
        </Button>
        <Button
          variant={"outline"}
          color="white"
          borderColor="white"
          _hover={{ bg: "white/10" }}
          hidden
          asChild
        >
          <WVLink
          hideArrow
            targetBlank
            href={
              "https://open.spotify.com/episode/39VXwD8ei2cQSq7TTFJHJA?si=LX49PLeXQuGFe0z1uKYvVA&utm_source=copy-link"
            }
          >
            Apple podcast
          </WVLink>
        </Button>
        <Button
          variant={"outline"}
          color="white"
          borderColor="white"
          _hover={{ bg: "white/10" }}
          asChild
        >
          <WVLink
          hideArrow
            targetBlank
            href={"https://youtube.com/@hellowastevest?si=h774HIqkUJvvqkCp"}
          >
            Youtube
          </WVLink>
        </Button>
      </ButtonGroup>
    </Box>
  );
}

function Newsletter() {
  return (
    <Box
      bg={`url('/assets/illustrations/wave-lines.svg')`}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
    >
      <Box asChild rounded={"4xl"} w="full" smOnly={{ w: "sm" }}>
        <Image
          width={1080}
          height={1080}
          src={"/assets/images/circular-brief-newsletter.png"}
          alt="Circluar Brief Newsletter Banner"
        />
      </Box>

      <Heading
        size={["2xl", null, "3xl"]}
        fontSize={["xl", null, "3xl"]}
        maxW={"sm"}
        my={6}
      >
        Where climate literacy meets circular action.
      </Heading>

      <ButtonGroup>
        <Button colorPalette={"blue"} asChild>
          <WVLink
          hideArrow
            targetBlank
            href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7358445961641189377"
          >
            Read this issue
          </WVLink>
        </Button>
        <Button 
          hidden
          variant={"ghost"}
          color="white"
          _hover={{ bg: "white/5" }}
        >
          Browse all Issues <ArrowRight />
        </Button>
      </ButtonGroup>
    </Box>
  );
}
