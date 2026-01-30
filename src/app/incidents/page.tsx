import IncidentsMain from "@/components/incidents/incidents-main";
import IncidentsOverview from "@/components/incidents/incidents-overview";

function IncidentsPage() {
  return (
    <section className="my-10 px-4">
      <div className="page-container">
        <IncidentsOverview />
        <IncidentsMain />
      </div>
    </section>
  );
}

export default IncidentsPage;
