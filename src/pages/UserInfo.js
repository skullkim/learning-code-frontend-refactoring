import {useFormik} from 'formik';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';

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

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .matches(/[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i, {message: '이메일 형식이 틀렸습니다'}),
        }),
        onSubmit: () => {},
    })

    if(loading) {
        return <div>loading...</div>
    }

    const handleChange = (event) => {
        formik.handleChange(event);
    }

    const handleBlur = (event) => {
        formik.handleBlur(event);
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder= {`${userProfile.name || 'name'}`}
                />
                <AuthInput
                    type='text'
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={`${userProfile.email || 'email'}`}
                />
                {formik.touched.email && formik.errors.email ?
                    <div>{formik.errors.email}</div> : null
                }
                <ChangeProfileBtn>Change profile</ChangeProfileBtn>
            </>
        </Auth>
    );
}

export default UserInfo;