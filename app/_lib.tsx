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

export async function calcFixed() {
  "use cache";
  cacheLife({
    stale: 0,
    revalidate: 5,
    // https://github.com/vercel/next.js/issues/80775#issuecomment-3006112450
    expire: 300,
  });
  await sleep();
  return Math.random();
}

export function sleep() {
  return new Promise((_) => {
    setTimeout(_, 500 + Math.random() * 500);
  });
}
