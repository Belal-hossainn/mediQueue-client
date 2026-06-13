"use client";

import { useState } from "react";
import { Button, Card } from "@heroui/react";
import { CheckCircle2 } from "lucide-react";

export default function BookButton({ disabled }) {
  const [booked, setBooked] = useState(false);

  if (booked) {
    return (
      <Card className="border border-default-200 shadow-none">
        <div className="py-5 flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-success" strokeWidth={1.5} />
          <p className="text-[10px] uppercase tracking-widest text-default-500">
            Session booked successfully
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Button
      isDisabled={disabled}
      onPress={() => setBooked(true)}
      className="w-full bg-default-900 text-default-50 tracking-[0.18em] uppercase text-[11px] h-12 rounded-xl font-normal"
    >
      {disabled ? "No slots available" : "Book a session"}
    </Button>
  );
}