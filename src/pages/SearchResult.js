/* eslint-disable */
import PropTypes from 'prop-types';
import {useEffect, useState} from "react";
import {useLocation} from 'react-router-dom';

const SearchResult = ({search}) => {
    const [loc, setLoc] = useState(useLocation());

    useEffect(() => {
      search(false);
    });

    return (
      <div>
        search result
      </div>
    );
}

SearchResult.propTypes = {
    search: PropTypes.func.isRequired,
};

export default SearchResult;