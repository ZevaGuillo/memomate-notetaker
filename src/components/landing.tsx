import React from "react";

const Landing = () => {
  return (
    <>
      <section className="bg-generator relative h-[calc(100%-0.75rem)] w-full overflow-hidden rounded-3xl bg-slate-50 pt-16">
        <div className="absolute left-1/4 top-0 aspect-square h-3/4 -translate-x-1/4 rounded-full bg-purple-400 opacity-20 blur-3xl"></div>
        <div className="z-10 sticky flex h-full w-full justify-center rounded-3xl pt-11 px-4">
          <section className="max-w-2xl space-y-4 text-center">
            <h1 className="text-4xl font-bold text-slate-700">
              Boost Your Productivity with{" "}
              <span className="text-gradient">MemoMate!</span>
            </h1>
            <p className="text-xl text-slate-600">
              MemoMate empowers you to effortlessly capture and organize your
              thoughts, ideas, and to-do lists. Streamline your productivity and
              stay on top of your tasks with our intuitive note-taking app. Try
              MemoMate today and unlock your full potential!
            </p>
          </section>
        </div>
      </section>
      <h2>Guillermo</h2>
    </>
  );
};

export default Landing;
