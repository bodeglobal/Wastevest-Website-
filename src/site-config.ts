export const SiteConfig = {
  name: "Wastevest Technologies",
  url: process.env.SITE_URL ?? "https://wastevest.com",
  description:
    "A Pan-African climate and sustainability organization driving Africa's just transition",
  logo: {
    full: "/assets/logo/wv-logo.svg",
    iconOnly: "",
    white: "/assets/logo/wv-logo-white.png",
  },
  contact: {
    emails: ["", ""],
    mobileNumber: ["", ""],
    socials: {
      fb: { href: "", iconUrl: "" },
      in: { href: "", iconUrl: "" },
      ig: { href: "", iconUrl: "" },
      x: { href: "", iconUrl: "" },
    },
  },
};
