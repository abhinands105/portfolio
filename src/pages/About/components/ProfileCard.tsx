import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBrain,
} from "react-icons/fa";

import profile from "../../../assets/images/profile.png";

export default function ProfileCard() {
  return (
    <aside className="profile-card glass neon-border">

      <div className="profile-image-wrapper">

        <img
          src={profile}
          alt="Abhinand S"
          className="profile-image"
        />

        <span className="status-dot" />

      </div>

      <h2>
        Abhinand S
      </h2>

      <h4>
        AI Engineer • Generative AI Developer
      </h4>

      <div className="profile-info">

        <div className="info-row">

          <FaMapMarkerAlt />

          <div>

            <span>Location</span>

            <p>Malappuram, Kerala, India</p>

          </div>

        </div>

        <div className="info-row">

          <FaGraduationCap />

          <div>

            <span>Education</span>

            <p>
              B.Tech Artificial Intelligence &
              Data Science
            </p>

          </div>

        </div>

        <div className="info-row">

          <FaBrain />

          <div>

            <span>Specialization</span>

            <p>
              Generative AI • RAG • Computer Vision
            </p>

          </div>

        </div>

        <div className="info-row">

          <FaEnvelope />

          <div>

            <span>Email</span>

            <p>
              abhinands105@gmail.com
            </p>

          </div>

        </div>

      </div>

      <div className="profile-buttons">

        <a
          href="https://github.com/abhinands105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="primary-btn">

            <FaGithub />

            GitHub

          </button>
        </a>

        <a
          href="https://www.linkedin.com/in/abhinand-s-48154a318"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="secondary-btn">

            <FaLinkedin />

            LinkedIn

          </button>
        </a>

      </div>

    </aside>
  );
}