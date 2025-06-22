import Dyn from "@/app/_dyn";
import { Suspense } from "react";

export const experimental_ppr = true;

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <main>
      <h1>Homepage</h1>
      <Suspense fallback={<p>Loading....</p>}>
        <Dyn />
      </Suspense>
    </main>
  );
}
