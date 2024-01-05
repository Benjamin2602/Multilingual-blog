export interface SiteConfig {
  siteName: string;
  description: string;
  currentlyAt: string;
  socialLinks: {
    instagram: string;
    linkedin: string;
    github: string;
    twitter: string;
  };
}

const siteConfig = {
  siteName: "Explorer",
  description:
    "A minimal and lovable travel blog  which shares the experience of the cities around the world",
  currentlyAt: "Chennai , India",
  socialLinks: {
    instagram: "https://www.instagram.com/benjamin._.samuel/",
    linkedin: "https://www.linkedin.com/in/benjamin-samuel-173a00222/",
    github: "https://github.com/Benjamin2602",
    twitter: "https://twitter.com/Benjamin2602sam",
  },
};

export default siteConfig;
