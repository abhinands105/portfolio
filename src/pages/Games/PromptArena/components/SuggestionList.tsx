interface Props {
  suggestions: string[];
}

export default function SuggestionList({
  suggestions,
}: Props) {
  if (suggestions.length === 0) {
    return (
      <div className="suggestions">
        <h3>Suggestions</h3>

        <p>🎉 Excellent prompt!</p>
      </div>
    );
  }

  return (
    <div className="suggestions">

      <h3>Suggestions</h3>

      <ul>
        {suggestions.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>

    </div>
  );
}