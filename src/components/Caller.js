import React from "react";
import Search from "./Search";

// TODO: temporal import with dev settings. Replace it with environment support
import settings from "../settings/dev";

class Caller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            i: 1,
            loading: false
        };

    }

    callService = (query) => {
        console.info('Request Begin --- Search ---' + Date.now());
        // fetch(settings.serverURL + settings.searchPath.replace('{query}', query))
        //     .then(response => {
        //         return response.json()
        //     })
        //     .then(json => {
        //         console.info('Request Ends --- Search ---' + Date.now());
        //         return this.props.onServiceCallDone(json.urls);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });

        // NOTE: This is to mock the response
        return this.props.onServiceCallDone(
            [
                'https://en.wikipedia.org/wiki/Boeing_737_MAX',
                'https://www.boeing.com/commercial/737max/',
                'https://www.boeing.com/737-max-updates/',
                'https://www.cnet.com/news/boeing-737-max-8-all-about-the-aircraft-flight-ban-and-investigations/'
            ]);
    };

    render() {
        const props = {
            handleOnClick: this.callService
        };

        return (
            <span>
                <Search {...props} />
            </span>
        );
    }
}

export default Caller;