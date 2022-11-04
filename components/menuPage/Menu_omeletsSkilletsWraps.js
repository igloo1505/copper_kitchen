import React, { useState, useEffect } from "react";
import styles from "../../styles/Menu_omeletsSkilletsWraps.module.scss";
import { connect } from "react-redux";

const Menu_omeletsSkilletsWraps = ({ UI }) => {
	//const { data, error } = useSWR(
	//"https://api.github.com/repos/vercel/swr",
	//fetcher
	//);
	return (
		<div className={styles.Menu_omeletsSkilletsWrapsContainer}>
			Menu_omeletsSkilletsWraps
		</div>
	);
};
const mapStateToProps = (state, props) => ({
	UI: state.UI,
	props: props,
});
export default connect(mapStateToProps)(Menu_omeletsSkilletsWraps);
