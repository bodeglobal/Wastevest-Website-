"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { SystemTheme } from "./theme/theme";

export function ThemeProvider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={SystemTheme}>
      <ColorModeProvider enableSystem={false} {...props} />
    </ChakraProvider>
  );
}
