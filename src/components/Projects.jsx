"use client";
import { Eye, SquareTerminal } from "lucide-react";
import { Badge } from "./ui/badge";
import { GlowingEffect } from "./ui/glowing-effect";
import { Button } from "./ui/button";
import data from "@/data/index.json";
import Link from "next/link";

const GridItem = ({ area, image, tags, title, description, link, live }) => {
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
            <div className="w-fit p-1 text-nowrap">{image}</div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h6 className="-tracking-4 pt-0.5 font-sans font-semibold text-balance text-gray-900 dark:text-white">
                  {title}
                </h6>
                <div className="flex gap-2">
                  {live && (
                    <Link href={live} target="_blank" rel="noreferrer">
                      <Button variant="outline" className="rounded-full">
                        <Eye />
                      </Button>
                    </Link>
                  )}
                  <Link href={link} target="_blank" rel="noreferrer">
                    <Button variant="outline" className="rounded-full">
                      <SquareTerminal /> Code
                    </Button>{" "}
                  </Link>
                </div>
              </div>

              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description.map((point, idx) => (
                  <li key={idx} className="list-disc ml-5">
                    {point}
                  </li>
                ))}
              </h2>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Badge key={index} className="bg-gray-200 text-gray-800 mr-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default function Projects() {
  return (
    <div>
      {data.projects.data.map((item, index) => (
        <GridItem
          key={index}
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          image={
            <img
              src={item.image}
              className="max-h-40 w-full object-contain"
              alt={item.name}
            />
          }
          tags={item.tags}
          title={item.name}
          link={item.link}
          live={item.live}
          description={item.description}
        />
      ))}
    </div>
  );
}
