import { BoxProps, Box, Text } from "@chakra-ui/react";
import Image from "next/image";

export function TeamProfile({
  member,
  imgSize = ["3xs", null, "3xs"],
  ...boxProps
}: BoxProps & {
  imgSize?: Pick<BoxProps, "boxSize">["boxSize"];
  member: { profileUrl: string; name?: string; role?: string };
}) {
  return (
    <Box {...boxProps} pos={"relative"}>
      <Box
        asChild
        h={imgSize}
        w={imgSize}
        aspectRatio={1}
        rounded={"full"}
        objectFit={"cover"}
        objectPosition={"top"}
        bg="#D9D9D9"
        mx="auto"
      >
        <Image
          src={member.profileUrl}
          alt="Wastvest Founder"
          width={1080}
          height={1080}
        />
      </Box>
      {member.name && (
        <Text
          pos="relative"
          bottom={8}
          left={"50%"}
          transform={"translateX(-50%)"}
          rounded={"full"}
          bg="black/50"
          color={"white"}
          w="fit"
          px={[2, null, 4]}
          py={[1, null, 2]}
          fontSize={{ base: "x-small", md: "xs" }}
          backdropFilter={"auto"}
          backdropBlur={"sm"}
          textAlign={"center"}
        >
          {member.name} {member.role && <>· {member.role}</>}
        </Text>
      )}
    </Box>
  );
}
