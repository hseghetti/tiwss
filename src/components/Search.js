import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import PropTypes from "prop-types";

const Search = (props) => {
    const [query, setQuery] = useState("");

    return (
        <div>
            <Input onChange={e => setQuery(e.target.value)} />
            <Button onClick={ () => props.handleOnClick(query) } value={"click here"}> SEARCH </Button>
        </div>
    );
};

Search.propTypes = {
    handleOnClick: PropTypes.func.isRequired
};

export default Search;