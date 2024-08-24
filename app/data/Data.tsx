// Data.tsx

import { IconBrandLinkedin, IconBrandX, IconMail, IconBrandGithub,IconHome,IconFileText} from "@tabler/icons-react";
import React from "react";

// Define an interface for type-checking
interface UserData {
  name: string;
  icons: {
    title: string;
    icon: React.ReactNode;
    href: string;
  }[];
}

export const Data: UserData = {
  name: 'Mohd Sahil Siddiqui',
  
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
