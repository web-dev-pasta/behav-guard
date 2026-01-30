import { stats } from "@/constants/constants";
import BoxWrapper from "../box-wrapper";

function IncidentsOverview() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3 sm:gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <BoxWrapper key={stat.label}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-[#8892B0]">{stat.label}</p>
                <p className={`mt-2 text-3xl ${stat.valueClass}`}>
                  {stat.value}
                </p>
              </div>

              <div className={`rounded-lg p-2 ${stat.iconBg}`}>
                <Icon className={`h-5 w-5 ${stat.iconColor}`} />
              </div>
            </div>
          </BoxWrapper>
        );
      })}
    </div>
  );
}

export default IncidentsOverview;
