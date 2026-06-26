export interface TerminalLine {
  id: number;
  type: "command" | "output" | "error";
  text: string | string[];
}

export interface CommandResult {
  type?: "output" | "error";
  output: string | string[];
}

export interface Command {
  name: string;
  description: string;
  aliases?: string[];
  execute: () => CommandResult;
}

export interface Knowledge {
  about: string[];
  skills: string[];
  projects: string[];
  experience: string[];
  education: string[];
  contact: string[];
  github: string;
  linkedin: string;
  resume: string;
}

export type CommandMap = Record<string, Command>;