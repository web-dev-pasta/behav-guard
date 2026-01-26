import { maxCount, threats } from "@/constants/constants";

function TopThreatScources() {
  return (
    <div>
      <p className="text-muted-foreground mb-3 text-xs">Top Threat Sources</p>
      <div className="threats space-y-3">
        {threats
          .sort((a, b) => b.count - a.count)
          .slice(0, 5)
          .map((threat, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex flex-1 items-center gap-2">
                <span className="text-sm">{threat.country}</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-r-full bg-linear-to-r from-[#FF3366] to-[#FFB800] transition-all duration-500"
                    style={{ width: `${(threat.count / maxCount) * 100}%` }}
                  />
                </div>
              </div>
              <span className="ml-2 text-sm text-[#8892B0]">
                {threat.count}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TopThreatScources;
