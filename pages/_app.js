import React, { useEffect } from "react";
import "the-new-css-reset/css/reset.css";
import "../styles/globals.scss";
import { Provider } from "react-redux";
import store from "../state/store";
import Script from "next/script";
// import ReactGA from "react-ga4";
// import ttiPolyfill from "tti-polyfill";
import { useRouter } from "next/router";
import { setViewport } from "../state/actions";
import useSWR, { SWRConfig } from "swr";
import { axiosFetcher, localStorageHandler } from "../utils/swrHandler";
import { resizeObserver } from "../utils/resizeObserver";
import * as Types from "../state/Types";

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}
		if (router.asPath === "/menu") {
			store.dispatch({
				type: Types.HERO_ENTERED,
				payload: false,
			});
			document.getElementById("__next").style.overflowY = "hidden";
		}
		if (router.asPath !== "/menu") {
			document.getElementById("__next").style.overflowY = "unset";
		}
	}, [router]);

	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}
		resizeObserver();
		window.addEventListener("resize", () => {
			setViewport({ width: window.innerWidth, height: window.innerHeight });
		});
	}, []);

	return (
		<Provider store={store}>
			<SWRConfig
				value={{
					refreshInterval: 3000,
					fetcher: axiosFetcher,
					...(typeof window !== "undefined" && {
						provider: localStorageHandler,
					}),
				}}
			>
				<Component {...pageProps} />
			</SWRConfig>
		</Provider>
	);
}

export default MyApp;
