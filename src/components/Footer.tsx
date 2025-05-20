import React from "react";
import { SocialIcon } from "react-social-icons";
import { SOCIAL_LINKS } from "../links.ts";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-white text-gray-800 py-6 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <p className="text-sm">© 2025 by Uroš Ognjenović</p>
        <div className="flex items-center space-x-4">
          <SocialIcon
            url={SOCIAL_LINKS.LINKEDIN_LINK}
            target="_blank"
            className="w-5 h-5 transition-transform duration-200 hover:scale-110"
          />
          <SocialIcon
            url={SOCIAL_LINKS.GITHUB_LINK}
            target="_blank"
            className="w-5 h-5 transition-transform duration-200 hover:scale-110"
          />
          <SocialIcon
            url={SOCIAL_LINKS.X_LINK}
            target="_blank"
            className="w-5 h-5 transition-transform duration-200 hover:scale-110"
          />
        </div>
        <a href="#" className="text-sm text-black hover:text-blue-600">
          Back to top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
