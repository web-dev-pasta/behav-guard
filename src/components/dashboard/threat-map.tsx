import { maxCount, threats } from "@/constants/constants";

function ThreatMap() {
  return (
    <div className="bg-muted relative h-50 w-full overflow-hidden rounded-lg border dark:border-white/10 dark:bg-[#0A0E27]">
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 800 400" className="h-full w-full">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(0,212,255,0.1)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="800" height="400" fill="url(#grid)" />
        </svg>
      </div>

      {threats.map((threat, index) => {
        const x = ((threat.lng + 180) / 360) * 100;
        const y = ((90 - threat.lat) / 180) * 100;
        const size = (threat.count / maxCount) * 30 + 10;

        return (
          <div
            key={index}
            className="absolute -translate-x-1/2 -translate-y-1/2 transform animate-pulse"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
          >
            <div
              className="bg-chart-4 rounded-full opacity-60 blur-sm dark:bg-[#FF3266]"
              style={{
                width: `${size}px`,
                height: `${size}px`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ThreatMap;
