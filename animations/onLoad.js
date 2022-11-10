import * as ids from "../utils/domIDs";
import gsap from "gsap";
import heroStyles from "../styles/Hero.module.scss";
import {
	clearOldClasses,
	getDeviceBasedClass,
	getHeroDims,
	getHeroClass,
} from "../utils/resizeObserver";
import store from "../state/store";
import * as Types from "../state/Types";

let hasSetInitialRender = false;
export const onInitialLoad = (e) => {
	if (typeof window === "undefined" || hasSetInitialRender) {
		return;
	}
	let vpType = getDeviceBasedClass();
	let em = document.getElementById(ids.copper_heroImage);
	if (!em) {
		return;
	}
	let dms = getHeroDims(vpType, false);
	console.log("dms: ", dms);
	em.style.width = `${dms.width}px`;
	em.style.height = `${dms.height}px`;
	em.classList.add(getHeroClass(vpType));
	let overlay = document.getElementById(ids.heroOverlay);
	setTimeout(() => {
		let newdms = getHeroDims(vpType, true);
		em.style.transition =
			"width 1.3s ease-in-out, height 1.3s ease-in-out, transform 1.3s ease-in-out";
		em.style.width = `${newdms.width}px`;
		em.style.height = `${newdms.height}px`;
		overlay.classList.add(heroStyles.heroOverlay_enter);
		store.dispatch({
			type: Types.HERO_ENTERED,
			payload: true,
		});
	}, 500);
};
