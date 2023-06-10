import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Code, HeartIcon, ListTree, Star } from "lucide-react";
import { Corner } from "./corner";

type feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: feature[] = [
  {
    icon: <Star size={32} />,
    title: "Effortless Topic and Note Creation",
    description:
      "Create unlimited topics and notes with just a few clicks, enabling you to capture every idea that comes to mind.",
  },
  {
    icon: <Code size={32} />,
    title: "Seamless Markdown Editing",
    description:
      "Edit your content effortlessly using Markdown, allowing you to format and style your notes with precision and clarity.",
  },
  {
    icon: <ListTree size={32} />,
    title: "Intuitive Organization",
    description:
      "Organize your thoughts with ease and clarity using MemoMate's intuitive interface, ensuring your ideas are easily accessible whenever you need them.",
  },
];

const Landing = () => {
  return (
    <>
      <section className="bg-generator relative h-[calc(100%-0.75rem)] w-full  rounded-3xl bg-slate-50 pt-16">
        <div className="absolute left-1/4 top-0 -z-10 aspect-square h-3/4 -translate-x-1/4 rounded-full bg-purple-400 opacity-20 blur-3xl md:z-0"></div>
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-between md:gap-8 rounded-3xl px-4 pt-4 md:justify-center">
          <section className="min-h-[30vh] max-w-2xl md:space-y-4 text-center">
            <h1 className="text-2xl font-bold text-slate-600 md:text-4xl">
              Boost Your Productivity with{" "}
              <span className="text-gradient my-2 inline-block text-3xl md:text-5xl">
                MemoMate!
              </span>
            </h1>
            <p className="text-slate-600 text-sm md:text-xl">
              MemoMate empowers you to effortlessly capture and organize your
              thoughts, ideas, and to-do lists. Streamline your productivity and
              stay on top of your tasks with our intuitive note-taking app.
            </p>
          </section>
          <div className="relative flex pb-4 md:p-0 md:h-[50vh] w-full justify-center">
            <div className="relative hidden h-full w-10/12 rounded-3xl lg:block">
              <Corner className="pointer-events-none absolute -left-[20px] bottom-0 z-20 hidden rotate-180 fill-slate-950 transition-all ease-in-out group-hover:fill-slate-800 lg:block" />
              <Corner className="pointer-events-none absolute -right-[19.7px] bottom-0 z-20 hidden rotate-[270deg] fill-slate-950 transition-all ease-in-out group-hover:fill-slate-800 lg:block" />
            </div>
            <div className="sticky top-0 z-50 h-fit w-full transform rounded-3xl bg-slate-950 md:absolute md:left-1/2 md:w-11/12 md:-translate-x-1/2 lg:w-10/12">
              <div className="rounded-3xl border-8 border-slate-950">
                <Image
                  src={"/landing.png"}
                  alt="capture"
                  width={1920}
                  height={1080}
                  className="w-full rounded-3xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-4 mb-20 flex flex-col items-center justify-center text-slate-400 md:mt-[15vh] lg:mt-[55vh]">
        <h2 className="py-6 text-3xl font-bold text-slate-400">Features</h2>
        <div className="flex flex-col gap-6 md:grid md:grid-cols-3 lg:w-10/12 lg:px-8">
          {features.map((feature, inx) => (
            <Card
              key={`${feature.title}-${inx}`}
              className="border-slate-800 text-slate-400"
            >
              <CardHeader className="pb-2">
                <div className="pb-4">{feature.icon}</div>
                <CardTitle className="text-lg font-bold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>{feature.description}</CardContent>
            </Card>
          ))}
        </div>
      </section>
      <footer className="p-6 pb-6 pt-12 text-slate-500">
        Created by <HeartIcon className="inline" size={20} />{" "}
        <a
          href="https://github.com/ZevaGuillo"
          className="text-slate-400"
          target="_blank"
          rel="noreferrer"
        >
          @zevaguillo
        </a>{" "}
        using UI components from{" "}
        <a
          href="https://ui.shadcn.com"
          className="text-slate-400"
          target="_blank"
          rel="noreferrer"
        >
          Shadcn UI
        </a>{" "}
        and deployed on{" "}
        <a
          href="https://vercel.com"
          className="text-slate-400"
          target="_blank"
          rel="noreferrer"
        >
          Vercel
        </a>
        .
      </footer>
    </>
  );
};

export default Landing;
