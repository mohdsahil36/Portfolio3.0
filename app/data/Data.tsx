// Data.tsx

import {
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
  IconBrandGithub,
  IconHome,
  IconFileText,
} from "@tabler/icons-react";
import React from "react";

// Define an interface for type-checking
interface UserData {
  name: string;
  intro: string;
  about: string;
  icons: {
    title: string;
    icon: React.ReactNode;
    href: string;
  }[];
}

export const Data: UserData = {
  name: "Sahil",
  intro:
    "Currently rocking frontend development and on my way to becoming a full-stack developer. Always up for learning new tech and exploring new challenges!",
  about:
    "🚀 Hey there! I’m your friendly neighborhood frontend wizard with 2.6+ years of experience and a B.Tech in Computer Science from SRM Institute of Science and Technology 🎓. I blend creativity with tech savvy, honed through my gigs at Merkle and Highradius Technologies 🛠️.\n\n" +
    "I’m all about crafting smooth user experiences with HTML, CSS, JavaScript, React.js, and Node.js, and I’m always keeping up with the latest tech trends to keep my skills sharp 🔧. I pride myself on delivering results on time, whether it’s enhancing website performance or adding a touch of magic to the user interface 📈.\n\n" +
    "When I’m not busy coding, I’m probably vibing to music or diving into new tech adventures 🚀. Let’s connect and see what amazing things we can create together! 🎉",
  // Icons data
  icons: [
    {
      title: "Home",
      icon: <IconHome size={24} />,
      href: "https://www.linkedin.com/in/mohdsahilsiddiqui",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin size={24} />,
      href: "https://www.linkedin.com/in/mohd-sahil-siddiqui-021a11201/",
    },
    {
      title: "X",
      icon: <IconBrandX size={24} />,
      href: "https://x.com/LuciFeR8382",
    },
    {
      title: "Email",
      icon: <IconMail size={24} />,
      href: "mailto:mohdsahilsiddiqui36@gmail.com",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub size={24} />,
      href: "https://github.com/mohdsahil36?tab=overview&from=2024-08-01&to=2024-08-24",
    },
    {
      title: "Resume",
      icon: <IconFileText size={24} />,
      href: "https://drive.google.com/file/d/1X7dvLlSSXNwVd9YrRTydU42cCbeUGp0x/view?usp=drive_link",
    },
  ],
};
