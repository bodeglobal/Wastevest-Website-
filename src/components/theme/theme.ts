import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { abyssinica_sil, afacad } from "./font";

console.log("Fonts: ", abyssinica_sil.variable, afacad.variable);

const config = defineConfig({
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
            value: "orange",
            50: { value: "" },
            100: { value: "" },
            200: { value: "" },
            300: { value: "" },
            400: { value: "" },
            500: { value: "orange" },
            600: { value: "" },
            700: { value: "" },
            800: { value: "" },
            900: { value: "" },
          },
        },
        tertiary: {
          DEFAULT: {
            value: "gold",
            50: { value: "" },
            100: { value: "" },
            200: { value: "" },
            300: { value: "" },
            400: { value: "" },
            500: { value: "gold" },
            600: { value: "" },
            700: { value: "" },
            800: { value: "" },
            900: { value: "" },
          },
        },
      },
      fonts: {
        heading: { value: `var(--font-abyssinica)` }, //${abyssinica_sil.variable}
        body: { value: `var(--font-afacad)` }, //${afacad.variable}
        // mono: { value: "" },
        // monospace: { value: "" },
      },
    },
    semanticTokens: {
      colors: {
        bg: { value: "#F6F5F1" },
        "bg.muted": { value: "#e9e9e9d1" },
      },
    },
    recipes: {
      heading: {
        base: {
          fontWeight: "normal",
        },
      },
      button: {
        base: {
          rounded: "full",
          px: "6",
          py: "5",
          fontFamily: "body",
          fontWeight: 600,
        },
        variants: {
          outline: {
            base: {
              borderWidth: "2px",
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
