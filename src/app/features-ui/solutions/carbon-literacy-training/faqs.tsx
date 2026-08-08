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
    a: "Carbon Literacy training has many specific goals. Firstly, it aims to increase awareness and understanding of climate change, its causes, and its impacts on the environment and society. This includes providing knowledge about the carbon cycle, greenhouse gas emissions, and the concept of a carbon footprint. Secondly, Carbon Literacy training seeks to empower individuals and organisations with the skills and tools needed to take action and reduce their own carbon footprint. It promotes sustainable practices, energy efficiency, waste reduction, and the adoption of renewable energy sources. Additionally, Carbon Literacy training aims to inspire individuals to become climate change advocates, sharing their knowledge and inspiring others to make a positive impact.\n\nOverall, the objectives of Carbon Literacy training are to Increase climate change knowledge and impacts of everyday actions, and to drive behavioural change both individually and within an organisation.",
  },
  {
    q: "Why do we need Carbon Literacy training?",
    a: "Imagine being a Carbon Literate citizen, equipped with the power to understand how climate change impacts not only yourself but also your business.  With this knowledge, you are more able to take charge of reducing your carbon footprint and also that of your company, inspiring others to do the same. Carbon Literacy training gives individuals the confidence they need to share their understanding of the climate emergency.\n\nThe value of Carbon Literacy extends far beyond personal growth—it is a is a desirable asset for any employer. A Carbon Literate citizen will display compassion for the environment, their health and the health of those around them.",
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
      "Next steps – making a pledge; setting targets; tools; offsetting; resources",
    ],
  },

  {
    q: "Who is this for?",
    a: "This course is adapted from the standard Carbon Literacy course to be appropriate specifically for business. It is suitable for anyone from junior management to CEO level. We encourage senior teams to take the course early, to demonstrate leadership and start the engagement journey.\n\nWhere possible, we tailor case studies within the training to make it sector-specific.\n\nOur course focuses on positivity, safe space for enquiry, personal confidence, and action. We expect organisations and individuals who attend the course to participate fully, and to leave ready to take positive climate action.",
  },
  {
    q: "How do I become Carbon Literate?",
    a: "In order to become certified as Carbon Literate, you must take part in a day’s worth of accredited CL learning.\n\nAt Lighthouse Sustainability, our CL courses run as 2 modules over 2 sessions, each 3.5 hours long. Participants are also required to complete 1 hour of pre-course learning and 1 hour of homework between sessions.\n\nYou must then submit a completed Participant Details and Evidence Form, including your individual and group pledges, which will be assessed by the Carbon Literacy Project. Following this, you will be awarded a Carbon Literacy certificate, unique to you.",
  },
  {
    q: "What is needed for my personal pledges?",
    a: `Carbon Literacy certification requires personal pledges – at least one significant action to reduce their individual carbon footprint, and at least one significant action involving other people to reduce the collective footprint of their workplace. You will spend 30 minutes at the end of session 2 going through the pledge form and brainstorming ideas as a group. Don’t worry, we will always be on hand with help and advice if you get stuck when completing your form after the workshop is complete.

These are assessed independently by the Carbon Literacy Project to ensure that the learning from the course is reflected, and that the course is resulting in appropriate levels of impact.

As this is a business facing course, the pledges should be work-based wherever possible.`,
  },
  {
    q: "What opportunities are there to progress further?",
    a: `From each cohort delivered, we encourage at least one participant to continue onto Carbon Literacy Train the Trainer. Please see our Train the Trainer for Carbon Literacy Page for more information on this course.

For organisations that want to go further, there is an opportunity to become a Carbon Literate Organisation (Bronze through to Platinum). As part of our services, we can help you on your journey to become a Carbon Literate certified organisation. Enquire here for further information.`,
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
