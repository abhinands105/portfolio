import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiFolder,
  FiCode,
  FiBriefcase,
  FiBookOpen,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiSun,
} from "react-icons/fi";

import { IoGameControllerOutline } from "react-icons/io5";
import "./Sidebar.css";

const menuItems = [
  { name: "HOME", path: "/", icon: <FiHome size={22} /> },
  { name: "ABOUT", path: "/about", icon: <FiUser size={22} /> },
  { name: "PROJECTS", path: "/projects", icon: <FiFolder size={22} /> },
  { name: "SKILLS", path: "/skills", icon: <FiCode size={22} /> },
  { name: "EXPERIENCE", path: "/experience", icon: <FiBriefcase size={22} /> },
  { name: "GAMES", path: "/games", icon: <IoGameControllerOutline size={22} /> },
  { name: "BLOG", path: "/blog", icon: <FiBookOpen size={22} /> },
  { name: "CONTACT", path: "/contact", icon: <FiMail size={22} /> },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        A
      </div>

      {/* Menu */}
      <nav className="sidebar-menu" aria-label="Primary navigation">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-item${isActive ? " sidebar-item--active" : ""}`
            }
          >
            {item.icon}

            <span>
              {item.name}
            </span>
          </NavLink>
        ))}
      </nav>

      {/* Socials */}
      <div className="sidebar-socials">
        <a
          href="https://github.com/abhinands105"
          target="_blank"
          rel="noreferrer"
          className="sidebar-social-link"
        >
          <FiGithub size={22} />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="sidebar-social-link"
        >
          <FiLinkedin size={22} />
        </a>

        <a
          href="#"
          className="sidebar-social-link"
        >
          <FiTwitter size={22} />
        </a>

        <a
          href="mailto:abhinands105@gmail.com"
          className="sidebar-social-link"
        >
          <FiMail size={22} />
        </a>
      </div>

      {/* Theme Button */}
      <button className="sidebar-theme-button" aria-label="Theme settings">
        <FiSun size={22} />
      </button>
    </aside>
  );
}
