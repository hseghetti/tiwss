import React from 'react'
import {ADD_WORD, ADD_WORD_LIST} from "./actionTypes";
import _ from "lodash";

export const Store = React.createContext();

const initialState = {
    wordsList: {
        Welcome: 1
    },
    word: ''
};

function reducer (state = initialState, action ) {
    switch (action.type) {
        case ADD_WORD: {
            const newState = _.clone(state);
            const { word } = action.payload;
            const wordCount = newState.wordsList[word];

            newState.wordsList[word] = (wordCount)? wordCount + 1 : 1;
            return {
                ...newState
            }
        }
        case ADD_WORD_LIST: {
            const newState = _.clone(state);
            const { wordList } = action.payload;

            wordList.forEach( word => {
                let wordCount = newState.wordsList[word];
                newState.wordsList[word] = (wordCount)? wordCount + 1 : 1;
            });

            return {
                ...newState
            }
        }
        default: {
            return state;
        }
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };

    return <Store.Provider value={value}>{props.children}</Store.Provider>
};