import React from "react";
import { TagCloud } from 'react-tagcloud'

function WordsList({ wordsList}) {

    const worldsList = getWordsListFormatted(wordsList.wordsList);

    return (
        <div>
            <TagCloud
                minSize={12}
                maxSize={100}
                tags={worldsList}
            />
        </div>
    );
}

const getWordsListFormatted = wordsList => {
    const filteredList = [];

    Object.entries(wordsList).forEach((word) => {
        if (word[1] > 1) {
            filteredList.push({value: word[0], count: word[1]});
        }
    });

    return filteredList;
};

export default WordsList;