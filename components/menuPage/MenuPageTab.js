import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import styles from "../../styles/MenuPage.module.scss";
import * as ids from "../../utils/domIDs";

const MenuPageTab = ({ UI, index, activeIndex, children }) => {
	return (
		<div className={styles.menuPageTabRelWrapper}>
			<div
				className={clsx(
					styles.menuPageTab,
					activeIndex < index && styles.menuPageTab_shiftRight,
					activeIndex > index && styles.menuPageTab_shiftLeft,
					activeIndex === index && styles.menuPageTab_current
				)}
				id={ids[`menuPageTab${index}`]}
			>
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
