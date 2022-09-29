const initialState = {
    personalData: {}
}

const PersonalReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_PROFILE":
            return {
                personalData: action.payload
            };
        default:
            return state;
    }
};

export default PersonalReducer;