import type { Metadata } from "next";

import AppProvider from "@/app/providers/app-provider";
import Footer from "@/components/footer/footer";
import NavigationBar from "@/components/navbar/navbar";
import { abyssinica_sil, afacad } from "@/components/theme/fonts";
import { SiteConfig } from "@/site-config";

// App Router layout.tsx
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Optional: Prevents layout snapping during accidental zoom
};

export const metadata: Metadata = {
  title: SiteConfig.name,
  description: SiteConfig.description,
  authors: {
    name: "epicdevler | Nwadike Philip",
    url: "https://linkedin.com/in/nwadikephilip",
  },
  keywords: [
    "climate",
    "pan-africa",
    "sustainability",
    "waste management",
    "carbon reduction",
    "climate action",
  ],
  openGraph: {
    type: "website",
    title: SiteConfig.name,
    description: SiteConfig.description,
    siteName: SiteConfig.name,
    countryName: "NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      // className={`${abyssinica_sil.className} ${afacad.className}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Abyssinica+SIL&family=Afacad:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppProvider>
          {/* <NavigationBar /> */}
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
