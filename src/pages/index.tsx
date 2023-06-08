import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import { Dashboard } from "~/components/dashboard";
import Landing from "~/components/landing";
import { LandingLayout, Layout } from "~/components/layouts";
import { useNoteStore } from "~/store/notetackerStore";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();
  const { currentTopic } = useNoteStore();

  return !sessionData?.user ? (
    <LandingLayout>
      <Landing />
    </LandingLayout>
  ) : (
    <Layout>
      {currentTopic && (
        <main className="h-[calc(100%-3.5rem)] py-11 pl-11 overflow-hidden">
          <Dashboard />
        </main>
      )}
    </Layout>
  );
};

export default Home;
