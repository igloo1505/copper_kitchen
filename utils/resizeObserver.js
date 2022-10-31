import heroStyles from "../styles/Hero.module.scss";
import * as ids from "./domIDs";

let vpTypes = {
	default: "",
	wide: "wide",
	narrow: "narrow",
	tallNarrow: "tallNarrow",
	ultraWide: "ultraWide",
};

const clearOldClasses = (newClass, em) => {
	Object.keys(vpTypes).forEach((k, i) => {
		if (k === newClass) {
			return;
		}
		em.classList.remove(heroStyles[`copper_heroImage_${k}`]);
	});
	return em;
};

export const setHeroScale = (e, force) => {
	let em = document.getElementById(ids.copper_heroImage);
	if (force) {
		em.style.transition = "all 0s";
	}
	if (!force) {
		em.style.transition = "all 1.5s ease-in-out";
	}
	let _e = e ? e.target : window;
	let dim = {
		w: _e.innerWidth,
		h: _e.innerHeight,
	};
	let vpType = vpTypes.default;
	let r = dim.h / dim.w;
	console.log("ratio: ", dim.w, dim.h, r);
	if (r > 1.5) vpType = vpTypes.tallNarrow;
	if (r > 1.08 && r < 1.5) vpType = vpTypes.narrow;
	if (r < 0.85) vpType = vpTypes.wide;
	let _em = clearOldClasses(vpType, em);
	_em.classList.add(heroStyles[`copper_heroImage_${vpType}`]);
};

export const resizeObserver = () => {
	if (typeof window === "undefined") {
		return;
	}

	window.addEventListener("resize", (e) => {
		setHeroScale(e);
	});
};
