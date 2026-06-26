import { useEffect, useRef, useState } from "react";

import "./Terminal.css";

import commands from "./commands";
import TerminalOutput from "./TerminalOutput";
import type { TerminalLine } from "./types";

export default function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      id: 0,
      type: "output",
      text: [
        "Welcome to AI Command Terminal",
        "",
        "Available Commands",
        "",
        "about     skills     projects",
        "resume    github     contact",
        "",
        'Type "help" to begin.'
      ],
    },
  ]);

  const [input, setInput] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [lines]);

  function runCommand(value: string) {
    const command = value.trim().toLowerCase();

    if (!command) return;

    const next: TerminalLine[] = [
      {
        id: Date.now(),
        type: "command",
        text: value,
      },
    ];

    // -------- Natural Language --------

    let parsed = command;

    if (
      command.includes("who are you") ||
      command.includes("about")
    ) {
      parsed = "about";
    }

    if (
      command.includes("skill")
    ) {
      parsed = "skills";
    }

    if (
      command.includes("project")
    ) {
      parsed = "projects";
    }

    if (
      command.includes("experience")
    ) {
      parsed = "experience";
    }

    if (
      command.includes("education")
    ) {
      parsed = "education";
    }

    if (
      command.includes("contact")
    ) {
      parsed = "contact";
    }

    if (
      command.includes("github")
    ) {
      parsed = "github";
    }

    if (
      command.includes("linkedin")
    ) {
      parsed = "linkedin";
    }

    if (
      command.includes("resume")
    ) {
      parsed = "resume";
    }

    // -------- Clear --------

    if (parsed === "clear") {
      setLines([]);
      setInput("");

      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });

      return;
    }

    const cmd = commands[parsed];

    if (!cmd) {
      next.push({
        id: Date.now() + 1,
        type: "error",
        text: [
          `"${value}" is not recognized.`,
          "",
          'Type "help" to view commands.',
        ],
      });

      setLines((prev) => [...prev, ...next]);

      setInput("");

      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });

      return;
    }

    const result = cmd.execute();

    next.push({
      id: Date.now() + 2,
      type: result.type ?? "output",
      text: result.output,
    });

    setLines((prev) => [...prev, ...next]);

    setInput("");

    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  }

  return (
    <div
      className="terminal"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Header */}

      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="red" />
          <span className="yellow" />
          <span className="green" />
        </div>

        <div className="terminal-title">
          AI COMMAND TERMINAL
        </div>

        <div className="terminal-status">
          ● ONLINE
        </div>
      </div>

      {/* Body */}

      <div className="terminal-body">

        <div className="terminal-scroll">

          <TerminalOutput lines={lines} />

          <div ref={bottomRef} />

        </div>

        <div className="terminal-input-row">

          <span className="terminal-prompt">
            root@abhinand-ai:~$
          </span>

          <input
            ref={inputRef}
            value={input}
            spellCheck={false}
            autoComplete="off"
            className="terminal-input-box"
            placeholder="help"
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                runCommand(input);
              }
            }}
          />

        </div>

         
      </div>
    </div>
  );
}