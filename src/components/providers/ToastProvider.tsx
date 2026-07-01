"use client";

import { Toaster } from "sonner";

export function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "rgba(15, 23, 42, 0.9)",
          border: "1px solid rgba(0, 245, 212, 0.2)",
          color: "#f1f5f9",
          backdropFilter: "blur(12px)",
        },
      }}
      richColors
    />
  );
}
