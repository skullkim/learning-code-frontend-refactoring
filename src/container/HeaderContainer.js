import PropTypes from "prop-types";
import {connect} from "react-redux";

import Header from '../components/Header';
import {search} from '../modules/search';

const HeaderContainer = ({startSearch, search: searchTarget}) => {
    return <Header startSearch={startSearch} search={searchTarget} />
}

HeaderContainer.propTypes = {
    startSearch: PropTypes.bool.isRequired,
    search: PropTypes.func.isRequired,
};

export const PageHeader = connect(
    ({searchReducer}) => ({
        startSearch: searchReducer.startSearch,
    }),
    {
        search,
    }
)(HeaderContainer);