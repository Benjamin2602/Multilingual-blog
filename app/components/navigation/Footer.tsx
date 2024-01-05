import siteConfig from "@/config/site";
import PaddingContainer from "../layout/PaddingContainer";
import SocialLink from "../elements/SocialLink";

const Footer = () => {
  return (
    <div className="py-6 mt-10 border-t">
      <PaddingContainer>
        <div>
          <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
          <p className="max-w-md mt-2 text-neutral-700">
            {siteConfig.description}
          </p>
        </div>
        {/* social and currently at */}
        <div className="flex flex-wrap justify-between gap-4 mt-6">
          <div>
            <div className="font-medium text-lg">#ExploreTheWorld</div>
            <div className="flex items-center gap-3 mt-2 text-neutral-600">
              <SocialLink
                platform="twitter"
                link={siteConfig.socialLinks.twitter}
              />
              <SocialLink
                platform="linkedin"
                link={siteConfig.socialLinks.linkedin}
              />
              <SocialLink
                platform="instagram"
                link={siteConfig.socialLinks.instagram}
              />
              <SocialLink
                platform="github"
                link={siteConfig.socialLinks.github}
              />
            </div>
          </div>
          {/* currently at section */}
          <div className="">
            <div className="text-sm text-neutral-400">Currently At</div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-md shadow-md">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              {siteConfig.currentlyAt}
            </div>
          </div>
        </div>
        {/* bottom section */}
        <div className=" flex flex-wrap items-center justify-between gap-4 py-3 border-t mt-16">
          <div className="text-sm text-neutral-400">
            Al rights are reserved | copyright {new Date().getFullYear()}
          </div>
          <div className="text-sm">Made with love by @ben</div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Footer;
