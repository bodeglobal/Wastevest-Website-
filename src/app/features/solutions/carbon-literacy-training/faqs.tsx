import SectionTitleTag from "@/components/section-tag";
import {
  Accordion,
  Box,
  Button,
  Container,
  HStack,
  Text,
} from "@chakra-ui/react";
import { SectionTitle } from "../components/HeadingText";

const faqs = [
  {
    q: "What is Carbon Literacy?",
    a: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum nostrum itaque inventore magni et in a distinctio, nobis totam, eligendi nisi. Id optio odit exercitationem. Iure beatae voluptates magnam esse?",
  },
  {
    q: "What are the objectives of Carbon Literacy training?",
    a: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum nostrum itaque inventore magni et in a distinctio, nobis totam, eligendi nisi. Id optio odit exercitationem. Iure beatae voluptates magnam esse?",
  },
  {
    q: "Why do we need Carbon Literacy training?",
    a: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum nostrum itaque inventore magni et in a distinctio, nobis totam, eligendi nisi. Id optio odit exercitationem. Iure beatae voluptates magnam esse?",
  },
  {
    q: "What does WasteVest’s Carbon Literacy course include?",
    a: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum nostrum itaque inventore magni et in a distinctio, nobis totam, eligendi nisi. Id optio odit exercitationem. Iure beatae voluptates magnam esse?",
  },

  {
    q: "Who is this for?",
    a: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum nostrum itaque inventore magni et in a distinctio, nobis totam, eligendi nisi. Id optio odit exercitationem. Iure beatae voluptates magnam esse?",
  },
  {
    q: "How do I become Carbon Literate?",
    a: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum nostrum itaque inventore magni et in a distinctio, nobis totam, eligendi nisi. Id optio odit exercitationem. Iure beatae voluptates magnam esse?",
  },
  {
    q: "What is needed for my personal pledges?",
    a: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum nostrum itaque inventore magni et in a distinctio, nobis totam, eligendi nisi. Id optio odit exercitationem. Iure beatae voluptates magnam esse?",
  },
  {
    q: "What opportunities are there to progress further?",
    a: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum nostrum itaque inventore magni et in a distinctio, nobis totam, eligendi nisi. Id optio odit exercitationem. Iure beatae voluptates magnam esse?",
  },
];

export default function Faqs() {
  return (
    <Box as="section" py={[10, null, 100]}>
      <Container>
        <SectionTitle>Frequently Asked Questions</SectionTitle>

        <Accordion.Root mt={10} colorPalette={"primary"}>
          {faqs.map((faq) => {
            return (
              <Accordion.Item key={faq.q} value={faq.q}>
                <Accordion.ItemTrigger rounded="none" p={4}>
                  <Text flex={1}>{faq.q}</Text>
                  <Accordion.ItemIndicator color={"black"} />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent bg="bg.muted">
                  <Accordion.ItemBody p={4} maxW={"5xl"}>
                    {faq.a}
                  </Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            );
          })}
        </Accordion.Root>
      </Container>
    </Box>
  );
}
