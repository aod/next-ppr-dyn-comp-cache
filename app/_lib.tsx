import { unstable_cacheLife as cacheLife } from "next/cache";

export async function calc() {
  "use cache";
  cacheLife({
    stale: 0,
    revalidate: 5,
    expire: 5,
  });
  await sleep();
  return Math.random();
}

export function sleep() {
  return new Promise((_) => {
    setTimeout(_, 500 + Math.random() * 500);
  });
}
