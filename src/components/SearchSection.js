import React from "react";
import Caller from "./Caller";
import DataProcessor from "./DataProcessor";

class SearchSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: []
        }
    }

    handlePoplet = (w) => {
        this.props.dispatcher(w)
    };

    handleServiceCallDone = (results = {}) => {
        this.setState({
            urls: results
        });
    };

    render() {
        return (
            <div>
                <Caller onServiceCallDone={this.handleServiceCallDone} />
                <DataProcessor urls={this.state.urls} dispatcher={this.handlePoplet}/>
            </div>
        );
    }
}

//TODO: Add propTypes
export default SearchSection;