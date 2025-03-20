export const siteConfig = {
  name: "Modulino",
  url: process.env.SITE_URL,
  description: process.env.SITE_DESCRIPTION,
  links: {
    github: process.env.GITHUB_LINK as string,
  },
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};
