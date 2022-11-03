import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { IoMdStarHalf, IoMdStarOutline, IoMdStar } from "react-icons/io";
import styles from "../styles/GoogleReview.module.scss";

const evalStar = (n, i, stars) => {
	let x = stars - n;
	let em;
	switch (true) {
		case x >= -0.25:
			em = IoMdStar;
			break;
		case x >= -0.75 && x < -0.25:
			em = IoMdStarHalf;
			break;
		case x < -0.75:
			em = IoMdStarOutline;
			break;
		default:
			break;
	}
	return em;
};

const getStars = (stars) => {
	let a = [1, 2, 3, 4, 5];
	let _stars = a.map((d, i) => evalStar(d, i, stars));
	return _stars;
};

const GoogleReview = () => {
	let _stars = 4.3;
	let stars = getStars(_stars);
	console.log("stars: ", stars);
	return (
		<div className={styles.reviewsContainer}>
			<div className={styles.starsLabel}>380+ Reviews</div>
			<div className={styles.starsContainer}>
				{stars.map((s, i) => {
					let Star = s;
					return (
						<Star
							key={`googleRatinStar-${i}`}
							className={styles.googleRatingStar}
						/>
					);
				})}
			</div>
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	UI: state.UI,
	props: props,
});

export default connect(mapStateToProps)(GoogleReview);
