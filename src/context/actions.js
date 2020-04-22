import { SEARCH_ACTION, ADD_WORD_LIST } from './actionTypes';
import settingsHelper from '../settings/settings-helper'; // Ver porque tengo dos settings aca

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

export const searchAction = (criteria, dispatcher) => {
    if (!dispatch) {
        dispatch = dispatcher;
    }

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
        });

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
    const response = await fetch(settingsHelper.serverURL + settingsHelper.searchPath.replace('{query}', criteria));
    const json = await response.json();

    return json.urls;
};

const callSiteService = async sites => {
    for (let site in sites) {
        const url = settingsHelper.serverURL + settingsHelper.getTextPath.replace('{query}', site);
        const response = await fetch(url);
        const text = await response.text();
        processData(text);
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
