import { useEffect, useState } from "react";

type UseAutoRiskScoreOptions = {
  initialScore?: number;
  intervalMs?: number;
  min?: number;
  max?: number;
  delta?: number;
  paused?: boolean;
};

export function useRiskScore({
  initialScore = 67,
  intervalMs = 3000,
  min = 0,
  max = 100,
  delta = 5,
  paused = false,
}: UseAutoRiskScoreOptions = {}) {
  const [score, setScore] = useState(initialScore);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setScore((prev) => {
        const change = Math.random() * delta * 2 - delta;
        return Math.max(min, Math.min(max, prev + change));
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, [paused, intervalMs, min, max, delta]);

  return {
    score,
    setScore,
  };
}
