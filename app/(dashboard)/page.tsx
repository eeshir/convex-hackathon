"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p>
          Get started by editing <code>app/page.tsxasdasdad</code>
        </p>
      </div>
      {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
    </main>
  );
}
