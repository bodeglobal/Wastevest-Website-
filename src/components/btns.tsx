import { Button, ButtonProps } from "@chakra-ui/react";
import ArrowRight from "./arrow-right";
import { ReactElement } from "react";

type BtnProps = Omit<ButtonProps, "children"> & {
  showArrow?: boolean;
  children?: ReactElement<string> | string;
};

export function BookConsult({
  showArrow,
  children = "Book a Consultation",
  ...btnProps
}: BtnProps) {
  return (
    <Button colorPalette={"primary"} {...btnProps}>
      {children} {showArrow && <ArrowRight />}{" "}
    </Button>
  );
}

export function PartnerWithUs({
  showArrow,
  children = "Partner with Us",
  ...btnProps
}: BtnProps) {
  return (
    <Button  {...btnProps}>
      {children} {showArrow && <ArrowRight />}
    </Button>
  );
}

export function SchedulePickup({
  showArrow,
  children = "Schedule a Pickup",
  ...btnProps
}: BtnProps) {
  return (
    <Button {...btnProps}>
      {children} {showArrow && <ArrowRight />}
    </Button>
  );
}

export function ScheduleRecyling({
  showArrow,
  children = "Schedule Recycling",
  ...btnProps
}: BtnProps) {
  return (
    <Button {...btnProps}>
      {children} {showArrow && <ArrowRight />}
    </Button>
  );
}
