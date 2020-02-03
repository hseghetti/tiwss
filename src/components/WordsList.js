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
        return Object.entries(wordsList).map((word) => {
            return {value: word[0], count: word[1]};
        });
};

export default WordsList;