// import sets
import M21 from "../Sets/M21";
import TXM from "../Sets/TXM";

const setM21 = M21;
const setTXM = TXM;

const initState = {
	setData: setM21,
	sourceArr: [],
	payedForArr: [],
	csButton: false,
	removalButton: false,
	pumpButton: false,
	modalButton: {
		show: false,
		name: "Name",
		desc: "Desc"
	},
};

const rootReducer = (state = initState, action) => {
	switch (action.type) {
		
		// changing the set
		case "CHANGE_SET":
			return Object.assign({}, state, {
				setData: eval(action.setName),
				// also clear the data on screen
			});

		// update the source array
		case "UPDATE_SOURCE_ARRAY":
			return Object.assign({}, state, {
				sourceArr: action.sourceArr,
			});

		// update the payed for array
		case "UPDATE_PAYED_FOR_ARRAY":
			return Object.assign({}, state, {
				payedForArr: action.payedForArr,
			});

		// update the sort buttons
		case "UPDATE_CS_BUTTON":
			return Object.assign({}, state, {
				csButton: action.csButton,
			});

		// update the sort buttons
		case "UPDATE_REMOVAL_BUTTON":
			return Object.assign({}, state, {
				removalButton: action.removalButton,
			});

		// update the sort buttons
		case "UPDATE_PUMP_BUTTON":
			return Object.assign({}, state, {
				pumpButton: action.pumpButton,
			});

		// update the modal
		case "UPDATE_MODAL":
			return Object.assign({}, state, {
				modalButton: action.modalButton,
			});

		// first return the initState
		default:
			return initState;
	};
};

export default rootReducer;