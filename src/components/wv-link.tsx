import { Text, TextProps } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";
import ArrowRight from "./arrow-right";

type Props = {
  href: string;
  children: ReactNode;
  hideArrow?: boolean;
  targetBlank?: boolean;
} & Omit<TextProps, "children">;
export default function WVLink({
  href,
  children,
  hideArrow,
  targetBlank,
  ...txtProps
}: Props) {
  return (
    <Text
      asChild
      borderBottomWidth={"thin"}
      fontSize={"sm"}
      py={1}
      borderColor={txtProps.color}
      {...txtProps}
    >
      <Link href={href} target={targetBlank ? "_blank" : undefined}>
        {children} {!hideArrow && <ArrowRight />}
      </Link>
    </Text>
  );
}
