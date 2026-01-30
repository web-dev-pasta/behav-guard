import BehaviouralTimeline from "@/components/analysis/behavioural-timeline";
import EndpointSection from "@/components/analysis/endpoint-section";
import SessionAnalysis from "@/components/analysis/session-analysis";
import SessionComparison from "@/components/analysis/session-comparison";

function AnalysisPage() {
  return (
    <section className="my-10 px-4">
      <div className="page-container">
        <SessionAnalysis />
        <BehaviouralTimeline />
        <EndpointSection />
        <SessionComparison />
      </div>
    </section>
  );
}

export default AnalysisPage;
