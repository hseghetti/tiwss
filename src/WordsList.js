import React, { useContext } from 'react';
import { Store } from './context/store';
import { TagCloud } from 'react-tagcloud';

function WordsList() {
    const context = useContext(Store);
    const worldsList = getWordsListFormatted(context.state.wordsList);

    return (
        <div className="WordsList">
            <TagCloud minSize={12} maxSize={100} tags={worldsList} />
        </div>
    );
}

const getWordsListFormatted = wordsList => {
    const filteredList = [];

    Object.entries(wordsList).forEach(word => {
        if (word[1] > 1) {
            filteredList.push({ value: word[0], count: word[1] });
        }
    });

    return filteredList;
};

export default WordsList;
