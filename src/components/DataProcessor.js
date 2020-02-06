import _ from "lodash";
import { addWordList } from '../context/actions';
import PropTypes from "prop-types";
import React from "react";
import settingsHelper from "../settings/settings-helper";

class DataProcessor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            urls: []
        };
        this.wordpos = null;
    };

    componentDidMount() {
        this.createWordposInstance();
    }

    static getDerivedStateFromProps(props, state) {
        if (_.difference(props.urls, state.urls).length) {
            return {
                urls: props.urls
            };
        }

        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!_.isEqual(prevState.urls, this.state.urls)) {
            this.getSitesText(this.state.urls);
        }
    };

    createWordposInstance = () => {
        this.wordpos = window.wordpos = new window.WordPOS({
            // preload: true,
            // dictPath: 'https://unpkg.com/browse/wordpos-web@1.0.0/dict',
            dictPath: "https://cdn.jsdelivr.net/npm/wordpos-web@1.0.2/dict",
            profile: true,
            debug: true,
            // stopwords: false
        });
    };

    processData = (url, siteData) => {
        // NOTE: We have the url for future possible usages
        console.info('Process Data Begin --- Site: --- ' + Date.now());
        this.wordpos.getAdjectives(siteData)
            .then(res => {
                this.getVerbs(siteData, res)
            });
    };

    getVerbs = (data, response) => {
        this.wordpos.getVerbs(data)
            .then(res => {
                console.info('Process Data Ends  --- Site: --- ' + Date.now());
                this.handleDataProcessCompleted(_.union(response, res))
            });
    };

    handleDataProcessCompleted  = words => {
        this.props.dispatcher(addWordList(words));
    };

    getServiceUrl = (url) => (
        settingsHelper.serverURL + settingsHelper.getTextPath.replace('{query}', url)
    );

    getSitesText = urls => {
        urls.forEach(url => {
            console.info('Request Begin --- Site: ' + url+ ' --- ' + Date.now());
            fetch(this.getServiceUrl(url))
                .then(response => {
                   return response.text();
                })
                .then(text => {
                    console.info('Request Ends  --- Site: ' + url+ ' --- ' + Date.now());
                    this.processData(url, text);
                })
                .catch(error => {
                    console.log(error);
                });
        });
    };

    render() {
        return null;
    }
}

DataProcessor.propTypes = {
    urls: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default DataProcessor;