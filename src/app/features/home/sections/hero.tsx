import ArrowRight from "@/components/arrow-right";
import SectionTitleTag from "@/components/section-tag";
import WVLink from "@/components/wv-link";
import {
  Button,
  ButtonGroup,
  Carousel,
  Center,
  CenterProps,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function HeroSection() {
  return (
    <Carousel.Root
      slideCount={4}
      slidesPerPage={1}
      gap={0}
      autoplay={{ delay: 3000 }}
      pos={"relative"}
    >
      <Carousel.ItemGroup gap={0}>
        <Carousel.Item aria-hidden={false} m={0} w="full" index={0}>
          <SlideOne
            minH="svh"
            h="full"
            bg="url('/assets/images/gallery/g2.webp')"
            backgroundSize={"cover"}
            bgRepeat={"no-repeat"}
          />
        </Carousel.Item>

        <Carousel.Item aria-hidden={false} m={0} index={1}>
          <SlideTwo
            minH="svh"
            h="full"
            bg="url('/assets/images/gallery/hero1.webp')"
            backgroundSize={"cover"}
            bgRepeat={"no-repeat"}
          />
        </Carousel.Item>

        <Carousel.Item aria-hidden={false} m={0} index={2}>
          <SlideThree
            minH="svh"
            h="full"
            bg="url('/assets/images/gallery/hero2.webp')"
            backgroundSize={"cover"}
            bgRepeat={"no-repeat"}
          />
        </Carousel.Item>

        <Carousel.Item aria-hidden={false} m={0} index={3}>
          <SlideFour
            minH="svh"
            h="full"
            bg="url('/assets/images/routebeacon-wa-demo.webp'), black"
            backgroundSize={"contain"}
            backgroundPosition={"bottom"}
            bgRepeat={"no-repeat"}
          />
        </Carousel.Item>
      </Carousel.ItemGroup>

      <Carousel.Control
        justifyContent="space-between"
        p={5}
        w="full"
        pos="absolute"
        // bg="blue"
        bottom={0}
        // bg="red"
      >
        <Carousel.Indicators
          h={[0.5, null, 1]}
          w={[7]}
          bg={"white/40"}
          _current={{ bg: "white", w: [10, null, 16] }}
        />

        <ButtonGroup size="xs" variant={"outline"}>
          <Carousel.PrevTrigger asChild>
            <IconButton color="white" _hover={{ color: "black" }}>
              <LuChevronLeft />
            </IconButton>
          </Carousel.PrevTrigger>

          <Carousel.NextTrigger asChild>
            <IconButton color="white" _hover={{ color: "black" }}>
              <LuChevronRight />
            </IconButton>
          </Carousel.NextTrigger>
        </ButtonGroup>
      </Carousel.Control>
    </Carousel.Root>
  );
}

function SlideOne(props: CenterProps) {
  return (
    <Center flexDir={"column"} {...props} >
      <SharedContent
        title="Sustainability training, built for African business."
        description="Hands-on programmes that turn climate ambition into decisions
your team can make on Monday morning."
        label="Pan-African climate action"
        actions={
          <>
            <ButtonGroup>
              <Button bg="white" color="black" asChild>
                <WVLink href="#" hideArrow>
                  Explore training
                </WVLink>
              </Button>{" "}
              <Button
                variant={"outline"}
                color={"white"}
                _hover={{ bg: "bg/10" }}
                asChild
              >
                <WVLink href="#">Join the movement</WVLink>
              </Button>
            </ButtonGroup>
          </>
        }
      />
    </Center>
  );
}

function SlideTwo(props: CenterProps) {
  return (
    <Center flexDir={"column"} {...props}>
      <SharedContent
        title="Sustainability advisory, without the theatre."
        description="Hands-on programmes that turn climate ambition into decisions
your team can make on Monday morning."
        label="Sustainability advisory"
        actions={
          <>
            <ButtonGroup>
              <Button bg="white" color="black" asChild>
                <WVLink href="#" hideArrow>
                  See our Advisory
                </WVLink>
              </Button>{" "}
              <Button
                variant={"outline"}
                color={"white"}
                _hover={{ bg: "bg/10" }}
                asChild
              >
                <WVLink href="#">Join the movement</WVLink>
              </Button>
            </ButtonGroup>
          </>
        }
      />
    </Center>
  );
}

function SlideThree(props: CenterProps) {
  return (
    <Center flexDir={"column"} {...props}>
      <SharedContent
        title="Carbon literacy Training"
        description="A certified programme rebuilt with African case studies, African teams and African decisions in mind."
        label="Pan-African climate action"
        actions={
          <>
            <ButtonGroup>
              <Button bg="white" color="black" asChild>
                <WVLink href="#">Book a Cohort</WVLink>
              </Button>{" "}
              <Button
                variant={"outline"}
                color={"white"}
                _hover={{ bg: "bg/10" }}
                asChild
              >
                <WVLink href="#" hideArrow>
                  Join the movement
                </WVLink>
              </Button>
            </ButtonGroup>
          </>
        }
      />
    </Center>
  );
}

function SlideFour(props: CenterProps) {
  return (
    <Center flexDir={"column"} {...props}>
      <SharedContent
        title="RouteBeacon. Recycling in a message."
        description="The WhatsApp-first pickup and rewards platform putting African cities into a working circular loop."
        label="RouteBeacon"
        actions={
          <>
            <ButtonGroup>
              <Button bg="white" color="black" asChild>
                <WVLink href="#" hideArrow>
                  Explore training
                </WVLink>
              </Button>{" "}
              <Button
                variant={"outline"}
                color={"white"}
                _hover={{ bg: "bg/10" }}
                asChild
              >
                <WVLink href="#">Join the movement</WVLink>
              </Button>
            </ButtonGroup>
          </>
        }
      />
    </Center>
  );
}

function SharedContent({
  title,
  description,
  label,
  actions,
}: {
  title: string;
  description: string;
  label: string;
  actions?: ReactNode;
}) {
  return (
    <Center
      color="white"
      bg="black/80"
      w="full"
      h="full"
      flexDir={"column"}
      textAlign={"center"}
      gap={5}
      py={100}
      px={4}
    >
      <SectionTitleTag color="primary.muted">{label}</SectionTitleTag>
      <Heading size={{base:{base:"5xl", _landscape: "4xl"}, md: "6xl"}} maxW={"2xl"}>
        {title}
      </Heading>
      <Text maxW={"md"}>{description}</Text>
      {actions}
    </Center>
  );
}
