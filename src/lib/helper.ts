export const getRiskColor = (score: number) => {
  if (score >= 85) return "#FF3366";
  if (score >= 70) return "#FFB800";
  return "#00C896";
};

export const formatScore = (score: string | number) => {
  if (typeof score === "number") return score.toFixed(0);
  return score;
};
