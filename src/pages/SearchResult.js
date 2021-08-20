/* eslint-disable */
import PropTypes from 'prop-types';
import {useEffect} from "react";

const SearchResult = ({location, search}) => {
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
    location: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    ).isRequired,
    search: PropTypes.func.isRequired,
};

export default SearchResult;