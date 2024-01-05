import Link from "next/link";
import React from "react";
import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

const SocialLink = ({ platform, link }: { platform: string; link: string }) => {
  //creating a function to get the icon
  const getIcon = (platform: string) => {
    switch (platform) {
      case "twitter":
        return <Twitter size={18} />;
      case "linkedin":
        return <Linkedin size={18} />;
      case "instagram":
        return <Instagram size={18} />;
      case "github":
        return <Github size={18} />;
    }
  };
  return <Link href={link}>{getIcon(platform)}</Link>;
};

export default SocialLink;
