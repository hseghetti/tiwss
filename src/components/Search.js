import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from "prop-types";
import './Search.css';

const Search = (props) => {
    const [query, setQuery] = useState('');
    const buttonProps = {
        color: 'primary',
        disabled: props.loading,
        onClick: () => props.handleOnClick(query),
        variant: 'outlined'
    };
    const inputProps = {
        className: 'Search-input',
        disabled: props.loading,
        label: 'Do you want to know what she said?',
        onChange: e => setQuery(e.target.value)
    };

    return (
        <div>
            <TextField {...inputProps} />
            <Button {...buttonProps}> SEARCH </Button>
        </div>
    );
};

Search.propTypes = {
    handleOnClick: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};

export default Search;