import { ThemeProvider } from "@/components/provider";
import { PropsWithChildren } from "react";

export default function AppProvider({ children }: PropsWithChildren) {
  return <ThemeProvider children={children} />;
}
