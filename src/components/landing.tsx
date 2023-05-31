import Image from "next/image";
import React from "react";

const Landing = () => {
  return (
    <>
      <section className="bg-generator relative h-[calc(100%-0.75rem)] w-full overflow-hidden rounded-3xl bg-slate-50 pt-16">
        <div className="absolute left-1/4 top-0 aspect-square h-3/4 -translate-x-1/4 rounded-full bg-purple-400 opacity-20 blur-3xl"></div>
        <div className="sticky z-10 flex h-full w-full justify-center rounded-3xl px-4 pt-11">
          <section className="max-w-2xl space-y-4 text-center">
            <h1 className="text-4xl font-bold text-slate-600">
              Boost Your Productivity with{" "}
              <span className="text-gradient my-2 inline-block text-5xl">
                MemoMate!
              </span>
            </h1>
            <p className="text-xl text-slate-600">
              MemoMate empowers you to effortlessly capture and organize your
              thoughts, ideas, and to-do lists. Streamline your productivity and
              stay on top of your tasks with our intuitive note-taking app.
            </p>
          </section>
        </div>
      </section>
      <div className="-translate-y-bottom-[35%] mt-13.5 md:mt-21 absolute -bottom-[35%]  left-1/2 bg-slate-950 rounded-3xl z-20 -translate-x-1/2  md:w-3/4">

        <div className="overflow-hidden rounded-3xl border-8 border-slate-950 ">
          {/* <video width="100%" autoPlay controls muted loop>
            <source
              src="https://assets.bloop.ai/bloop_gpt4.mp4"
              type="video/mp4"
            />
          </video> */}
          <Image src={'/landing.png'} alt="capture" width={1920} height={1080} className="w-full"/>
        </div>
      </div>
      <h2>Guillermo</h2>
    </>
  );
};

export default Landing;
