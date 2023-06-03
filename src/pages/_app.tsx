import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Layout } from "~/components/layouts";
import { Toaster } from "~/components/ui/toaster";
import { Analytics } from "~/components/analytics";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      
        <Component {...pageProps} />
        <Toaster/>
        <Analytics/>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
