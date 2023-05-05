import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import { Dashboard } from "~/components/dashboard";
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
          <Dashboard/>
        </main>
      )}
    </Layout>
  );
};

export default Home;
