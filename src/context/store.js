import React from 'react';
import { SEARCH_ACTION, ADD_WORD_LIST } from './actionTypes';
import _ from 'lodash';
import blackListedWords from './blackListedWords';

const initialState = {
    wordsList: {
        Welcome: 1
    },
    tagsList: [{ value: 'She did not say anything about that', count: 100 }],
    tagsListFiltered: [],
    loading: false
};

export const Store = React.createContext(initialState);

const isAllowed = word => {
    return !blackListedWords.includes(word) && isNaN(word);
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_ACTION: {
            const newState = _.clone(state);
            const { loading } = action.payload;

            newState.loading = loading;

            if (loading) {
                newState.wordsList = [];
                newState.tagsList = [];
                newState.tagsListFiltered = [];
            } else if (newState.tagsList.length) {
                newState.tagsListFiltered = orderWordsList(newState.tagsList);
            }

            return newState;
        }
        case ADD_WORD_LIST: {
            const newState = _.clone(state);
            const { wordList } = action.payload;
            newState.loading = true;

            for (let word of wordList) {
                word = word.toLowerCase();

                if (isAllowed(word)) {
                    let wordCount = newState.wordsList[word];
                    newState.wordsList[word] = wordCount ? wordCount + 1 : 1;
                }
            }

            newState.tagsList = getTagsList(newState.wordsList);

            return newState;
        }
        default: {
            return state;
        }
    }
}

function getTagsList(wordsList) {
    const filteredList = [];
    const values = Object.entries(wordsList);

    values.forEach(word => {
        if (word[1] > 2) {
            filteredList.push({ value: word[0], count: word[1] });
        }
    });

    return filteredList;
}

// TODO: Test and improve this logic to have a better filter after analyze results.
function orderWordsList(tagsList) {
    const median = arr => {
        const mid = Math.floor(arr.length / 2);
        // eslint-disable-next-line array-callback-return
        const orderedList = arr.sort((a, b) => {
            if (a.count > b.count) return -1;
            if (a.count < b.count) return 1;
            if (a.value > b.value) return 1;
            if (a.value > b.value) return -1;
        });

        return orderedList.slice(0, mid);
    };
    return median(tagsList);
}

export function StoreProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };

    return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
