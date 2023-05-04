import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import NewNote from "~/components/dashboard/newNote";
import { Layout } from "~/components/layouts";
import { useNoteStore } from "~/store/notetackerStore";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();
  const { currentTopic } = useNoteStore();

  if (!sessionData?.user) {
    return (
      <div className="grid h-screen w-full place-content-center text-8xl font-bold">
        Coming Soon
      </div>
    );
  }

  return (
    <Layout>
      {currentTopic && (
        <main className="p-11  h-[calc(100%-5rem)]">
          <div className="flex gap-3 items-center">
          <h1 className="font-bold text-slate-700 text-2xl capitalize">{currentTopic.title}</h1>
          <NewNote/>
          </div>
        </main>
      )}
    </Layout>
  );
};

export default Home;
