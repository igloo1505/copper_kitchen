import * as ids from "./domIDs";

// const animate = (id, animation) =>
// 	// We create a Promise and return it
// 	new Promise((resolve, reject) => {
// 		let _anim = "animate__";
// 		const animationName = `${_anim}${animation}`;
// 		const em = document.getElementById(id);
// 		if (!em) return;
// 		em.classList.add(`${_anim}animated`, animationName);

// 		// When the animation ends, we clean the classes and resolve the Promise
// 		function handleAnimationEnd(event) {
// 			event.stopPropagation();
// 			em.classList.remove(`${_anim}animated`, animationName);
// 			resolve("Animation ended");
// 		}
// 		em.addEventListener("animationend", handleAnimationEnd, { once: true });
// 	});

// export const handleTabToggle = (now, next) => {
// 	// let currentEm = document.getElementById(ids[`menuPageTab${now}`]);
// 	// let nextEm = document.getElementById(ids[`menuPageTab${next}`]);
// 	// console.log("currentEm: ", currentEm);
// 	// console.log("nextEm: ", nextEm);
// 	animate(ids[`menuPageTab${now}`], "rotateOutUpRight");
// 	// currentEm.classList.add("animate__animated", "animate__rotateInDownRight");
// };
