import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          DEFAULT: {
            value: "green",
            50: { value: "" },
            100: { value: "" },
            200: { value: "" },
            300: { value: "" },
            400: { value: "" },
            500: { value: "green" },
            600: { value: "" },
            700: { value: "" },
            800: { value: "" },
            900: { value: "" },
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
        heading: { value: "" },
        body: { value: "" },
        mono: { value: "" },
        monospace: { value: "" },
      },
    },
  },
});

const SystemTheme = createSystem(defaultConfig, config);
