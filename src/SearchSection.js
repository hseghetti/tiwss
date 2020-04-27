import React, { useContext, useState } from 'react';
import './SearchSection.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { searchAction } from './context/actions';
import { Store } from './context/store';

export default () => {
    const [query, setQuery] = useState('');
    const context = useContext(Store); // TODO: React recommends use two different context types
    const handleOnClick = function handleOnClick() {
        context.dispatch(searchAction(query, context.dispatch)); // TODO: Is there a way to avoid send the dispatch?
    };
    const handleOnEnter = function handleOnEnter(e) {
        if (e.key === 'Enter') {
            handleOnClick();
        }
    };
    const buttonProps = {
        color: 'primary',
        disabled: context.state.loading,
        onClick: handleOnClick,
        variant: 'outlined'
    };
    const inputProps = {
        className: 'SearchSection-input',
        disabled: context.state.loading,
        label: 'Do you want to know what she said?',
        onChange: e => setQuery(e.target.value),
        onKeyDown: handleOnEnter
    };

    return (
        <div className="SearchSection">
            <TextField {...inputProps} />
            <Button {...buttonProps}> SEARCH </Button>
        </div>
    );
};
