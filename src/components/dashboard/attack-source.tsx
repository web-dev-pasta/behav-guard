import { Globe } from "lucide-react";
import ThreatMap from "@/components/dashboard/threat-map";
import TopThreatScources from "@/components/dashboard/top-threat-sources";
import BoxWrapper from "@/components/box-wrapper";

function AttackSource() {
  return (
    <BoxWrapper className="space-y-6">
      <div className="title flex items-center gap-1">
        <Globe className="h-5 w-5 text-[#00D4FF]" />
        <p>Threat Origins</p>
      </div>
      <ThreatMap />
      <TopThreatScources />
    </BoxWrapper>
  );
}

export default AttackSource;
