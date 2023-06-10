import type { GetServerSideProps, NextPage } from "next";
import { getSession} from "next-auth/react";
import { Dashboard } from "~/components/dashboard";
import { Layout } from "~/components/layouts";
import { useNoteStore } from "~/store/notetackerStore";

const Home: NextPage = () => {
  const { currentTopic } = useNoteStore();

  return (
    <Layout>
      {currentTopic && (
        <main className="h-[calc(100%-3.5rem)] overflow-hidden py-11 pl-11">
          <Dashboard />
        </main>
      )}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  console.log("serve.", session);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Home;
