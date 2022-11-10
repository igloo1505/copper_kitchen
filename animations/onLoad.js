import * as ids from "../utils/domIDs";
import gsap from "gsap";
import heroStyles from "../styles/Hero.module.scss";
import { clearOldClasses, getDeviceBasedClass } from "../utils/resizeObserver";
import store from "../state/store";
import * as Types from "../state/Types";

let hasSetInitialRender = false;
export const onInitialLoad = (e) => {
	if (typeof window === "undefined" || hasSetInitialRender) {
		return;
	}
	// hasSetInitialRender = true;
	let vpType = getDeviceBasedClass();
	let em = document.getElementById(ids.copper_heroImage);
	setTimeout(() => {
		if (store.getState().UI.landing.heroEntered) {
			return;
		}
		let _em = clearOldClasses(null, em, "copper_heroImage", true);
		_em.style.transition =
			"transform 1.5s ease-in-out, width 1.5s ease-in-out 0.5s, height 1.5s ease-in-out 0.5s";
		_em.classList.add(heroStyles.copper_heroImage_enter);
		_em.classList.add(heroStyles[`copper_heroImage_enter_${vpType}`]);
		let hero = document.getElementById(ids.heroOverlay);
		setTimeout(() => {
			hero.classList.add(heroStyles.heroOverlay_enter);
			setTimeout(() => {
				store.dispatch({
					type: Types.HERO_ENTERED,
				});
			}, 750);
		}, 2000);
	}, 500);
};
