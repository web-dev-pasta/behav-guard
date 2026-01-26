import AttackTypes from "./attack-types";
import DetectionStatistics from "./detection-statistics";

function Statistics() {
  return (
    <section className="my-10 px-4">
      <div className="page-container grid grid-cols-1 gap-5 lg:grid-cols-[350px_1fr]">
        <AttackTypes />
        <DetectionStatistics />
      </div>
    </section>
  );
}

export default Statistics;
