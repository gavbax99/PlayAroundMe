// changing the set
export const changeSet = setName => ({
		type: "CHANGE_SET",
		setName
});

// updating the source array
export const updateSourceArray = sourceArr => ({
	type: "UPDATE_SOURCE_ARRAY",
	sourceArr
});

// updating the payed for array
export const updatePayedForArray = payedForArr => ({
	type: "UPDATE_PAYED_FOR_ARRAY",
	payedForArr
});

// updating the sort buttons
export const updateCSButton = csButton => ({
	type: "UPDATE_CS_BUTTON",
	csButton
});

// updating the sort buttons
export const updateRemovalButton = removalButton => ({
	type: "UPDATE_REMOVAL_BUTTON",
	removalButton
});

// updating the sort buttons
export const updatePumpButton = pumpButton => ({
	type: "UPDATE_PUMP_BUTTON",
	pumpButton
});

// updating the sort buttons
export const updateModal = modalButton => ({
	type: "UPDATE_MODAL",
	modalButton
});

