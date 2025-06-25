import { DynFixed } from "@/app/_dyn";
import { Suspense } from "react";

export const experimental_ppr = true;

/** Add your relevant code here for the issue to reproduce */
export default function TestPage() {
  return (
    <main>
      <Suspense fallback={<p>Loading....</p>}>
        <DynFixed />
      </Suspense>
    </main>
  );
}
