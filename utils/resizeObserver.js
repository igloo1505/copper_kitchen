import heroStyles from "../styles/Hero.module.scss";
import * as ids from "./domIDs";
import store from "../state/store";
import Router from "next/router";

let vpTypes = {
	default: "",
	wide: "wide",
	narrow: "narrow",
	tallNarrow: "tallNarrow",
	ultraWide: "ultraWide",
};

export const getHeroClass = (vpType) => {
	return heroStyles[`copper_heroImage_${vpType}`];
};

export const getHeroDims = (key, afterAnim) => {
	if (typeof window === "undefined") return;
	let vw = window.innerWidth;
	let width;
	if (!afterAnim) {
		switch (key) {
			case vpTypes.default:
				width = 1.6 * vw;
				break;
			case vpTypes.narrow:
				width = 2 * vw;
				break;
			case vpTypes.tallNarrow:
				width = 3 * vw;
				break;
			case vpTypes.wide:
				width = 1.4 * vw;
				break;
			case vpTypes.ultraWide:
				width = 1.4 * vw;
				break;
			default:
				width = 1 * vw;
		}
	}
	if (afterAnim) {
		if (window.innerHeight <= 1.33 * vw) {
			width = 1 * vw;
		}
		if (window.innerHeight > 1.33 * vw) {
			width = (1 * window.innerHeight) / 1.33;
		}
	}
	return {
		width: width,
		height: 1.333 * width,
	};
};

export const clearOldClasses = (newClass, em, baseClass, clearAll) => {
	Object.keys(vpTypes).forEach((k, i) => {
		if (newClass === "") clearAll = true;
		if (k === newClass && !clearAll) {
			return;
		}
		em.classList.remove(heroStyles[`${baseClass}_${k}`]);
	});
	return em;
};

export const getDeviceBasedClass = () => {
	if (typeof window === "undefined") {
		return;
	}
	let dim = {
		w: window.innerWidth,
		h: window.innerHeight,
	};
	let vpType = vpTypes.default;
	let r = dim.h / dim.w;
	console.log("ratio: ", dim.w, dim.h, r);
	if (r > 1.5) vpType = vpTypes.tallNarrow;
	if (r > 1.08 && r < 1.5) vpType = vpTypes.narrow;
	if (r < 0.85) vpType = vpTypes.wide;
	return vpType;
};

export const setHeroScale = (e, force) => {
	if (Router.asPath === "/menu") return;
	let em = document.getElementById(ids.copper_heroImage);
	// let hasEntered = store.getState().UI.landing.heroEntered;
	em.style.transition = "unset";
	let vpType = getDeviceBasedClass();
	let dms = getHeroDims(vpType, true);
	em.style.width = `${dms.width}px`;
	em.style.height = `${dms.height}px`;
	// let b = hasEntered ? "copper_heroImage_enter" : "copper_heroImage";
	// let _em = clearOldClasses(vpType, em, b);
	// _em.classList.add(heroStyles[`${b}_${vpType}`]);
};

export const resizeObserver = () => {
	if (typeof window === "undefined") {
		return;
	}

	window.addEventListener("resize", (e) => {
		setHeroScale(e);
	});
};
