import { Attack } from "@/types";
import jsPDF from "jspdf";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

function ExportButton({ selectedAttack }: { selectedAttack: Attack }) {
  function generatePDF(selectedAttack: Attack) {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Attack Report", 14, 20);

    doc.setFontSize(12);
    doc.text(`Risk Score: ${selectedAttack.riskScore}`, 14, 30);
    doc.text(`Attack Type: ${selectedAttack.type}`, 14, 40);
    doc.text(`Source IP: ${selectedAttack.ip}`, 14, 50);
    doc.text(`Status: ${selectedAttack.status}`, 14, 60);
    doc.save(`Attack_Report_${selectedAttack.id}.pdf`);
  }
  return (
    <Button
      variant="outline"
      size="sm"
      className="flex gap-2"
      onClick={() => generatePDF(selectedAttack)}
    >
      <Download className="h-4 w-4" />
      <span>Export</span>
    </Button>
  );
}

export default ExportButton;
