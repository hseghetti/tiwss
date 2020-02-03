import _ from "lodash";
import { ADD_WORD } from "../actionTypes";

const initialState = {
    wordsList: {
        Welcome: 1
    },
    word: ''
};


//we don't want to mutate state directly in reducers

const wordList = (state = initialState, action ) => {
    switch (action.type) {
        case ADD_WORD: {
            // console.log(state)
            const newState = _.clone(state);
            const { word } = action.payload;
            const wordCount = newState.wordsList[word];

            newState.wordsList[word] = (wordCount)? wordCount + 1 : 1;
            return {
                ...newState
            }
        }
        default: {
            return state;
        }
    }
};

export default wordList;