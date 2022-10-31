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
	},
};

export default initialState;
