import { Session } from "@/types";

function SessionData({ selectedSession }: { selectedSession: Session }) {
  const removedKeys = ["ip", "startTime"] as const;
  const statusStyles: Record<Session["status"], string> = {
    blocked: "bg-[#f36]",
    challenged: "bg-[#ffb800]",
    allowed: "bg-[#00c896]",
  };
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3 sm:gap-4">
      {Object.entries(selectedSession)
        .filter(
          ([key]) => !removedKeys.includes(key as (typeof removedKeys)[number]),
        )

        .map(([key, value]) => (
          <div
            key={key}
            className="space-y-1 rounded-md border bg-white/5 p-2 sm:space-y-2 sm:p-4"
          >
            <p className="text-muted-foreground text-sm capitalize">{key}</p>
            <p
              className={`text-sm font-medium text-black dark:text-white ${
                key === "status"
                  ? `w-fit rounded-md px-2 text-white ${
                      statusStyles[value as Session["status"]]
                    }`
                  : ""
              }`}
            >
              {String(value)}
            </p>
          </div>
        ))}
    </div>
  );
}

export default SessionData;
