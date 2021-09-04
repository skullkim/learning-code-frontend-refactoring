import {useEffect, useState} from 'react';
import styled from 'styled-components';

import Auth, {AuthInput} from '../components/Auth';
import Api from '../lib/customAxios';
import getUserInfo from '../lib/getUserInfo';

const ProfileImgLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChangeProfileBtn = styled.button`
  width: 52%;
  height: 30px;
  margin-top: 15px
`;

/*eslint-disable*/
const UserInfo = () => {
    const [userProfile, setUserProfile] = useState({});
    const [loading, setLoading] = useState(false);
    const [userInfo] = useState(getUserInfo());

    useEffect(() => {
        setLoading(true);
        Api({
            method: 'get',
            url: `${process.env.REACT_APP_SERVER_ORIGIN}/user/${userInfo.userId}`,
            headers: {
                'Authorization': `Bearer ${userInfo.accessToken}`
            }
        })
            .then(({data: {data}}) => {
                setUserProfile(data);
                setLoading(false);
            })
            .catch(err => err);
    }, []);

    if(loading) {
        return <div>loading...</div>
    }

    return (
        <Auth>
            <>
                <ProfileImgLabel htmlFor='profile-img'>
                    Avatar
                    <AuthInput
                        type='file'
                        accept='image/png, image/jpg'
                        id='profile-img'
                    />
                </ProfileImgLabel>
                <AuthInput
                    type='text'
                    name='name'
                    placeholder= {`${userProfile.name || 'name'}`}
                />
                <AuthInput
                    type='text'
                    name='email'
                    placeholder={`${userProfile.email || 'email'}`}
                />
                <ChangeProfileBtn>Change profile</ChangeProfileBtn>
            </>
        </Auth>
    );
}

export default UserInfo;