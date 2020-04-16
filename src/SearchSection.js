import React from "react";
import Search from "./components/Search";
import './SearchSection.css';
// TODO: temporal import with dev settings. Replace it with environment support
import settings from "./settings/dev";

class SearchSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            searching: false
        };

    }

    callService = (query) => {
        if (query && query !== this.state.query) {
            this.setState({query: query});

            this.props.onSearchingStarts();
            // fetch(settings.serverURL + settings.searchPath.replace('{query}', query))
            //     .then(response => {
            //         return response.json()
            //     })
            //     .then(json => {
            //         console.info('Request Ends --- Search ---' + Date.now());
            //         this.props.onServiceCallDone(json.urls);
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     });

            //TODO: This is to mock the response. Replace it with mock functionality
            this.props.onServiceCallDone(
                [
                    'https://en.wikipedia.org/wiki/Boeing_737_MAX',
                    'https://www.boeing.com/commercial/737max/',
                    'https://www.boeing.com/737-max-updates/',
                    'https://www.cnet.com/news/boeing-737-max-8-all-about-the-aircraft-flight-ban-and-investigations/'
                ]
            );
        }
    };

    render() {
        const props = {
            handleOnClick: this.callService,
            loading: this.props.loading
        };

        return (
            <div className="Caller">
                <Search {...props} />
            </div>
        );
    }
}

//TODO: propsTypes

export default SearchSection;