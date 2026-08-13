interface Props {
  title: string;
  score: number;
}

export default function ScoreCard({
  title,
  score,
}: Props) {
  return (
    <div className="score-card">

      <div className="score-header">
        <span>{title}</span>
        <span>{score}%</span>
      </div>

      <div className="progress">

        <div
          className="progress-fill"
          style={{
            width: `${score}%`,
          }}
        />

      </div>

    </div>
  );
}