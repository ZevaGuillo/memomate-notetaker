import { Github, LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import Head from "next/head";
import type { FC, ReactNode } from "react";
import { cn } from "~/lib/utils";
import Link from "next/link";
import { Corner} from "../corner";

interface LayoutProps {
  children: ReactNode;
}

export const LandingLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>MemoMate</title>
        <meta name="description" content="An app for easy management of notes and topics" />
        <meta name="keywords" content=",react,typescript,nextjs,prisma,tailwindcss,guillermo,zevallos,zevaguillo,trpc,nextauth,supabase,t3-stack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <header className="absolute left-0 top-0 z-50 flex h-16 w-full items-center justify-between bg-slate-950 px-6 text-white shadow-md">
          <div className="">
            <h1 className="text-2xl font-bold md:text-3xl">MemoMate</h1>
          </div>
          <Link
            href={"https://github.com/ZevaGuillo/memomate-notetaker"}
            target="_blank"
            rel="noreferrer"
            className="flex cursor-pointer gap-2 text-lg font-semibold hover:text-slate-400 md:text-xl"
          >
            <Github />
            <span className="hidden md:inline">Star on </span>GitHub
          </Link>
          <div
            className={cn(
              "group absolute left-1/2 top-full z-10 flex h-16 -translate-x-1/2 transform items-center rounded-b-3xl bg-slate-950 px-6 transition-all ease-in-out hover:bg-slate-800"
            )}
            onClick={() => void signIn()}
          >

            <Corner className="pointer-events-none absolute -left-[19.7px] top-0 z-20 fill-slate-950 transition-all ease-in-out rotate-90 group-hover:fill-slate-800" />


            <Corner className="pointer-events-none absolute -right-[19.7px] top-0 z-20 fill-slate-950 transition-all ease-in-out group-hover:fill-slate-800" />

            <p className="flex gap-2 text-sm md:text-base">
              <LogIn className="md:hidden" />
              <span className="hidden font-semibold md:inline">
                Start For Free
              </span>
            </p>
          </div>
        </header>
        <main className="relative h-screen w-screen overflow-x-hidden bg-slate-950 px-3 pt-16">
          {children}
        </main>
      </div>
    </>
  );
};
