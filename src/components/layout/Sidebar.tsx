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
    <aside
      style={{
        width: "88px",
        height: "100dvh",
        position: "fixed",
        left: 0,
        top: 0,
        background: "#050510",
        borderRight: "1px solid rgba(157,78,221,0.15)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      {/* Logo */}
      <div
        style={{
          marginTop: "18px",
          marginBottom: "30px",
          fontSize: "48px",
          fontWeight: 800,
          color: "#9d4edd",
          textShadow: "0 0 20px rgba(157,78,221,.7)",
        }}
      >
        A
      </div>

      {/* Menu */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={({ isActive }) => ({
              width: "64px",
              height: "58px",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              textDecoration: "none",
              color: isActive ? "#ffffff" : "#bcbcbc",
              border: isActive
                ? "1px solid rgba(157,78,221,.8)"
                : "1px solid rgba(255,255,255,.05)",
              background: isActive
                ? "rgba(157,78,221,.15)"
                : "transparent",
              boxShadow: isActive
                ? "0 0 20px rgba(157,78,221,.25)"
                : "none",
              transition: "all .25s ease",
            })}
          >
            {item.icon}

            <span
              style={{
                fontSize: "9px",
                letterSpacing: ".5px",
                fontWeight: 600,
              }}
            >
              {item.name}
            </span>
          </NavLink>
        ))}
      </div>

      {/* Socials */}
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          marginBottom: "25px",
        }}
      >
        <a
          href="https://github.com/abhinands105"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#9d4edd" }}
        >
          <FiGithub size={22} />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#9d4edd" }}
        >
          <FiLinkedin size={22} />
        </a>

        <a
          href="#"
          style={{ color: "#9d4edd" }}
        >
          <FiTwitter size={22} />
        </a>

        <a
          href="mailto:abhinands105@gmail.com"
          style={{ color: "#9d4edd" }}
        >
          <FiMail size={22} />
        </a>
      </div>

      {/* Theme Button */}
      <button
        style={{
          marginBottom: "20px",
          width: "54px",
          height: "54px",
          borderRadius: "50%",
          border: "1px solid rgba(157,78,221,.4)",
          background: "rgba(157,78,221,.08)",
          color: "#9d4edd",
          cursor: "pointer",
        }}
      >
        <FiSun size={22} />
      </button>
    </aside>
  );
}