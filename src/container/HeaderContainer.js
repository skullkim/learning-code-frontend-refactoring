import PropTypes from "prop-types";
import {connect} from "react-redux";

import Header from '../components/Header';
import {saveUserInfo} from "../modules/auth";
import {search} from '../modules/search';

const HeaderContainer = ({startSearch, search: searchTarget, userInfo, saveUserInfo: logOut}) => {
    /* eslint-disable */
    console.log(userInfo);
    return <Header
        startSearch={startSearch}
        search={searchTarget}
        userInfo={userInfo}
        logOut={logOut}
    />;
}

HeaderContainer.propTypes = {
    startSearch: PropTypes.bool.isRequired,
    search: PropTypes.func.isRequired,
    userInfo: PropTypes.objectOf(PropTypes.string).isRequired,
    saveUserInfo: PropTypes.func.isRequired,
};

export const PageHeader = connect(
    ({searchReducer, authReducer}) => ({
        startSearch: searchReducer.startSearch,
        userInfo: authReducer.userInfo,
    }),
    {
        search,
        saveUserInfo,
    }
)(HeaderContainer);