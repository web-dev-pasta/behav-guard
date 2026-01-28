import { TabsList, TabsTrigger } from "../ui/tabs";
import { tabs } from "@/constants/constants";

function TabList() {
  return (
    <div className="flex justify-center">
      <TabsList className="flex-wrap border bg-white/5 max-sm:h-[initial]!">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="max-sm:h-[initial]!"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  );
}

export default TabList;
