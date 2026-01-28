"use client";
import { Search } from "lucide-react";
import { Attack, RecentAttacksProps } from "@/types";
import BoxWrapper from "../box-wrapper";
import SearchAttacks from "@/components/investigation/search-attacks";
import FilterAttacks from "@/components/investigation/filter-attacks";
import { useState } from "react";
import { mockAttacks } from "@/constants/constants";
function RecentAttacks({
  selectedAttack,
  setSelectedAttack,
}: RecentAttacksProps) {
  const [filteredData, setFilteredData] = useState<Attack[]>(mockAttacks);
  return (
    <BoxWrapper className="space-y-6">
      <div className="flex items-center gap-1">
        <Search className="h-5 w-5 text-[#00D4FF]" />
        <p className="translate-y-px">Recent Attacks</p>
      </div>
      <SearchAttacks
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
      <FilterAttacks
        selectedAttack={selectedAttack}
        setSelectedAttack={setSelectedAttack}
        filteredData={filteredData}
      />
    </BoxWrapper>
  );
}

export default RecentAttacks;
