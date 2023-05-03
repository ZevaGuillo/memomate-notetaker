import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import { Layout } from "~/components/layouts";
import { useNoteStore } from "~/store/notetackerStore";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();
  const {topics, currentTopic} = useNoteStore()

  if(!sessionData?.user) {
    return <div className="h-screen w-full grid place-content-center text-8xl font-bold">Coming Soon</div>
  }

  return (
    <Layout>


    </Layout>
  );
};

export default Home;
