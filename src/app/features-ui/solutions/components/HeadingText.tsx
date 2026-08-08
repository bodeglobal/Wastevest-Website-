"use client";
import { type HeadingProps, Heading } from "@chakra-ui/react";

export function SectionTitle(props: HeadingProps) {
  return (
    <Heading
      size={{ mdDown: { _portrait: "4xl", _landscape: "3xl" }, md: "4xl" }}
      fontSize={{ mdDown: { _portrait: "4xl", _landscape: "3xl" }, md: "4xl" }}
      maxW={"4xl"}
      {...props}
    />
  );
}
