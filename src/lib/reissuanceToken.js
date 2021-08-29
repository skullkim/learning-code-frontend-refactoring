import axios from 'axios';

import { saveUserInfo } from "../modules/auth";

const reissuingToken = () => {
    axios({
        method: 'post',
        url: `${process.env.REACT_APP_SERVER_ORIGIN}/authentication/token`,
        withCredentials: true,
    })
        .then(({data: {data: {user_id: userId, accessToken}}}) => {
            localStorage.setItem('userInfo', JSON.stringify({
                userId: `${userId}`,
                accessToken,
            }));
            saveUserInfo({userId: `${userId}`, accessToken});
        })
        .catch(error => error);
}

export default reissuingToken;