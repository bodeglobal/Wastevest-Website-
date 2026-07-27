import { Button, ButtonProps } from "@chakra-ui/react";
import { LuArrowRight } from "react-icons/lu";

export function BookBode({showArrow, ...btnProps}: ButtonProps & {showArrow?: boolean}){
    return <Button {...btnProps}>Book Bode {showArrow  && <LuArrowRight />} </Button>
}

export function PartnerWithUs({ showArrow,  ...btnProps}: ButtonProps &  {showArrow?: boolean}){
    return <Button {...btnProps}>Partner with Us  {showArrow  && <LuArrowRight />} </Button>
}