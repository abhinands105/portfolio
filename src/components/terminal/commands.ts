import knowledge from "./knowledge";
import type { CommandMap } from "./types";

export const commands: CommandMap = {
  help: {
    name: "help",
    description: "Show available commands",
    execute: () => ({
      output: [
        "Available Commands",
        "",
        "about        → About me",
        "skills       → Technical skills",
        "projects     → Featured projects",
        "experience   → Experience",
        "education    → Education",
        "contact      → Contact details",
        "github       → GitHub profile",
        "linkedin     → LinkedIn profile",
        "resume       → Resume",
        "clear        → Clear terminal",
        "",
        "You can also ask:",
        '• "Who are you?"',
        '• "Tell me about your projects"',
        '• "What are your skills?"'
      ]
    })
  },

  about: {
    name: "about",
    description: "About me",
    execute: () => ({
      output: knowledge.about
    })
  },

  skills: {
    name: "skills",
    description: "Technical skills",
    execute: () => ({
      output: knowledge.skills
    })
  },

  projects: {
    name: "projects",
    description: "Featured projects",
    execute: () => ({
      output: knowledge.projects
    })
  },

  experience: {
    name: "experience",
    description: "Experience",
    execute: () => ({
      output: knowledge.experience
    })
  },

  education: {
    name: "education",
    description: "Education",
    execute: () => ({
      output: knowledge.education
    })
  },

  contact: {
    name: "contact",
    description: "Contact details",
    execute: () => ({
      output: knowledge.contact
    })
  },

  github: {
    name: "github",
    description: "GitHub profile",
    execute: () => ({
      output: [
        "GitHub",
        "",
        knowledge.github
      ]
    })
  },

  linkedin: {
    name: "linkedin",
    description: "LinkedIn profile",
    execute: () => ({
      output: [
        "LinkedIn",
        "",
        knowledge.linkedin
      ]
    })
  },

  resume: {
    name: "resume",
    description: "Resume",
    execute: () => ({
      output: [
        "Resume",
        "",
        knowledge.resume
      ]
    })
  },

  clear: {
    name: "clear",
    description: "Clear terminal",
    execute: () => ({
      output: []
    })
  }
};

export default commands;