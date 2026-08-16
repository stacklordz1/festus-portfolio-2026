import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";

type SocialProps = {
  label: string;
  href: string;
  icon:IconType ;
};

export const socials: SocialProps[] = [
  {
    label: "GitHub",
    href: "https://github.com/your-username",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-username",
    icon: FaLinkedinIn,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/your-username",
    icon: FaXTwitter,
  },
];
