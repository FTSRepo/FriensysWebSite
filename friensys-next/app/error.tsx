"use client";

import { useEffect } from "react";
import { AuroraButton } from "@/components/ui/AuroraButton";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-danger">Error</p>
      <h1 className="mb-4 text-4xl font-bold text-text-primary">Something went wrong</h1>
      <p className="mb-8 max-w-sm text-text-secondary">
        An unexpected error occurred. You can try again or contact us if the problem persists.
      </p>
      <div className="flex gap-3">
        <AuroraButton onClick={reset}>Try again</AuroraButton>
        <AuroraButton href="/contact" variant="outline">
          Contact us
        </AuroraButton>
      </div>
    </div>
  );
}
