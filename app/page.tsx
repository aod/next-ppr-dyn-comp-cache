import Dyn, { DynFixed } from "@/app/_dyn";
import Link from "next/link";
import { Suspense } from "react";

export const experimental_ppr = true;

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <main>
      <a href="https://github.com/vercel/next.js/issues/80775">https://github.com/vercel/next.js/issues/80775</a>
      <h1>Homepage</h1>
      <Suspense fallback={<p>Loading....</p>}>
        <Dyn />
      </Suspense>
      <hr />
      <p>
        Update: Apparently this is resolved by having minimum 5 min expire time. Value below should not refresh on each
        page load.
      </p>
      <Suspense fallback={<p>Loading....</p>}>
        <DynFixed />
      </Suspense>
      <hr />
      <p>
        Isolated test page{" "}
        <Link href="/test" prefetch={false}>
          here
        </Link>
        .
      </p>
    </main>
  );
}
