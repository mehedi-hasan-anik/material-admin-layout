import WithAuth from "@/components/layout/withAuth";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const toggle = true;
  const router = useRouter();
  if (router.pathname === "_error") return <Component {...pageProps} />;

  return toggle ? (
    <WithAuth>
      <Component {...pageProps} />
    </WithAuth>
  ) : (
    <Component {...pageProps} />
  );
}
