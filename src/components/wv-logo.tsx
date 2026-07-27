import { SiteConfig } from "@/site-config";
import { Box, BoxProps } from "@chakra-ui/react";
import Image from "next/image";

export default function WVLogo({
  iconOnly,
  useWhite,
  ...imgProps
}: BoxProps & { iconOnly?: boolean, useWhite?: boolean }) {
  return (
    <Box {...imgProps} asChild>
      <Image
        width={1080}
        height={1080}
        src={useWhite ? SiteConfig.logo.white : iconOnly ? SiteConfig.logo.iconOnly : SiteConfig.logo.full}
        alt="WasteVest Logo"
        // style={{ width: "auto", height: "auto" }}
        loading="eager"
      />
    </Box>
  );
}
