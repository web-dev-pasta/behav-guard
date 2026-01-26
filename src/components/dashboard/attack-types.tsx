"use client";
import Chart from "./chart";
import BoxWrapper from "../box-wrapper";
import { attackTypes } from "@/constants/constants";
function AttackTypes() {
  return (
    <BoxWrapper className="space-y-2">
      <p className="text-center">Attack Types</p>
      <Chart attackTypes={attackTypes} />
      <div className="mt-4 space-y-2">
        {attackTypes.map((type) => (
          <div
            key={type.name}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: type.color }}
              />
              <span className="text-[#8892B0]">{type.name}</span>
            </div>
            <span className="font-semibold">{type.value}%</span>
          </div>
        ))}
      </div>
    </BoxWrapper>
  );
}

export default AttackTypes;
