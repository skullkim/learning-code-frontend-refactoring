// import axios from 'axios';
//
// /*eslint-disable*/
// import { saveUserInfo } from "../modules/auth";
//
// const reissuingToken = () => {
//     const {userId} = JSON.parse(
//         localStorage.getItem('userInfo')
//     );
//     axios({
//         method: 'post',
//         url: `${process.env.REACT_APP_SERVER_ORIGIN}/authentication/token`,
//         withCredentials: true,
//     })
//         .then(({data: {data: {access_token: accessToken}}}) => {
//             localStorage.setItem('userInfo', JSON.stringify({
//                 userId: `${userId}`,
//                 accessToken,
//             }));
//             saveUserInfo({userId: `${userId}`, accessToken});
//         })
//         .catch(error => {
//             console.log('aaa', error);
//         });
// }
//
// export default reissuingToken;

import axios from 'axios';

/*eslint-disable*/
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
            localStorage.setItem('userInfo', JSON.stringify({
                userId: `${userId}`,
                accessToken,
            }));
        })
        .catch(error => {
            console.log('aaa', error);
        });
}

export default reissuingToken;