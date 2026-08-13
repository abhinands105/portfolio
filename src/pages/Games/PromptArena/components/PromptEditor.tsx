interface Props {
  value: string;
  onChange: (value: string) => void;
  onEvaluate: () => void;
}

export default function PromptEditor({
  value,
  onChange,
  onEvaluate,
}: Props) {
  return (
    <div className="prompt-editor">

      <textarea
        rows={8}
        placeholder="Write your prompt..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <button onClick={onEvaluate}>
        Evaluate Prompt
      </button>

    </div>
  );
}