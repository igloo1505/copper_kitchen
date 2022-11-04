import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import clsx from "clsx";
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

const MenuTab = ({ text, index, activeIndex, setIndex }) => {
	const [isActive, setIsActive] = useState(false);
	useEffect(() => {
		if (activeIndex === index) {
			return setIsActive(true);
		}
		setIsActive(false);
	}, [activeIndex, index]);

	return (
		<div
			className={clsx(
				styles.menuTab,
				styles[`menuTab_${index}`],
				isActive && styles.menuTabActive
			)}
			onClick={() => setIndex(index)}
		>
			{text}
			<div className={styles.menuTabUnderline} />
		</div>
	);
};

const Menu = ({ UI, props }) => {
	let cat = new CategoryEnum();
	const [tabIndex, setTabIndex] = useState(0);

	return (
		<div className={styles.menuPageContainer}>
			<div className={styles.menuTabContainer}>
				<MenuTab
					text="Breakfast"
					index={0}
					activeIndex={tabIndex}
					setIndex={setTabIndex}
				/>
				<MenuTab
					text="Lunch"
					index={1}
					activeIndex={tabIndex}
					setIndex={setTabIndex}
				/>
				<MenuTab
					text="Specials"
					index={2}
					activeIndex={tabIndex}
					setIndex={setTabIndex}
				/>
			</div>
			<div className={styles.menuPageInnerContainer}>
				<MenuPageTab index={0} activeIndex={tabIndex}>
					<Menu_burgersAndSandwiches />
					<Menu_weeklySpecials />
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
