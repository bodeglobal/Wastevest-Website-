import { Button, ButtonProps } from "@chakra-ui/react";
import ArrowRight from "./arrow-right";

export function BookBode({
  showArrow,
  ...btnProps
}: ButtonProps & { showArrow?: boolean }) {
  return (
    <Button {...btnProps}>Book Bode {showArrow && <ArrowRight />} </Button>
  );
}

export function PartnerWithUs({
  showArrow,
  ...btnProps
}: ButtonProps & { showArrow?: boolean }) {
  return (
    <Button {...btnProps}>Partner with Us {showArrow && <ArrowRight />}</Button>
  );
}
