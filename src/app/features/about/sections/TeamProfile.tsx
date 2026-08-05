import { BoxProps, Box, Text } from "@chakra-ui/react";
import Image from "next/image";

export function TeamProfile({
  member,
  ...boxProps
}: BoxProps & {
  member: { profileUrl: string; name?: string; role?: string };
}) {
  return (
    <Box {...boxProps} pos={"relative"}>
      <Box
        asChild
        w="full"
        h="full"
        objectPosition={boxProps.objectPosition}
        objectFit={boxProps.objectFit}
        rounded={boxProps.rounded}
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
          pos="absolute"
          bottom={4}
          left={4}
          rounded={"full"}
          bg="black/50"
          color={"white"}
          w="fit"
          px={[2, null, 4]}
          py={[1, null, 2]}
          fontSize={"xs"}
          backdropFilter={"auto"}
          backdropBlur={"sm"}
        >
          {member.name} {member.role && <>· {member.role}</>}
        </Text>
      )}
    </Box>
  );
}
