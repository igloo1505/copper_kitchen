import React, { useState, useEffect } from "react";
import styles from "../../styles/Menu_eggsAndSuch.module.scss";
import { connect } from "react-redux";

const Menu_eggsAndSuch = ({ UI }) => {
	//const { data, error } = useSWR(
	//"https://api.github.com/repos/vercel/swr",
	//fetcher
	//);
	return (
		<div className={styles.Menu_eggsAndSuchContainer}>Menu_eggsAndSuch</div>
	);
};
const mapStateToProps = (state, props) => ({
	UI: state.UI,
	props: props,
});
export default connect(mapStateToProps)(Menu_eggsAndSuch);
