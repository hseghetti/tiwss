import SearchSection from './SearchSection';
import React, { useContext } from 'react';
import { Store } from './context/store';
import LinearProgress from '@material-ui/core/LinearProgress';

export default () => {
    const context = useContext(Store);
    const renderProgress = () => {
        return <LinearProgress />;
    };

    return (
        <div className="Header">
            <SearchSection />
            {context.state.loading ? renderProgress() : null}
        </div>
    );
};
