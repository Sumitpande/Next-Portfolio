"use client";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import data from "@/data/index.json";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const GridItem = ({ area, span, title, description, company, companyPage }) => {
  return (
    <li className={`min-h-[14rem] list-none ${area} `}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 hover:bg-accent">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden p-3 md:p-1">
          <div className="relative flex flex-1 justify-between gap-3">
            <div className="w-fit p-1 text-nowrap">{span}</div>
            <div className="space-y-3">
              <div className="flex flex-col justify-between">
                <h6 className="-tracking-4 pt-0.5 font-sans font-semibold text-balance text-gray-900 dark:text-white">
                  {title}
                </h6>
                <Link
                  href={companyPage}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 hover:text-gray-800 dark:text-neutral-300 dark:hover:text-neutral-100"
                >
                  {company}
                  <ExternalLink className="inline-block mb-1 ml-1" size={14} />
                </Link>
              </div>

              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description.map((point, idx) => (
                  <li key={idx} className="list-disc ml-5">
                    {point}
                  </li>
                ))}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default function Experience() {
  return (
    <div>
      {data.experience.data.map((item, index) => (
        <GridItem
          key={index}
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          span={item.duration}
          title={item.title}
          description={item.description}
          company={item.company}
          companyPage={item.companyPage}
        />
      ))}
    </div>
  );
}
