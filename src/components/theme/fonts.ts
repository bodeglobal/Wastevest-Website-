import { Abyssinica_SIL, Afacad } from "next/font/google";

export const afacad = Afacad({
  variable: "--font-afacad",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const abyssinica_sil = Abyssinica_SIL({
  variable: "--font-abyssinica",
  weight: ["400"],
  subsets: ["latin"],
});
