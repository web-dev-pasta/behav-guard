import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Eye } from "lucide-react";
import { Incident } from "@/types";

function ViewIncident({ selectedIncident }: { selectedIncident: Incident }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Eye className="mr-2 h-4 w-4" />
          View Attacks
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>{selectedIncident.title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <p>Attack Type: {selectedIncident.attackType}</p>
          <p>Severity: {selectedIncident.severity}</p>
          <p>Status: {selectedIncident.status}</p>
          <p>Total Attacks: {selectedIncident.attackCount}</p>
        </div>
        <DialogFooter className="justify-center!">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ViewIncident;
