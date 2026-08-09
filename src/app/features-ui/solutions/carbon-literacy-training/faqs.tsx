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
    a: "Carbon literacy is an awareness of the carbon dioxide costs and impacts of everyday activities, and the ability and motivation to reduce emissions, on an individual, community and organisational basis.",
  },
  {
    q: "What are the objectives of Carbon Literacy training?",
    a: "Carbon Literacy training helps people understand climate change, how everyday actions affect the planet, and what they can do to make a difference. It gives individuals and organizations practical ways to reduce emissions, manage waste responsibly, and build lasting habits that support a more sustainable future.",
  },
  {
    q: "Why do we need Carbon Literacy training?",
    a: "Carbon Literacy gives you the skills to understand climate change, reduce your environmental impact, and lead positive change in your workplace and community. It's a valuable skill for both personal and professional growth.",
  },
  {
    q: "What does WasteVest’s Carbon Literacy course include?",
    a: "The course covers topics including:",
    list: [
      "The Why, What and How of carbon and climate change",
      "Greenhouse gases, and their relationship to weather and climate",
      "How climate change is likely to affect us in the UK and globally",
      "Key terminology, including – net zero; carbon neutral; carbon footprinting, and offsetting",
      "Climate Justice",
      "What we are already doing – national policy and local action",
      "Scopes 1, 2 and 3",
      "Understanding our impact: Energy; buildings; travel; food and the circular economy",
      "Motivating others to act – employee engagement",
      "Next steps – making a pledge; setting targets; tools.",
    ],
  },

  {
    q: "Who is this for?",
    a: "Designed for businesses of all sizes, this course equips everyone from team members to senior leaders, with the knowledge and confidence to take meaningful climate action. Through practical examples, industry-relevant case studies, and interactive learning, participants leave ready to drive positive change in their workplace and beyond.",
  },
  {
    q: "How do I become Carbon Literate?",
    a: `In order to become certified as Carbon Literate, you must take part in a day’s worth of accredited CL learning.

At WasteVest, our CL courses run as 2 modules over 2 sessions, each 3.5 hours long. Participants are also required to complete 1 hour of pre-course learning and 1 hour of homework between sessions.

You must then submit a completed Participant Details and Evidence Form, including your individual and group pledges, which will be assessed by the Carbon Literacy Project. Following this, you will be awarded a Carbon Literacy certificate, unique to you.`,
  },
  {
    q: "What is needed for my personal pledges?",
    a: "To earn your Carbon Literacy Certificate, you'll complete two practical climate pledges one personal and one workplace-focused. During the training, you'll receive guidance, collaborate with others, and develop realistic actions that create lasting environmental impact. Your pledges are then reviewed as part of the certification process.",
  },
  {
    q: "What opportunities are there to progress further?",
    a: `From each cohort delivered, we encourage at least one participant to continue onto Carbon Literacy Train the Trainer. Please see our Train the Trainer for Carbon Literacy Page for more information on this course.

For organizations that want to go further, there is an opportunity to become a Carbon Literate Organization (Bronze through to Platinum). As part of our services, we can help you on your journey to become a Carbon Literate certified organization. Enquire here for further information.`,
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
                <Accordion.ItemTrigger rounded="none" p={4} cursor={"pointer"}>
                  <Text flex={1}>{faq.q}</Text>
                  <Accordion.ItemIndicator color={"black"} />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent bg="bg.muted">
                  <Accordion.ItemBody
                    p={4}
                    maxW={"5xl"}
                    whiteSpace={"pre-line"}
                  >
                    {faq.a}

                    {
                      faq.list && <Box as="ul" spaceY={1} ps={4} mt={2} listStyle={"inside"}>
                        {
                          faq.list.map((item, idx) => (<Text key={idx} as="li">{item}</Text>))
                        }
                      </Box>
                    }
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
