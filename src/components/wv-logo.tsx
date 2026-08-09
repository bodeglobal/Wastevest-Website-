import { SiteConfig } from "@/site-config";
import { Box, BoxProps, Icon, IconProps } from "@chakra-ui/react";
import Image from "next/image";

export default function WVLogo({
  iconOnly,
  useWhite,
  ...imgProps
}: BoxProps & { iconOnly?: boolean; useWhite?: boolean }) {
  return (
    <Box {...imgProps} asChild>
      {iconOnly ? (
        <Image
          width={1080}
          height={1080}
          quality={100}
          src={SiteConfig.logo.iconOnly}
          alt="WasteVest Logo"
          // style={{ width: "auto", height: "auto" }}
          // loading="eager"
        />
      ) : (
        <Image
          width={1080}
          height={1080}
          quality={100}
          src={SiteConfig.logo.full}
          alt="WasteVest Logo"
          // style={{ width: "auto", height: "auto" }}
          // loading="eager"
        />
      )}
      {/* {iconOnly && (
        <Icon asChild {...imgProps}>
          <svg>
            <use href={SiteConfig.logo.iconOnly} />
          </svg>
        </Icon>
      )}
      {!iconOnly && (
        <Icon asChild viewBox="0 0 3603.13 866.1" {...imgProps}>
          <svg>
            <use href={SiteConfig.logo.full} />
          </svg>
        </Icon>
      )} */}
    </Box>
  );
}
