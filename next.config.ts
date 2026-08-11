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
      destination: "https://google.com",
      permanent: false,
    },
    {
      source: "/follow/ig",
      destination:
        "https://www.instagram.com/hellowastevest?utm_source=wastevest.com",
      permanent: false,
    },
    {
      source: "/follow/linkedin",
      destination:
        "https://www.linkedin.com/company/wastevesttechnologieslimited/",
      permanent: false,
    },
    {
      source: "/follow/x",
      destination: "https://x.com/hellowastevest",
      permanent: false,
    },
    {
      source: "/bode-in-action",
      destination: "https://youtu.be/bU09zqKFANQ?si=XzJ_RHSU5eX7Hb49",
      permanent: false,
    },
    {
      source: "/voluteer",
      destination: "https://chat.whatsapp.com/KHaki2J7uOk916An2viFYR?mode=gi_t",
      permanent: false,
    },
    {
      source: "/starting-petition",
      // destination:
      //   "https://www.opinionnigeria.com/olabode-afurewaju-this-is-why-i-am-petitioning-the-abuja-environment-protection-board-to-keep-abuja-motor-parks-clean-by-ebenezar-wikina/",
      destination:
        "https://www.thenigerianvoice.com/news/321933/this-is-why-i-am-petitioning-the-abuja-environment-protectio.html",
      permanent: false,
    },
    {
      source: "/about/annual-report",
      destination: "/assets/documents/20252026-ANNUAL-IMPACT-REPORT.pdf",
      // destination: "https://www.thenigerianvoice.com/news/321933/this-is-why-i-am-petitioning-the-abuja-environment-protectio.html",
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
