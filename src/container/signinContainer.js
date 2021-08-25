import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {saveUserInfo} from "../modules/auth";
import Signin from "../pages/Signin";

const SigninContainer = ({userInfo, saveUserInfo: setUserInfo}) => {
    return <Signin
        userInfo={userInfo}
        saveUserInfo={setUserInfo}
    />;
}

SigninContainer.propTypes = {
    userInfo: PropTypes.objectOf(PropTypes.string).isRequired,
    saveUserInfo: PropTypes.func.isRequired,
};

export const SigninPage = connect(
    ({authReducer}) => ({
        userInfo: authReducer.userInfo,
    }),
    {
        saveUserInfo,
    }
)(SigninContainer);