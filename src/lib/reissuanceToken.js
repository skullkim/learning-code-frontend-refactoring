import axios from 'axios';

const reissuingToken = async () => {
    const {userId} = JSON.parse(
        localStorage.getItem('userInfo')
    );
    axios({
        method: 'post',
        url: `${process.env.REACT_APP_SERVER_ORIGIN}/authentication/token`,
        withCredentials: true,
    })
        .then(({data: {data: {access_token: accessToken}}}) => {
            localStorage.removeItem('userInfo');
            localStorage.setItem('userInfo', JSON.stringify({
                userId: `${userId}`,
                accessToken,
            }));
        })
        .catch(error => error);
}

export default reissuingToken;