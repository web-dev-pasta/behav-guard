"use client";
import { Incident } from "@/types";
import jsPDF from "jspdf";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

function IncidentGenerate({
  selectedIncident,
}: {
  selectedIncident: Incident;
}) {
  function generatePDF(selectedIncident: Incident) {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Incident Report", 14, 20);

    doc.setFontSize(12);
    doc.text(`Attack Type: ${selectedIncident.attackType}`, 14, 50);
    doc.text(`Severity: ${selectedIncident.severity}`, 14, 30);
    doc.text(`Status: ${selectedIncident.status}`, 14, 40);
    doc.text(`Total Attacks: ${selectedIncident.attackCount}`, 14, 60);

    doc.save(`Incident_Report_${selectedIncident.id}.pdf`);
  }
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => generatePDF(selectedIncident)}
    >
      <Download className="mr-2 h-4 w-4" />
      Export
    </Button>
  );
}

export default IncidentGenerate;
