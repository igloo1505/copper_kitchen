import * as ids from "../utils/domIDs";
import gsap from "gsap";
import heroStyles from "../styles/Hero.module.scss";

export const onInitialLoad = (e) => {
	if (typeof window === "undefined") {
		return;
	}
	let em = document.getElementById(ids.copper_heroImage);
	setTimeout(() => {
		em.classList.add(heroStyles.copper_heroImage_enter);
		setTimeout(() => {
			em.style.transition = "unset";
		}, 1500);
	}, 2500);
};
