import heroStyles from "../styles/Hero.module.scss";
import * as ids from "./domIDs";
import store from "../state/store";

let vpTypes = {
	default: "",
	wide: "wide",
	narrow: "narrow",
	tallNarrow: "tallNarrow",
	ultraWide: "ultraWide",
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
	let em = document.getElementById(ids.copper_heroImage);
	let hasEntered = store.getState().UI.landing.heroEntered;
	em.style.transition = "unset";
	let vpType = getDeviceBasedClass();
	let b = hasEntered ? "copper_heroImage_enter" : "copper_heroImage";
	let _em = clearOldClasses(vpType, em, b);
	_em.classList.add(heroStyles[`${b}_${vpType}`]);
	console.log("vpType: ", vpType);
};

export const resizeObserver = () => {
	if (typeof window === "undefined") {
		return;
	}

	window.addEventListener("resize", (e) => {
		setHeroScale(e);
	});
};
