import React from "react";
import _ from 'lodash';
import { connect } from "react-redux";
// import { WordCloud } from "word-cloud-react";
import PropTypes from "prop-types";

// import WordCloud from 'react-d3-cloud';

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

// TODO: remove redux
// const mapStateToProps = state => {
//     return {
//         wordsList: state.wordsList
//     };
// };

// WordsList.propTypes = {
//     wordsList: PropTypes.object.isRequired
// };

// export default connect(mapStateToProps)(WordsList);
export default WordsList;