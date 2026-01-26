import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, AlertTriangle, Info } from "lucide-react";
import BoxWrapper from "@/components/box-wrapper";

interface Attack {
  id: string;
  timestamp: string;
  ip: string;
  country: string;
  attackType: string;
  severity: "critical" | "high" | "medium" | "low";
  action: "blocked" | "challenged" | "monitored";
  endpoint: string;
  riskScore: number;
}

const generateMockAttack = (): Attack => {
  const attackTypes = [
    "SQL Injection",
    "XSS",
    "CSRF",
    "Path Traversal",
    "Command Injection",
    "XXE",
  ];
  const countries = [
    "US",
    "CN",
    "RU",
    "BR",
    "IN",
    "DE",
    "FR",
    "UK",
    "KR",
    "JP",
  ];
  const endpoints = [
    "/api/users",
    "/api/login",
    "/api/search",
    "/api/data",
    "/admin/dashboard",
    "/api/payments",
  ];
  const severities: Array<"critical" | "high" | "medium" | "low"> = [
    "critical",
    "high",
    "medium",
    "low",
  ];
  const actions: Array<"blocked" | "challenged" | "monitored"> = [
    "blocked",
    "challenged",
    "monitored",
  ];

  const severity = severities[Math.floor(Math.random() * severities.length)];
  const riskScore =
    severity === "critical"
      ? 85 + Math.random() * 15
      : severity === "high"
        ? 70 + Math.random() * 15
        : severity === "medium"
          ? 50 + Math.random() * 20
          : 20 + Math.random() * 30;

  return {
    id: Math.random().toString(36).substr(2, 9),
    timestamp: new Date().toLocaleTimeString(),
    ip: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
    country: countries[Math.floor(Math.random() * countries.length)],
    attackType: attackTypes[Math.floor(Math.random() * attackTypes.length)],
    severity,
    action: actions[Math.floor(Math.random() * actions.length)],
    endpoint: endpoints[Math.floor(Math.random() * endpoints.length)],
    riskScore: Math.round(riskScore),
  };
};

export function AttackFeed({ isPaused }: { isPaused: boolean }) {
  const [attacks, setAttacks] = useState<Attack[]>(() =>
    Array.from({ length: 10 }, generateMockAttack),
  );

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(
        () => {
          setAttacks((prev) => {
            const newAttack = generateMockAttack();
            return [newAttack, ...prev.slice(0, 49)];
          });
        },
        2000 + Math.random() * 3000,
      );

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-[#FF3366]/20 text-[#FF3366] border-[#FF3366]/30";
      case "high":
        return "bg-[#FFB800]/20 text-[#FFB800] border-[#FFB800]/30";
      case "medium":
        return "bg-[#00D4FF]/20 text-[#00D4FF] border-[#00D4FF]/30";
      case "low":
        return "bg-[#00C896]/20 text-[#00C896] border-[#00C896]/30";
      default:
        return "bg-white/10 text-white border-white/20";
    }
  };

  const getActionColor = (action: string) => {
    switch (action) {
      case "blocked":
        return "bg-[#FF3366] text-white";
      case "challenged":
        return "bg-[#FFB800] text-[#0A0E27]";
      case "monitored":
        return "bg-[#8892B0] text-white";
      default:
        return "bg-white/10 text-white";
    }
  };

  const getActionIcon = (action: string) => {
    switch (action) {
      case "blocked":
        return <Shield className="h-3 w-3" />;
      case "challenged":
        return <AlertTriangle className="h-3 w-3" />;
      case "monitored":
        return <Info className="h-3 w-3" />;
      default:
        return null;
    }
  };

  return (
    <ScrollArea className="h-100">
      <div className="flex flex-col justify-between gap-2">
        {attacks.map((attack) => (
          <BoxWrapper
            key={attack.id}
            className="cursor-pointer rounded-lg border bg-white/5 p-3 transition-colors hover:bg-white/10 dark:border-white/10"
          >
            <div className="flex items-start justify-between gap-3 max-sm:flex-col max-sm:items-center">
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2 max-sm:justify-center">
                  <span className="text-sm text-[#8892B0]">
                    {attack.timestamp}
                  </span>
                  <Badge
                    variant="outline"
                    className={getSeverityColor(attack.severity)}
                  >
                    {attack.severity}
                  </Badge>
                  <Badge className={getActionColor(attack.action)}>
                    <span className="flex items-center gap-1">
                      {getActionIcon(attack.action)}
                      {attack.action}
                    </span>
                  </Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-sm max-sm:text-center">
                    <span
                      style={{
                        color:
                          attack.riskScore >= 85
                            ? "#FF3366"
                            : attack.riskScore >= 70
                              ? "#FFB800"
                              : "#00C896",
                      }}
                    >
                      {attack.attackType}
                    </span>{" "}
                    from <span className="text-[#8892B0]">{attack.ip}</span>{" "}
                    <span className="rounded bg-gray-400 px-1.5 py-0.5 text-xs text-gray-50 dark:bg-white/10">
                      {attack.country}
                    </span>
                  </p>
                  <p className="text-xs text-[#8892B0] max-sm:text-center">
                    Endpoint: <span>{attack.endpoint}</span>
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-[#8892B0]">Risk</p>
                <p
                  className="text-lg"
                  style={{
                    color:
                      attack.riskScore >= 85
                        ? "#FF3366"
                        : attack.riskScore >= 70
                          ? "#FFB800"
                          : "#00C896",
                  }}
                >
                  {attack.riskScore}
                </p>
              </div>
            </div>
          </BoxWrapper>
        ))}
      </div>
    </ScrollArea>
  );
}
