"use client";
import { DotBackground } from "@/components/DotBackground";
import Experience from "@/components/Experience";
// import MaskContainer from "@/components/MaskContainer";
import { NavbarDemo } from "@/components/NavBar";
import Projects from "@/components/Projects";
import { Skills, SkillsSection } from "@/components/Skills";
import Socials from "@/components/socials";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { CustomButton } from "@/components/ui/moving-border";
import data from "@/data/index.json";
import Link from "next/link";
export default function Home() {
  const words = ["Developer", "Software Engineer"];
  return (
    <DotBackground>
      <div className=" relative px-5 md:px-20 lg:px-32 xl:px-40 ">
        {/* <MaskContainer> */}
        <NavbarDemo />
        <div className="grid grid-cols-2 gap-2 px-2 mt-16 md:mt-2 md:px-3 lg:px-4 xl:px-5 2xl:px-6">
          <div className="flex flex-col gap-1 col-span-2 md:col-span-1 md:sticky md:h-[calc(100vh-84px)] md:top-20 z-10">
            <h1 className="text-4xl text-nowrap font-bold tracking-tight text-slate-800 dark:text-slate-200 sm:text-5xl">
              {data.name}
            </h1>
            <h2 className="mt-1 text-lg text-nowrap font-medium tracking-tight text-slate-200 sm:text-xl">
              <FlipWords words={words} />
            </h2>
            <p className="mt-4 max-w-xs leading-normal">{data.title}</p>

            <div className="flex items-center gap-4 my-4 ">
              <Button className="rounded-full">
                <Link
                  href={data.contact.resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </Link>
              </Button>
              <Link href={data.contact.email} target="_blank" rel="noreferrer">
                <CustomButton
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  Hire me
                </CustomButton>
              </Link>
            </div>

            <div className="mt-6">
              <Socials />
            </div>
            <div className="mt-auto mb-12 text-gray-500 hidden md:block">
              {data.footer}
            </div>
          </div>
          <div className="grow mt-4 flex flex-col gap-3 col-span-2 md:col-span-1">
            <div id="about" className="text-slate-500">
              {data.summary}
            </div>
            <div id="experience" className="">
              <div className="mt-4 mb-2 text-xl font-bold text-neutral-700 dark:text-neutral-100">
                {data.experience.title}
              </div>
              <Experience />
            </div>
            <div id="projects" className="">
              <div className="mt-4 mb-2 text-xl font-bold text-neutral-700 dark:text-neutral-100">
                {data.projects.title}
              </div>
              <Projects />
            </div>
            <div id="skills" className="">
              <div className="mt-4 mb-2 text-xl font-bold text-neutral-700 dark:text-neutral-100">
                {data.skills.title}
              </div>
              <SkillsSection />
            </div>
          </div>
        </div>
        <div className="mt-10 mb-5 text-center text-gray-500 block md:hidden">
          {data.footer}
        </div>
        {/* </MaskContainer> */}
      </div>
    </DotBackground>
  );
}
