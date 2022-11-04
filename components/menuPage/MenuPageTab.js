import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const MenuPageTab = ({ UI, index, activeIndex, children }) => {
	const [isShown, setIsShown] = useState(false);
	useEffect(() => {
		if (activeIndex === index) {
			return setIsShown(true);
		}
		setIsShown(false);
	}, [index, activeIndex]);

	return <div>{children}</div>;
};

const mapStateToProps = (state, props) => ({
	UI: state.UI,
	props: props,
});

export default connect(mapStateToProps)(MenuPageTab);
