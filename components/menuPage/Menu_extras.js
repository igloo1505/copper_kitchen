import React, { useState, useEffect } from "react";
import styles from "../../styles/Menu_extras.module.scss";
import { connect } from "react-redux";

const Menu_extras = ({ UI }) => {
	//const { data, error } = useSWR(
	//"https://api.github.com/repos/vercel/swr",
	//fetcher
	//);
	return <div className={styles.Menu_extrasContainer}>Menu_extras</div>;
};
const mapStateToProps = (state, props) => ({
	UI: state.UI,
	props: props,
});
export default connect(mapStateToProps)(Menu_extras);
