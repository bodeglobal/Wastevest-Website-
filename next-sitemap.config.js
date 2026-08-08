const siteUrl = process.env.SITE_URL || "https://wastevest.com";

/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ["/s"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
