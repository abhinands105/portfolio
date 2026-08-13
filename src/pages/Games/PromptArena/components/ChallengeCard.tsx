import type { Challenge } from "../types/Prompt";

interface Props {
  challenge: Challenge;
}

export default function ChallengeCard({ challenge }: Props) {
  return (
    <div className="challenge-card">
      <h2>{challenge.title}</h2>

      <p>{challenge.description}</p>

      <span>{challenge.category}</span>
    </div>
  );
}