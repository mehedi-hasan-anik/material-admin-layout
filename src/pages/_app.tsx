import WithAuth from "@/components/layout/withAuth";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [toggle, setToggle] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!router?.pathname?.includes("admin")) {
      setToggle(false);
    }
  }, [router]);

  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMore(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return toggle ? (
    <>
      {showMore && (
        <WithAuth>
          <Component {...pageProps} />
        </WithAuth>
      )}
    </>
  ) : (
    <>{showMore && <Component {...pageProps} />}</>
  );
}
