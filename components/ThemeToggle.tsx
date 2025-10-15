"use client";

import { Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => {
        // Simple theme toggle without complex state management
        document.documentElement.classList.toggle('dark');
      }}
    >
      <Sun className="h-5 w-5" />
    </Button>
  );
}


