// import initial set
import M21 from "../Sets/M21";
const setM21 = M21;

// import other sets
// ...

const initState = {
	setData: setM21,
	sourceArr: [],
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

		// first return the initState
		default:
			return initState;
	};
};

export default rootReducer;