import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import { Layout } from "~/components/layouts";

const Home: NextPage = () => {

  
  const { data: sessionData } = useSession();

  if(!sessionData?.user) {
    return <div className="h-screen w-full grid place-content-center text-8xl font-bold">Coming Soon</div>
  }

  return (
    <Layout>


    </Layout>
  );
};

export default Home;
