import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import useSWR from "swr";
import { connect } from "react-redux";
import styles from "../styles/Index.module.scss";
import { onInitialLoad } from "../animations/onLoad";
const Index = () => {
	const [hasCalledInitialRender, setHasCalledInitialRender] = useState(false);
	useEffect(() => {
		if (typeof window !== "undefined") {
			onInitialLoad();
		}
	}, []);

	return (
		<div className={styles.indexContainer}>
			<Hero />
		</div>
	);
};

export default Index;
