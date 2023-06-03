import Image from "next/image";
import React from "react";

const Landing = () => {
  return (
    <>
      <section className="bg-generator relative h-[calc(100%-0.75rem)] w-full  rounded-3xl bg-slate-50 pt-16">
        <div className="absolute -z-10 md:z-0 left-1/4 top-0 aspect-square h-3/4 -translate-x-1/4 rounded-full bg-purple-400 opacity-20 blur-3xl"></div>
        <div className="relative z-10 flex h-full w-full flex-col justify-evenly items-center gap-8 md:justify-center rounded-3xl px-4 pt-11">
          <section className="max-w-2xl space-y-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-600">
              Boost Your Productivity with{" "}
              <span className="text-gradient my-2 inline-block text-4xl md:text-5xl">
                MemoMate!
              </span>
            </h1>
            <p className="md:text-xl text-slate-600">
              MemoMate empowers you to effortlessly capture and organize your
              thoughts, ideas, and to-do lists. Streamline your productivity and
              stay on top of your tasks with our intuitive note-taking app.
            </p>
          </section>
          <div className="relative w-full grid place-content-center h-[50vh]">
            <div className="md:absolute bg-slate-950 rounded-3xl w-full md:w-11/12 lg:w-10/12 md:left-1/2 md:-translate-x-1/2 transform z-50">
              <div className="overflow-hidden rounded-3xl border-8 border-slate-950">
                <Image src={'/landing.png'} alt="capture" width={1920} height={1080} className="w-full"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h2>Guillermo</h2>
    </>
  );
};

export default Landing;
