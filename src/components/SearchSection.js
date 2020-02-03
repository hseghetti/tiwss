import Caller from "./Caller";
import DataProcessor from "./DataProcessor";
import React from "react";

class SearchSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: []
        }
    }

    handleServiceCallDone = (results = {}) => {
        this.setState({
            urls: results
        });
    };

    render() {
        return (
            <div>
                <Caller onServiceCallDone={this.handleServiceCallDone} />
                <DataProcessor urls={this.state.urls} dispatcher={this.props.dispatcher}/>
            </div>
        );
    }
}

//TODO: Add propTypes
export default SearchSection;