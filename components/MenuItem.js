import React, { useState, useEffect } from "react";
import styles from "../styles/MenuItem.module.scss";
import { connect } from "react-redux";

const MenuItem = ({ UI }) => {
	return <div className={styles.MenuItemContainer}>MenuItem</div>;
};
const mapStateToProps = (state, props) => ({
	UI: state.UI,
	props: props,
});
export default connect(mapStateToProps)(MenuItem);
