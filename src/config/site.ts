export const siteConfig = {
  name: "modulino",
  url: process.env.SITE_URL,
  description: process.env.SITE_DESCRIPTION,
  links: {
    github:
      (process.env.GITHUB_LINK as string) ||
      "https://github.com/7591yj/modulino",
  },
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};
