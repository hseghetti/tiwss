import { SEARCH_ACTION } from "../actionTypes";

const initialState = {
    action: "reset",
    criteria: ""
};

// TODO: rename act refactoring names and the action
const search = (state = initialState, act) => {
    switch (act.type) {
        case SEARCH_ACTION: {
            const { action, criteria } = act.payload;
            return {
                action: action,
                criteria: criteria
            };
        }
        default: {
            return state;
        }
    }
};

export default search;