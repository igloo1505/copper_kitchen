import React, { useState, useEffect } from "react";
import styles from "../styles/MenuTabs.module.scss";
import clsx from "clsx";

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

const MenuTabs = ({ activeIndex, setIndex }) => {
	return (
		<div className={styles.menuTabContainer}>
			<MenuTab
				text="Breakfast"
				index={0}
				activeIndex={activeIndex}
				setIndex={setIndex}
			/>
			<MenuTab
				text="Lunch"
				index={1}
				activeIndex={activeIndex}
				setIndex={setIndex}
			/>
			<MenuTab
				text="Specials"
				index={2}
				activeIndex={activeIndex}
				setIndex={setIndex}
			/>
		</div>
	);
};

export default MenuTabs;
