import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styles from "../styles/HeroButton.module.scss";
import Link from "next/link";
import clsx from "clsx";

const HeroButton = ({ UI, text, id, onClick, href }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className={styles.heroButtonContainer}
			id={id}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Link href={href}>
				<span> {text}</span>
				<div
					className={clsx(
						styles.heroButtonUnderline,
						isHovered && styles.heroButtonUnderlineHovered
					)}
				/>
			</Link>
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	UI: state.UI,
	props: props,
});

export default connect(mapStateToProps)(HeroButton);
