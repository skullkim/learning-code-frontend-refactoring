const SAVE_USER_INFO = 'auth/SAVE_USER_INFO';

export const saveUserInfo = ({userId, accessToken}) => ({
    type: SAVE_USER_INFO,
    userInfo: {
        userId,
        accessToken,
    }
});

const initialState = {
    userInfo: {
        userId: '',
        accessToken: '',
    },
};
function authReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_USER_INFO:
            return {
                userInfo: {...action.userInfo},
            };
        default:
            return state;
    }
}

export default authReducer;