"use client";
import { Input } from "@/components/ui/input";
import { mockAttacks } from "@/constants/constants";
import { SearchAttacksProps } from "@/types";
import { useSearchParams } from "next/navigation";
import { debounce, useQueryState } from "nuqs";
import { useEffect, useState } from "react";

function SearchAttacks({ setFilteredData }: SearchAttacksProps) {
  const paramsValue = useSearchParams().get("q");
  const [searchValue, setSearchValue] = useQueryState("q", {
    defaultValue: paramsValue || "",
    shallow: false,
    limitUrlUpdates: debounce(300),
  });

  useEffect(() => {
    const query = searchValue.trim().toLowerCase();

    const filtered = query
      ? mockAttacks.filter((e) => e.type.toLowerCase().includes(query))
      : mockAttacks;

    setFilteredData(filtered);
  }, [paramsValue]);

  return (
    <div>
      <Input
        placeholder="Search attacks..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}

export default SearchAttacks;
