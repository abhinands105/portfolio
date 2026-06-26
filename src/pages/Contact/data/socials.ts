export interface SocialLink {
  id: number;
  name: string;
  icon: string;
  username: string;
  url: string;
  color: string;
}

export const socials: SocialLink[] = [
  {
    id: 1,
    name: "GitHub",
    icon: "🐙",
    username: "@abhinands105",
    url: "https://github.com/abhinands105",
    color: "#6e40c9",
  },

  {
    id: 2,
    name: "LinkedIn",
    icon: "💼",
    username: "Abhinand S",
    url: "https://www.linkedin.com/in/abhinand-s-48154a318/",
    color: "#0077B5",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: "🌐",
    username: "AI Portfolio",
    url: "https://abhinands105.github.io/abhinand-portfolio/",
    color: "#06b6d4",
  },

  {
    id: 4,
    name: "Email",
    icon: "✉️",
    username: "abhinands105@gmail.com",
    url: "mailto:abhinands105@gmail.com",
    color: "#ef4444",
  },

  {
    id: 5,
    name: "Phone",
    icon: "📱",
    username: "+91 92070 29155",
    url: "tel:+919207029155",
    color: "#22c55e",
  },

  {
    id: 6,
    name: "Location",
    icon: "📍",
    username: "Malappuram, Kerala",
    url: "#",
    color: "#f59e0b",
  },
];