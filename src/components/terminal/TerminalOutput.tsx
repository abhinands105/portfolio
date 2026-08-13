import type { TerminalLine } from "./types";

interface TerminalOutputProps {
  lines: TerminalLine[];
}

export default function TerminalOutput({
  lines,
}: TerminalOutputProps) {
  return (
    <div className="terminal-output">
      {lines.map((line) => (
        <div key={line.id} className={`terminal-line ${line.type}`}>
          {line.type === "command" && (
            <div className="terminal-command">
              <span className="terminal-prompt">
                root@abhinand-ai:~$
              </span>

              <span className="terminal-input">
                {line.text as string}
              </span>
            </div>
          )}

          {line.type !== "command" && (
            <div className="terminal-response">
              {Array.isArray(line.text)
                ? line.text.map((item, index) => (
                    <div
                      key={index}
                      className="terminal-response-line"
                    >
                      {item}
                    </div>
                  ))
                : (
                  <div className="terminal-response-line">
                    {line.text}
                  </div>
                )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}