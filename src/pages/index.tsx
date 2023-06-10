import type { GetServerSideProps, NextPage } from "next";
import { getSession} from "next-auth/react";
import Landing from "~/components/landing";
import { LandingLayout } from "~/components/layouts";

const Home: NextPage = () => {

  return (
    <LandingLayout>
      <Landing />
    </LandingLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Home;
