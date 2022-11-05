import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import styles from "../../styles/MenuPage.module.scss";
import * as ids from "../../utils/domIDs";

const MenuPageTab = ({ UI, index, activeIndex, children }) => {
	const [isShown, setIsShown] = useState(false);
	useEffect(() => {
		if (activeIndex === index) {
			return setIsShown(true);
		}
		setIsShown(false);
	}, [index, activeIndex]);

	return (
		<div className={styles.menuPageTabRelWrapper}>
			<div className={styles.menuPageTab} id={ids[`menuPageTab${index}`]}>
				{children}
			</div>
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	UI: state.UI,
	props: props,
});

export default connect(mapStateToProps)(MenuPageTab);
