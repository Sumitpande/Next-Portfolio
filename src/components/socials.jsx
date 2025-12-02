"use client";

import Link from "next/link";
import { DynamicIcon } from "lucide-react/dynamic";
import data from "@/data/index.json";
export default function Socials() {
  return (
    <div className="flex items-center gap-4">
      {data.socials.map((item) => (
        <Link
          key={item.platform}
          href={item.url}
          target="_blank"
          rel="noreferrer"
        >
          <DynamicIcon
            name={item.icon}
            className="text-gray-500 hover:text-gray-800 dark:text-neutral-300 dark:hover:text-neutral-100"
            width={22}
            height={22}
          />
        </Link>
      ))}
    </div>
  );
}
