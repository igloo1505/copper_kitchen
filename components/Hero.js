import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import styles from "../styles/Hero.module.scss";
import Image from "next/image";
import clsx from "clsx";
import copperEntrance from "../public/assets/copper_entrance_zoomedOut.jpeg";
import imagePlaceholder from "../public/assets/imagePlaceholder.jpg";
import * as ids from "../utils/domIDs";
import { setHeroScale, getDeviceBasedClass } from "../utils/resizeObserver";
import { FaDirections } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import HeroButton from "./HeroButton";
import gsap from "gsap";
import buttonStyles from "../styles/HeroButton.module.scss";
import GoogleReview from "./GoogleReview";
import reviewStyles from "../styles/GoogleReview.module.scss";

const atLibrary = false;

const Hero = ({
	UI: {
		landing: { heroEntered },
	},
}) => {
	const [hoursHovered, setHoursHovered] = useState(true);
	useEffect(() => {
		if (heroEntered) {
			animateEntrance({
				onComplete: () => {
					setHoursHovered(false);
					let _em = document.getElementById(ids.copper_heroImage);
					if (_em) {
						_em.style.transition = "unset";
					}
				},
			});
		}
	}, [heroEntered]);

	useLayoutEffect(() => {
		if (typeof window === "undefined") {
			return;
		}
		setHeroScale(null, "force");
	}, []);

	return (
		<div className={styles.HeroContainer}>
			<Image
				src={atLibrary ? imagePlaceholder : copperEntrance}
				className={styles.copper_heroImage}
				alt="Copper Kitchen Entrance"
				id={ids.copper_heroImage}
				fill
			/>
			<div className={styles.heroOverlay} id={ids.heroOverlay}>
				<div className={styles.heroGridContainer}>
					<div className={styles.titleTextContainer}>
						<div
							className={clsx(styles.heroTitle, "titleFont")}
							id={ids.heroTitle1}
						>
							{atLibrary ? "Some" : "Copper"}
						</div>
						<div
							className={clsx(styles.heroTitle, styles.heroTitle2, "titleFont")}
							id={ids.heroTitle2}
						>
							{atLibrary ? "Restaurant" : "Kitchen"}
						</div>
						<GoogleReview />
					</div>
					<div className={clsx(styles.heroInfoContainer)} id={ids.heroInfo}>
						<div className={styles.heroButtonsContainer}>
							<HeroButton
								id={ids.GalleryButton}
								text="Gallery"
								href="/gallery"
							/>
							<HeroButton id={ids.MenuButton} text="Menu" href="/menu" />
						</div>
						<div
							className={clsx(styles.heroInfoIndWrapper, styles.hoursText)}
							onMouseEnter={() => setHoursHovered(true)}
							onMouseLeave={() => setHoursHovered(false)}
						>
							<svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
								<rect
									className={clsx(
										styles.svgBorder,
										hoursHovered && styles.svgBorder_hover
									)}
									height="48"
									width="320"
								/>
								<foreignObject
									width="100%"
									height="48px"
									className={styles.foreignObject}
								>
									<div className={styles.hoursInner}>
										Open Tue thru Sun 7am-3pm
									</div>
								</foreignObject>
							</svg>
						</div>
						<div className={styles.heroInfoIndWrapper}>
							<a
								href="https://www.google.com/maps/place/Copper+Kitchen/@42.9729469,-87.912109,17z/data=!4m13!1m7!3m6!1s0x880517173c43b7c3:0x3da760522cde06be!2s3935+S+Howell+Ave,+Milwaukee,+WI+53207!3b1!8m2!3d42.9729469!4d-87.9099203!3m4!1s0x880517173e9fc8bd:0xec1156d5135d095d!8m2!3d42.9728697!4d-87.9097886"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaDirections className={styles.heroIcon} />
								3935 S Howell Ave, Milwaukee, WI
							</a>
						</div>
						<div className={styles.heroInfoIndWrapper}>
							<a href="tel:4144821315">
								<BsFillTelephoneFill className={styles.heroIcon} />
								(414) 482-1315
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	UI: state.UI,
	props: props,
});

export default connect(mapStateToProps)(Hero);

const animateEntrance = ({ onComplete }) => {
	let _id = ids._id;
	let tl = gsap.timeline({ onComplete: onComplete });
	tl.to(_id(ids.heroTitle1), {
		opacity: 1,
		x: 0,
		duration: 0.75,
		ease: "power4.out",
	});
	tl.to(
		_id(ids.heroTitle2),
		{
			opacity: 1,
			x: 0,
			duration: 0.75,
			ease: "power4.out",
		},
		"-=0.35"
	);
	tl.to(`.${styles.heroInfoIndWrapper}`, {
		y: 0,
		opacity: 1,
		duration: 0.35,
		stagger: 0.1,
		ease: "back.out(0.7)",
	});
	tl.to(`.${buttonStyles.heroButtonContainer}`, {
		opacity: 1,
		scale: 1,
		stagger: 0.2,
		ease: "elastic.out(1, 0.6)",
	});
	tl.to(`.${reviewStyles.googleRatingStar}`, {
		opacity: 1,
		duration: 0.25,
		stagger: 0.05,
		ease: "power4.out",
	});
	tl.to(
		`.${reviewStyles.starsLabel}`,
		{
			opacity: 1,
			duration: 0.25,
			stagger: 0.05,
			ease: "power4.out",
		},
		"-=0.2"
	);
};
