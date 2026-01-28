import BehaviouralTimeline from "@/components/analysis/behavioural-timeline";
import EndpointSection from "@/components/analysis/endpoint-section";
import SessionAnalysis from "@/components/analysis/session-analysis";

function AnalysisPage() {
  return (
    <>
      <section className="my-10 px-4">
        <div className="page-container">
          <SessionAnalysis />
          <BehaviouralTimeline />
          <EndpointSection />
        </div>
      </section>
    </>
  );
}

export default AnalysisPage;
