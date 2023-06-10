import Head from "next/head";
import type { FC, ReactNode } from "react";
import { Header } from "../header";
import Menu from "../sideMenu/menu";
import { useClickOutside } from "~/hooks/use-click-outside";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  
  const { open, setOpen, containerRef } = useClickOutside();
  return (
    <div className="min-h-screen w-screen bg-slate-950 py-3 pr-5">
      <Head>
        <title>MemoMate</title>
        <meta name="description" content="An app for easy management of notes and topics" />
        <meta name="keywords" content=",react,typescript,nextjs,prisma,tailwindcss,guillermo,zevallos,zevaguillo,trpc,nextauth,supabase,t3-stack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu open={open} setOpen={setOpen}/>
      <main ref={containerRef} className="ml-[4rem] min-h-[calc(100vh-1.5rem)] px-3 bg-slate-50 h-full rounded-3xl">
        <Header />
        {/* <h1>hola mundo</h1> */}
        {children}
      </main>
    </div>
  );
};
