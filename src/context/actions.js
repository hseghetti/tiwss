import { ADD_WORD, SEARCH_ACTION } from "./actionTypes";

// Actions creators

export const addWord = (word) => ({
    type: ADD_WORD,
    payload: {
        wordList: {},
        word: word
    }
});

export const searchAction = (criteria, action) => ({
    type: SEARCH_ACTION,
    payload: {
        action: action,
        criteria: criteria
    }
});