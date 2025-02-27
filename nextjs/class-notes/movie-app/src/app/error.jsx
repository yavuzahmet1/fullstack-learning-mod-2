"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="mt-64 text-center">
      <h1 className="text-red-600 text-2xl">Something went wrong</h1>
    </div>
  );
}
