
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import { Mail } from "lucide-react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

type SocialProps = {
  label: string;
  href: string;
  icon: IconType | LucideIcon;
};

export const email = "your@email.com";

export const socials: SocialProps[] = [
  {
    label: "Email",
    href: `mailto:${email}`,
    icon: Mail,
  },
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
  {
    label: "YouTube",
    href: "https://youtube.com/@your-channel",
    icon: FaYoutube,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/your-username",
    icon: FaInstagram,
  },
];