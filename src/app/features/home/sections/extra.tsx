import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";

export default function Extra() {
  return (
    <Box as="section" bg="#0A0A0A" color="white" borderColor="white">
      <Container py={100}>
        <SimpleGrid columns={[1,null,2]} gap={20}>
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
      <Box asChild rounded={"4xl"} w="full" sm={{w: "10/12"}}>
        <Image
          width={1080}
          height={1080}
          src={"/assets/images/circular-brief-podcast.png"}
          alt=""
        />
      </Box>

      <Heading
        size={["2xl", null, "3xl"]}
        fontSize={["2xl", null, "3xl"]}
        maxW={"sm"}
        my={6}
      >
        Where climate literacy meets circular action.
      </Heading>

      <ButtonGroup>
        <Button colorPalette={"blue"}>Listen on spotify</Button>
        <Button
          variant={"outline"}
          color="white"
          borderColor="white"
          _hover={{ bg: "white/10" }}
        >
          Apple podcast
        </Button>
        <Button
          variant={"outline"}
          color="white"
          borderColor="white"
          _hover={{ bg: "white/10" }}
        >
          Youtube
        </Button>
      </ButtonGroup>
    </Box>
  );
}



function Newsletter() {
  return (
    <Box>
      <Box asChild rounded={"4xl"} w="full" sm={{w: "10/12"}}>
        <Image
          width={1080}
          height={1080}
          src={"/assets/images/circular-brief-newsletter.png"}
          alt=""
        />
      </Box>

      <Heading
        size={["2xl", null, "3xl"]}
        fontSize={["2xl", null, "3xl"]}
        maxW={"sm"}
        my={6}
      >
        Where climate literacy meets circular action.
      </Heading>

      <ButtonGroup>
        <Button colorPalette={"blue"}>Read this issue</Button>
        <Button
          variant={"ghost"}
          color="white"
          _hover={{ bg: "white/5" }}
        >
          Browse all Issues <Icon display={"inline-block"}><LuArrowRight /></Icon>
        </Button>
      </ButtonGroup>
    </Box>
  );
}
