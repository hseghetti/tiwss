import React, { useContext } from 'react';
import { Store } from './context/store';
import { TagCloud } from 'react-tagcloud';
import './WordsList.css';

function WordsList() {
    const { state } = useContext(Store);

    const getTags = () => {
        if (state.tagsListFiltered.length) return state.tagsListFiltered;
        if (state.tagsList.length) return state.tagsList;
        return [{ value: 'She did not say anything about it yet...', count: 100 }];
    };

    return (
        <div className="WordsList">
            <TagCloud
                minSize={12}
                maxSize={100}
                tags={getTags()}
                className="WordsList"
                shuffle={!state.tagsListFiltered.length}
            />
        </div>
    );
}

export default WordsList;
