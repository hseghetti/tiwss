import { SEARCH_ACTION, ADD_WORD_LIST } from './actionTypes';
import settingsHelper from '../settings/settings';

const wordpos = (() => {
    return (window.wordpos = new window.WordPOS({
        // preload: true,
        // dictPath: 'https://unpkg.com/browse/wordpos-web@1.0.0/dict',
        dictPath: 'https://cdn.jsdelivr.net/npm/wordpos-web@1.0.2/dict',
        profile: true,
        debug: true
        // stopwords: false
    }));
})();
let dispatch = undefined;

// Actions creators
const searchingCompleted = () => ({
    type: SEARCH_ACTION,
    payload: {
        loading: false
    }
});

const search = criteria => {
    callSearchService(criteria)
        .then(urls => {
            return callSiteService(urls);
        })
        .then(() => {
            dispatch(searchingCompleted());
        })
        .catch(e => {
            // TODO: Implement error handling
            console.log(e);
            dispatch(searchingCompleted());
        });
};

export const searchAction = (criteria, dispatcher) => {
    if (!dispatch) {
        dispatch = dispatcher;
    }

    search(criteria);

    return {
        type: SEARCH_ACTION,
        payload: {
            loading: true
        }
    };
};

export const addWordList = wordList => {
    return {
        type: ADD_WORD_LIST,
        payload: {
            wordList: wordList
        }
    };
};

const callSearchService = async criteria => {
    const url = settingsHelper.searchPath.replace('{query}', criteria);
    const response = await fetch(url);
    const json = await response.json();

    return json.urls;
};

const callSiteService = async sites => {
    for (let site of sites) {
        const url = settingsHelper.getTextPath.replace('{query}', site);
        const response = await fetch(url);
        const text = await response.text();
        await processData(text);
    }
};

const processData = async siteText => {
    const adjetives = await getAdjetives(siteText);
    const verbs = await getVerbs(siteText);

    dispatch(addWordList([...adjetives, ...verbs]));
};

const getAdjetives = async text => {
    return new Promise(resolved => {
        wordpos.getAdjectives(text).then(adjetives => resolved(adjetives));
    });
};

const getVerbs = async text => {
    return new Promise(resolved => {
        wordpos.getVerbs(text).then(adjetives => resolved(adjetives));
    });
};
