const Utility = {};

const isPrimitive = (val) => {
	return typeof val !== 'object' || val === null;
};

Utility.deepClone = function deepClone(o) {
	if (isPrimitive(o)) {
		return o;
	}

	const clonedObj = Array.isArray(o) ? [] : {};

	for (let key of Object.keys(o)) {
		const val = o[key];
		clonedObj[key] = isPrimitive(val) ? val : deepClone(val);
	}

	return clonedObj;
};

export default Utility;
