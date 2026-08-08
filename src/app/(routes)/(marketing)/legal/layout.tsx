import { FinalCTA } from "@/components/footer/final-cta";
import NavigationBar from "@/components/navbar/navbar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavigationBar bg="bg" /* bgOpacity={70} */ />
      {children}
      <FinalCTA />
    </>
  );
}
