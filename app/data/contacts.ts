
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

export const email = "chidubemoffiaukwu2@gmail.com";

export const socials: SocialProps[] = [
  {
    label: "Email",
    href: `mailto:${email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/stacklordz1",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chidubem-festus-jnr-offiaukwu-5565643a5/",
    icon: FaLinkedinIn,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/@festus_jnr08",
    icon: FaXTwitter,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@festus_dev",
    icon: FaYoutube,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/buildwithfestus",
    icon: FaInstagram,
  },
];