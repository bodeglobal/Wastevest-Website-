import { Button, ButtonProps } from "@chakra-ui/react";
import ArrowRight from "./arrow-right";
import { ReactElement } from "react";
import WVLink from "./wv-link";

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
    <Button colorPalette={"primary"} {...btnProps} asChild>
      <WVLink href="/book-consultation" targetBlank hideArrow={!showArrow}>
        {children}
      </WVLink>
    </Button>
  );
}

export function PartnerWithUs({
  showArrow,
  children = "Partner with Us",
  href = "/partner-with-us",
  ...btnProps
}: BtnProps & { href?: string }) {
  return (
    <Button {...btnProps} asChild>
      {/* {children} {showArrow && <ArrowRight />} */}
      <WVLink href={href} targetBlank hideArrow={!showArrow}>
        {children}
      </WVLink>
    </Button>
  );
}

export function SchedulePickup({
  showArrow,
  children = "Schedule a Pickup",
  ...btnProps
}: BtnProps) {
  return (
    <Button {...btnProps} asChild>
      {/* {children} {showArrow && <ArrowRight />} */}
      <WVLink
        href="/routebeacon/schedule-pickup"
        targetBlank
        hideArrow={!showArrow}
      >
        {children}
      </WVLink>
    </Button>
  );
}

export function ScheduleRecyling({
  showArrow,
  children = "Schedule Recycling",
  ...btnProps
}: BtnProps) {
  return (
    <Button {...btnProps} asChild>
      <WVLink
        href="/routebeacon/schedule-recycling"
        targetBlank
        hideArrow={!showArrow}
      >
        {children}
      </WVLink>
    </Button>
  );
}
