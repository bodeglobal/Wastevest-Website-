import { FinalCTA } from "@/components/footer/final-cta";
import NavigationBar from "@/components/navbar/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavigationBar bg="bg" /* bgOpacity={70} */ />
      {children}
      <FinalCTA />
    </>
  );
}
