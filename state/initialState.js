const initialState = {
	UI: {
		drawer: {
			isOpen: false,
		},
		toast: {
			isOpen: false,
			message: "",
			type: null,
		},
		landing: {
			heroEntered: false,
		},
		viewport: {
			width: 0,
			height: 0,
		},
	},
};

export default initialState;
