// app/loading.tsx
import React from "react";

export default function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground text-sm">Loading...</p>
      </div>
    </div>
  );
}
