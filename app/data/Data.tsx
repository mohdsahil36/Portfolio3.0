// Data.tsx

import { IconBrandLinkedin, IconBrandX, IconMail, IconBrandGithub } from "@tabler/icons-react";
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
      title: "LinkedIn",
      icon: <IconBrandLinkedin size={24} />,
      href: "https://www.linkedin.com/in/mohdsahilsiddiqui",
    },
    {
      title: "X",
      icon: <IconBrandX size={24} />,
      href: "https://www.twitter.com/yourusername",
    },
    {
      title: "Email",
      icon: <IconMail size={24} />,
      href: "mailto:sahil@example.com",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub size={24} />,
      href: "https://www.github.com/yourusername",
    },
  ],
};
