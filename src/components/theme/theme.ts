import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { abyssinica_sil, afacad } from "./fonts";

const config = defineConfig({
  cssVarsPrefix: "wvui",
  globalCss: {
    "::selection": {
      bg: "primary",
      color: "white",
    },
    "html":{
      scrollBehavior: "smooth"
    }
  },
  theme: {
    tokens: {
      colors: {
        primary: {
          DEFAULT: {
            value: "#0062FF",
            0: { value: "#FFFFFF" },
            50: { value: "#E5EFFF" },
            100: { value: "#CCE0FF" },
            150: { value: "#B2D0FF" },
            200: { value: "#99C0FF" },
            300: { value: "#66A1FF" },
            400: { value: "#3381FF" },
            500: { value: "#0062FF" },
            600: { value: "#004ECC" },
            700: { value: "#003B99" },
            800: { value: "#002766" },
            850: { value: "#001D4D" },
            900: { value: "#001433" },
            950: { value: "#000A1A" },
            1000: { value: "#000000" },
          },
        },
        secondary: {
          DEFAULT: {
            value: "#FFFFFF",
            0: { value: "#FFFFFF" },
            50: { value: "#FAFAFA" },
            100: { value: "#F2F2F2" },
            150: { value: "#EAEAEA" },
            200: { value: "#E0E0E0" },
            300: { value: "#D1D1D1" },
            400: { value: "#BEBEBE" },
            500: { value: "#FFFFFF" },
            600: { value: "#E8E8E8" },
            700: { value: "#D2D2D2" },
            800: { value: "#BDBDBD" },
            850: { value: "#A3A3A3" },
            900: { value: "#7C7C7C" },
            950: { value: "#4A4A4A" },
            1000: { value: "#000000" },
          },
        },
        tertiary: {
          DEFAULT: {
            value: "#000000",
            0: { value: "#FFFFFF" },
            50: { value: "#F2F2F2" },
            100: { value: "#D9D9D9" },
            150: { value: "#BFBFBF" },
            200: { value: "#A6A6A6" },
            300: { value: "#8A8A8A" },
            400: { value: "#6D6D6D" },
            500: { value: "#000000" },
            600: { value: "#1A1A1A" },
            700: { value: "#333333" },
            800: { value: "#4D4D4D" },
            850: { value: "#666666" },
            900: { value: "#808080" },
            950: { value: "#A6A6A6" },
            1000: { value: "#FFFFFF" },
          },
        },
      },
      fonts: {
        heading: { value: `"Abyssinica SIL", serif` }, //${abyssinica_sil.variable}
        body: { value: `"Afacad", sans-serif` }, //${afacad.variable}
        // mono: { value: "" },
        // monospace: { value: "" },
      },
    },
    semanticTokens: {
      colors: {
        bg: { value: "#F6F5F1" },
        "bg.muted": { value: "#e9e9e9d1" },

        primary: {
          solid: { value: "{colors.primary.500}" },
          contrast: { value: "{colors.primary.0}" },
          fg: { value: "{colors.primary.700}" },
          muted: { value: "{colors.primary.100}" },
          subtle: { value: "{colors.primary.50}" },
          emphasized: { value: "{colors.primary.200}" },
          focusRing: { value: "{colors.primary.500}" },
        },
        secondary: {
          solid: { value: "{colors.secondary.500}" },
          contrast: { value: "{colors.secondary.1000}" },
          fg: { value: "{colors.tertiary.700}" },
          muted: { value: "{colors.secondary.100}" },
          subtle: { value: "{colors.secondary.50}" },
          emphasized: { value: "{colors.secondary.200}" },
          focusRing: { value: "{colors.secondary.500}" },
        },
        tertiary: {
          solid: { value: "{colors.tertiary.500}" },
          contrast: { value: "{colors.tertiary.0}" },
          fg: { value: "{colors.secondary.700}" },
          muted: { value: "{colors.tertiary.100}" },
          subtle: { value: "{colors.tertiary.50}" },
          emphasized: { value: "{colors.tertiary.200}" },
          focusRing: { value: "{colors.tertiary.500}" },
        },
      },
    },
    recipes: {
      heading: {
        base: {
          fontWeight: "normal",
        },
      },
      button: {
        defaultVariants: {
          paddingBlock: 0,
        },
        base: {
          rounded: "full",
          fontFamily: "body",
          fontWeight: "medium",
        },
        variants: {
          varient: {
            outline: {
              borderWidth: "22px",
              // color: "primary"
            },
          },
        },
      },
      input: {
        base: {
          rounded: "full",
        },
      },
    },
  },
});

export const SystemTheme = createSystem(defaultConfig, config);
