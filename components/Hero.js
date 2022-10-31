import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import styles from "../styles/Hero.module.scss";
import Image from "next/image";
import copperEntrance from "../public/assets/copper_entrance_zoomedOut.jpeg";
import * as ids from "../utils/domIDs";
import { setHeroScale } from "../utils/resizeObserver";

const Hero = ({ UI }) => {
	useLayoutEffect(() => {
		if (typeof window === "undefined") {
			return;
		}
		setHeroScale(null, "force");
	}, []);

	return (
		<div className={styles.HeroContainer}>
			<Image
				src={copperEntrance}
				className={styles.copper_heroImage}
				alt="Copper Kitchen Entrance"
				id={ids.copper_heroImage}
				fill
			/>
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	UI: state.UI,
});

export default connect(mapStateToProps)(Hero);
