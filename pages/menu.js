import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import gsap from "gsap";
import * as ids from "../utils/domIDs";
import { data } from "../utils/menuItems";
import { CategoryEnum } from "../classes/MenuItem";
import styles from "../styles/MenuPage.module.scss";
import "animate.css";
import Menu_Salad from "../components/menuPage/Menu_Salad";
import Menu_extras from "../components/menuPage/Menu_extras";
import Menu_eggsAndSuch from "../components/menuPage/Menu_eggsAndSuch";
import Menu_kidsSpecials from "../components/menuPage/Menu_kidsSpecials";
import Menu_weeklySpecials from "../components/menuPage/Menu_weeklySpecials";
import Menu_breakfastSweets from "../components/menuPage/Menu_breakfastSweets";
import Menu_burgersAndSandwiches from "../components/menuPage/Menu_burgersAndSanwiches";
import Menu_omeletsSkilletsWraps from "../components/menuPage/Menu_omeletsSkilletsWraps";
import MenuPageTab from "../components/menuPage/MenuPageTab";
import MenuTabs from "../components/MenuTabs";
// import { handleTabToggle } from "../utils/MenuAnimation";

const Menu = () => {
	const [tabIndex, setTabIndex] = useState(0);
	useEffect(() => {
		if (typeof window === "undefined") return;
		let _parent = document.getElementById("menuPageContainer");
		let _child = document
			.getElementById(`menuPageTab${tabIndex + 1}-id`)
			?.getBoundingClientRect();
		let tabs = document
			.getElementById("menuTabContainer")
			?.getBoundingClientRect();

		console.log("tabs: ", tabs);
		console.log("_child: ", _child);
		let tHeight = tabs.height + tabs.top + _child.height + 4 * 16 + 8;
		console.log("tHeight: ", tHeight, window.innerHeight);
		_parent.style.height = `${tHeight}px`;
		window.addEventListener("scroll", (e) => {
			console.log(e.target);
		});
		document.addEventListener("scroll", (e) => {
			console.log("document", e.target);
		});
	}, [tabIndex]);

	return (
		<div className={styles.menuPageContainer} id="menuPageContainer">
			<div className={styles.menuPageTabRelWrapper}>
				<MenuTabs
					activeIndex={tabIndex}
					setIndex={setTabIndex}
					id="menuTabContainer"
				/>
				<div className={styles.menuPageInnerContainer}>
					<MenuPageTab
						index={0}
						activeIndex={tabIndex}
						initialPage
						isInitialTab
					>
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
		</div>
	);
};

export default Menu;
