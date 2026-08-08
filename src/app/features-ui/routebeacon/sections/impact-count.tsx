import SectionTitleTag from "@/components/section-tag";
import WVLink from "@/components/wv-link";
import {
  Box,
  BoxProps,
  Button,
  ButtonGroup,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ImpactData } from "../../about/sections/ImpactData";
import { LuArrowRight } from "react-icons/lu";
import { AnimateNumberCount } from "@/components/animate-number-count";
import { useRef } from "react";
import Image from "next/image";
import { SchedulePickup } from "@/components/btns";
import { getPartnershipMailto } from "@/lib/partnership-email";

export default function ImpactCount() {
  const ref = useRef(null);
  return (
    <Box as="section">
      <Container py={[10, null, 100]}>
        <SectionTitleTag color="primary">Impact so far</SectionTitleTag>

        <Heading size={["2xl", null, "5xl"]} maxW={"xl"} my={6}>
          Smarter waste collection. Sustainable cities.
        </Heading>

        <ButtonGroup>
          <SchedulePickup showArrow colorPalette={"primary"} />
          <Button variant={"outline"} asChild>
            <WVLink href={getPartnershipMailto("service")}>
              Apply as a Service Partner
            </WVLink>
          </Button>
        </ButtonGroup>

        <SimpleGrid
          ref={ref}
          columns={[2, null, 4]}
          mt={10}
          gap={4}
          // flexWrap={"wrap"}
          // bg="red"
        >
          <EmissionReduced />
          <Partners />
          <Communities />
          <Beneficiaries />
          {/* {ImpactData.map((item, i) => {
            return (
              <Box key={i} py={[4, 14]} textAlign={"center"}>
                <Text fontSize={"4xl"} fontFamily={"heading"}>
                  <AnimateNumberCount ref={ref} targetCount={item.value} />
                  {item.plus && "+"} {item.unit && ` ${item.unit}`}
                </Text>
                <Text color={"fg.muted"} fontSize={"xs"}>
                  {item.label}
                </Text>
              </Box>
            );
          })} */}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function Beneficiaries() {
  return (
    <BaseItemLayout
      bg="url(/assets/images/routebeacon/banner4.png)"
      bgSize={"cover"}
      bgPos={"center"}
      bgRepeat={"no-repeat"}
      color="white"
      overflow={"hidden"}
    >
      {/* <Box asChild pos={"absolute"} top={"-4em"} w="fit">
        <Image
          src={"/assets/images/routebeacon/img3.png"}
          alt=""
          height={480}
          width={480}
        />
      </Box> */}
      <ItemLayout
        label="Beneficiaries"
        value={40}
        valuePlus
        pos={"absolute"}
        bottom={4}
        left={"80%"}
        transform={"translateX(-80%)"}
      />
    </BaseItemLayout>
  );
}

function Communities() {
  return (
    <BaseItemLayout
      bg="url(/assets/images/routebeacon/banner3.png)"
      bgSize={"cover"}
      bgPos={"center"}
      bgRepeat={"no-repeat"}
      color="white"
      overflow={"hidden"}
    >
      {/* <Box asChild pos={"absolute"} top={"-4em"} w="fit">
        <Image
          src={"/assets/images/routebeacon/img3.png"}
          alt=""
          height={480}
          width={480}
        />
      </Box> */}
      <ItemLayout
        label="Communities"
        value={500}
        valuePlus
        pos={"absolute"}
        bottom={4}
        left={"80%"}
        transform={"translateX(-80%)"}
      />
    </BaseItemLayout>
  );
}

function Partners() {
  return (
    <BaseItemLayout
      bg="url(/assets/images/routebeacon/banner2.png)"
      bgSize={"cover"}
      bgPos={"center"}
      bgRepeat={"no-repeat"}
      color="white"
      overflow={"hidden"}
    >
      {/* <Box asChild  pos={"absolute"} left={"0"} bottom={[20,20, null, 10]}  transform="auto" w="full">
        <Image
          src={"/assets/images/routebeacon/img2.png"}
          alt=""
          height={480}
          width={480}
        />
      </Box> */}
      <ItemLayout
        label="Partners"
        value={6}
        pos={"absolute"}
        bottom={4}
        left="50%"
        transform={"auto"}
        translateX={{ base: "-50%" }}
      />
    </BaseItemLayout>
  );
}

function EmissionReduced() {
  return (
    <BaseItemLayout
      bg="url(/assets/images/routebeacon/banner1.png)"
      bgSize={"cover"}
      bgPos={"center"}
      bgRepeat={"no-repeat"}
      color="white"
      overflow={"hidden"}
    >
      {/* <Box asChild h={80} pos={"absolute"} left={-16} bottom={0} w="fit">
        <Image
          src={"/assets/images/routebeacon/img1.png"}
          alt=""
          height={480}
          width={480}
        />
      </Box> */}
      <ItemLayout
        label="Emission Reduced"
        value={240}
        valuePlus
        pos={"absolute"}
        bottom={4}
        left={"60%"}
        transform={"auto"}
        translateX={{ base: "-60%" }}
      />
    </BaseItemLayout>
  );
}

function BaseItemLayout(props: BoxProps) {
  return <Box pos="relative" rounded={"xl"} h={48} {...props} />;
}

function ItemLayout({
  label,
  value,
  valuePlus,
  ...boxProps
}: {
  label: string;
  value: number;
  valuePlus?: boolean;
} & BoxProps) {
  const ref = useRef(null);
  return (
    <Box ref={ref} {...boxProps} lineHeight={"1.2"}>
      <Text fontSize={["4xl", null, null, "4xl"]} fontFamily={"heading"}>
        <AnimateNumberCount ref={ref} targetCount={value} />
        {valuePlus && "+"}
      </Text>
      <Text fontSize={"sm"}>{label}</Text>
    </Box>
  );
}
