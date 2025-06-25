import { calc, calcFixed } from "@/app/_lib";
import { connection } from "next/server";

export const experimental_ppr = true;

export default async function Dyn() {
  await connection();
  const value = await calc();
  return (
    <article>
      <h1>Dyn component</h1>
      <p>Value: {value}</p>
    </article>
  );
}

export async function DynFixed() {
  await connection();
  const value = await calcFixed();
  return (
    <article>
      <h1>DynFixed component</h1>
      <p>Value: {value}</p>
    </article>
  );
}
