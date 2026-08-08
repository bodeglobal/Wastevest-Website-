import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export',
  reactCompiler: true,
  experimental: {
    viewTransition: true,
    inlineCss: true,
  },
  allowedDevOrigins: ["192.168.0.2", "192.168.0.3"],
  compiler: {
    removeConsole: process.env.NODE_ENV == "production",
  },
  redirects: () => [
    {
      source: "/newsletters",
      destination:
        "https://google.com",
      permanent: false,
    },
    {
      source: "/bode-in-action",
      destination: "https://youtu.be/bU09zqKFANQ?si=XzJ_RHSU5eX7Hb49",
      permanent: false,
    },
    {
      source: "/partner-with-us",
      destination: "https://google.com",
      permanent: false,
    },
    {
      source: "/starting-petition",
      destination:
        "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7358445961641189377",
      permanent: false,
    },
    {
      source: "/about/annual-report",
      destination: "/assets/documents/20252026-ANNUAL-IMPACT-REPORT.pdf",
      permanent: false,
    },
    {
      source: "/routebeacon/partner",
      destination: "https://google.com",
      permanent: false,
    },
    {
      source: "/routebeacon/service-partner",
      destination: "https://google.com",
      permanent: false,
    },
    {
      source: "/routebeacon/schedule-pickup",
      destination: "/routebeacon/schedule-recycling",
      permanent: false,
    },
    {
      source: "/routebeacon/schedule-recycling",
      destination:
        "https://api.whatsapp.com/send/?phone=2347072226898&text=Hello+Bode&type=phone_number&app_absent=0",
      permanent: false,
    },
    {
      source: "/book-consultation",
      destination: "https://calendly.com/hello-wastevest/30min",
      permanent: false,
    },
    {
      source: "/s/carbon-litracy-training/book-call",
      destination: "https://calendly.com/hello-wastevest/30min",
      permanent: false,
    },
    {
      source: "/s/carbon-litracy-training/join-training",
      destination: "https://forms.cloud.microsoft/r/ynLexsdyKw",
      permanent: false,
    },
  ],
};

export default nextConfig;
