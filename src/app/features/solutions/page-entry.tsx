import NavigationBar from "@/components/navbar/navbar";
import { Center, Heading, Text } from "@chakra-ui/react";

export default async function SolutionsPageEntry({ slug }: { slug: string }) {
  return (
    <>
      <NavigationBar pos="relative" />
      <Center flexDir={"column"} minH="svh">
        <Heading>Coming Soon</Heading>
        <Text>{slug}</Text>
      </Center>
    </>
  );
}
