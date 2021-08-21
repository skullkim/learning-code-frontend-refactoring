import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Header from '../components/Header';
import {search} from '../modules/search';
import SearchResult from "../pages/SearchResult";

const HeaderContainer = ({startSearch, search: searchTarget}) => {
    return <Header startSearch={startSearch} search={searchTarget} />
}

const SearchResultContainer = ({search: searchTarget}) => {
    return <SearchResult search={searchTarget} />
}

HeaderContainer.propTypes = {
    startSearch: PropTypes.bool.isRequired,
    search: PropTypes.func.isRequired,
};

SearchResultContainer.propTypes = {
    search: PropTypes.func.isRequired,
};

export const PageHeader =  connect(
    ({searchReducer}) => ({
        startSearch: searchReducer.startSearch,
    }),
    {
        search,
    }
)(HeaderContainer);

export const SearchResultPage = connect(
    () => ({}),
    {
        search,
    }
)(SearchResultContainer);
