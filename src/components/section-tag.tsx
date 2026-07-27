import { HStack, Separator, Text, TextProps } from "@chakra-ui/react";
import { ReactElement } from "react";

export default function SectionTitleTag({ showBars = true, children, ...rest }: { showBars?: boolean; children: string | ReactElement<string> } & Omit<TextProps, "children">) {
  const color = rest.color
  return (
    <HStack textTransform={"uppercase"} gap={4} fontSize={"xs"} fontWeight={"semibold"} letterSpacing={"widest"} >
      {showBars && <Separator w={6} borderColor={color} />}
      <Text {...rest}>{children}</Text>{" "}
      {showBars && <Separator w={6} borderColor={color} />}
    </HStack>
  );
}
