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