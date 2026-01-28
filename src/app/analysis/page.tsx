import BehaviouralTimeline from "@/components/analysis/behavioural-timeline";
import SessionAnalysis from "@/components/analysis/session-analysis";

function AnalysisPage() {
  return (
    <>
      <section className="my-10 px-4">
        <div className="page-container">
          <SessionAnalysis />
          <BehaviouralTimeline />
        </div>
      </section>
    </>
  );
}

export default AnalysisPage;
