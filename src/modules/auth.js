const SAVE_USER_INFO = 'auth/SAVE_USER_INFO';

const localUserInfo = JSON.parse(
    localStorage.getItem('userInfo')
);

const initialState = {
    userInfo: {
        userId:  localUserInfo ? localUserInfo.userId : '',
        accessToken:  localUserInfo ? localUserInfo.accessToken : '',
    },
};

export const saveUserInfo = (userInfo = {userId: '', accessToken: ''}) => ({
    type: SAVE_USER_INFO,
    userInfo
});

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