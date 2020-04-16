import SearchSection from "./SearchSection";
import DataProcessor from "./components/DataProcessor";
import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            urls: []
        }
    }

    handleServiceCallDone = (results = {}) => {
        this.setState({
            urls: results
        });
    };

    handleSearchingStarts = () => {
        this.setState({loading: true});
    };

    handleProcessEnds = () => {
        this.setState({loading: false});
    };

    renderProgress = () => {
        return (<LinearProgress />);
    };

    render() {
        return (
            <div>
                <SearchSection loading={this.state.loading} onSearchingStarts={this.handleSearchingStarts} onServiceCallDone={this.handleServiceCallDone} />
                <DataProcessor onProcessEnds={this.handleProcessEnds} urls={this.state.urls} dispatcher={this.props.dispatcher}/>
                {(this.state.loading)? this.renderProgress() : null}
            </div>
        );
    }
}

//TODO: Add propTypes
export default Header;