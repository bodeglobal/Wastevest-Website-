import {
  ButtonGroup,
  ButtonGroupProps,
  Group,
  GroupProps,
  IconButton,
} from "@chakra-ui/react";
import { WVIcons } from "./wv-icons";
import WVLink from "./wv-link";

export default function SocialIcons(props: ButtonGroupProps) {
  const {_hover, ...rest} = props
  return (
    <ButtonGroup variant="ghost" {...rest}>
      <IconButton asChild _hover={_hover}>
        <WVLink hideArrow href="/follow/ig">
          <WVIcons.IG />
        </WVLink>
      </IconButton>
      <IconButton asChild _hover={_hover}>
        <WVLink hideArrow href="/follow/linkedin">
          <WVIcons.LinkedIn />
        </WVLink>
      </IconButton>
      <IconButton asChild _hover={_hover}>
        <WVLink hideArrow href="/follow/x">
          <WVIcons.X />
        </WVLink>
      </IconButton>
    </ButtonGroup>
  );
}
