import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function GlobalHooks(InnerComponent) {
  return function GlobalHooks(props) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [routeChanging, setRouteChanging] = useState(false);

    useEffect(() => {
      if (props.pageHydrated && !routeChanging) setIsLoading(false);
    }, [props.pageHydrated, routeChanging]);

    useEffect(() => {
      const handleStart = () => {
        window.scrollTo(0, 0);
        setIsLoading(true);
        setRouteChanging(true);
      };

      const handleEnd = () => {
        setRouteChanging(false);
      };

      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleEnd);
      router.events.on("routeChangeError", handleEnd);

      return () => {
        router.events.off("routeChangeStart", handleStart);
        router.events.off("routeChangeComplete", handleEnd);
        router.events.off("routeChangeError", handleEnd);
      };
    }, [router]);

    return (
      <>
        {isLoading && <Loader />}
        <InnerComponent isLoading={isLoading} {...props} />
      </>
    );
  };
}
