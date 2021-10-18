export default (state, { type, payload }) => {
	switch (type) {
		case 'GetInfo':
			return {
				...state,
				courses: payload
			};
			break;
		default:
			return state;
			break;
	}
};
