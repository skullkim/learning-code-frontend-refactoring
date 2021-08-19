import PropTypes from 'prop-types';

/* eslint-disable */
const SearchResult = ({location, toggleSearch}) => {
    console.log(toggleSearch);
    return (<div>search result</div>)
}

SearchResult.propTypes = {
    toggleSearch: PropTypes.func.isRequired,
    location: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    ).isRequired
};

export default SearchResult;