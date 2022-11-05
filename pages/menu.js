import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import gsap from "gsap";
import * as ids from "../utils/domIDs";
import { data } from "../utils/menuItems";
import { CategoryEnum } from "../classes/MenuItem";
import styles from "../styles/MenuPage.module.scss";
import Menu_Salad from "../components/menuPage/Menu_Salad";
import Menu_extras from "../components/menuPage/Menu_extras";
import Menu_eggsAndSuch from "../components/menuPage/Menu_eggsAndSuch";
import Menu_kidsSpecials from "../components/menuPage/Menu_kidsSpecials";
import Menu_weeklySpecials from "../components/menuPage/Menu_weeklySpecials";
import Menu_breakfastSweets from "../components/menuPage/Menu_breakfastSweets";
import Menu_burgersAndSandwiches from "../components/menuPage/Menu_burgersAndSanwiches";
import Menu_omeletsSkilletsWraps from "../components/menuPage/Menu_omeletsSkilletsWraps";
import MenuPageTab from "../components/menuPage/MenuPageTab";
import { hidden } from "colors";
import MenuTabs from "../components/MenuTabs";

// const handleTabToggle = (activeIndex, newIndex) => {
// 	if (typeof window === "undefined") return;
// 	let activeEm = document.getElementById(ids[`menuPageTab${activeIndex}`]);
// 	let newEm = document.getElementById(ids[`menuPageTab${newIndex}`]);
// 	activeEm?.classList.remove(styles.menuPageTab_visible);
// 	setTimeout(() => {
// 		newEm?.classList.add(styles.menuPageTab_visible);
// 	});
// };

const handleTabToggle = (activeIndex, newIndex) => {
	console.log("activeIndex, newIndex: ", activeIndex, newIndex);
	let tl = gsap.timeline();
	if (typeof window === "undefined") return;
	let left = activeIndex > newIndex;
	// NOTE: Exit

	tl.to(`#${ids[`menuPageTab${activeIndex}`]}`, {
		...(left && { x: "100vw" }),
		...(!left && { x: "-100vw" }),
		// ...(left && { rotateZ: 20 }),
		// ...(!left && { rotateZ: -20 }),
		duration: 1,
		ease: "expo.out",
	});
	// tl.fromTo(
	// 	`#${ids[`menuPageTab${activeIndex}`]}`,
	// 	{
	// 		x: "-50%",
	// 	},
	// 	{
	// 		...(left && { x: "150vw" }),
	// 		...(!left && { x: "-150vw" }),
	// 		// opacity: 0,
	// 		// ...(left && { rotateZ: 20 }),
	// 		// ...(!left && { rotateZ: -20 }),
	// 		duration: 1.5,
	// 		ease: "expo.out",
	// 	}
	// );

	console.log("Running");
	// debugger;
	// NOTE: Enter
	// tl.fromTo(
	// 	`#${ids[`menuPageTab${newIndex}`]}`,
	// 	{
	// 		...(left && { x: "-100vw" }),
	// 		...(!left && { x: "100vw" }),
	// 		...(left && { rotateZ: -30 }),
	// 		...(!left && { rotateZ: 30 }),
	// 		// visibility: hidden,
	// 	},
	// 	{
	// 		// x: "-50%",
	// 		x: "-50%",
	// 		rotateZ: 0,
	// 		duration: 1,
	// 		ease: "expo.out",
	// 	}
	// );
};

const Menu = ({ UI, props }) => {
	const [tabIndex, setTabIndex] = useState(0);
	const [lastActiveIndex, setLastActiveIndex] = useState(1);
	const [isInitialTab, setIsInitialTab] = useState(true);
	useEffect(() => {
		// debugger;
		let allow = false;
		if (isInitialTab && tabIndex !== 0) {
			// debugger;
			setIsInitialTab(false);
			allow = true;
			let em = document
				.getElementsByClassName(styles.menuPageTab_initial)
				?.item(0);
			// BUG Remove or use this
			// em?.classList.remove(styles.menuPageTab_initial);
		}
		if (!isInitialTab || allow) {
			handleTabToggle(lastActiveIndex, tabIndex);
			setLastActiveIndex(tabIndex);
		}
	}, [tabIndex]);

	return (
		<div className={styles.menuPageContainer}>
			<MenuTabs activeIndex={tabIndex} setIndex={setTabIndex} />
			<div className={styles.menuPageInnerContainer}>
				<MenuPageTab index={0} activeIndex={tabIndex} initialPage isInitialTab>
					<Menu_omeletsSkilletsWraps />
					<Menu_eggsAndSuch />
					<Menu_breakfastSweets isBottomIndex />
				</MenuPageTab>
				<MenuPageTab index={1} activeIndex={tabIndex}>
					<Menu_burgersAndSandwiches />
					<Menu_Salad isBottomIndex />
				</MenuPageTab>
				<MenuPageTab index={2} activeIndex={tabIndex}>
					<Menu_weeklySpecials />
					<Menu_kidsSpecials isBottomIndex />
				</MenuPageTab>
			</div>
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	UI: state.UI,
	props: props,
});

export default connect(mapStateToProps)(Menu);
