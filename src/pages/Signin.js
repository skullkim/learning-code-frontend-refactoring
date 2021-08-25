import axios from 'axios';
import {useFormik} from 'formik';
import ProTypes from 'prop-types';
import {useState, useCallback} from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import * as Yup from 'yup';

const LoginBox = styled.article`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LocalLoginBox = styled.form`
  width: 35%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginTitle = styled.h4`
  text-align: center;
`;

const LoginInput = styled.input`
  width: 50%;
  height: 30px;
  margin-top: 10px;
`;

const LoginBtnBox = styled.div`
  width: 51%;
  height: 20px;
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
`;

const LoginBtn = styled.button`
  width: 49%;
  height: 20px;
`;


/* eslint-disable */
const Signin = ({userInfo, saveUserInfo}) => {
    const [currFocused, setCurrFocused] = useState({
        email: false,
        password: false,
    });
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .matches(/[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i, {message: '이메일 형식이 틀렸습니다'})
                .required('이메일을 입력해 주세요'),
            password: Yup.string()
                .required('비밀번호를 입력해 주세요')
                .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/, '비밀번호는 8자이상, 영어, 숫자, 특수문자가 하나 이상 포함되야 합니다'),
        }),
        onSubmit: () => {
            axios({
                method: 'post',
                url: `${process.env.REACT_APP_SERVER_ORIGIN}/authentication/login`,
                data: {
                    email: `${process.env.REACT_APP_TEMP_EMAIL}`,
                    password: `${process.env.REACT_APP_TEMP_PASSWORD}`,
                }
            })
                .then(({data: {data: {user_id: userId, accessToken}}}) => saveUserInfo({userId: `${userId}`, accessToken}))
                .catch(err => console.log(err))
        },
    });
    const handleClick = useCallback((event) => {
        event.preventDefault();
        formik.handleSubmit();
    }, []);

    const handleChange= useCallback((event) => {
        formik.handleChange(event);
    }, []);

    const handleBlur = useCallback((event) => {
        const {target: {name}} = event;
        name === 'password' ?
            setCurrFocused({email: false, password: true}) :
            setCurrFocused({email: true, password: false});
        formik.handleBlur(event);
    }, []);

    return (
        <LoginBox>
            <LocalLoginBox>
                <LoginTitle>Learning Code 로그인</LoginTitle>
                <LoginInput
                    type='text'
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='email'
                />
                <LoginInput
                    name='password'
                    type='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='password'
                />
                <LoginBtnBox>
                    <LoginBtn type='submit' onClick={handleClick} >Sign in</LoginBtn>
                    <LoginBtn><Link to='/signin/password'>Find password</Link></LoginBtn>
                </LoginBtnBox>
                {formik.touched.email && formik.errors.email && currFocused.email ? <div>{formik.errors.email}</div> : null}
                {formik.touched.password && formik.errors.password && currFocused.password ? <div>{formik.errors.password}</div> : null}
            </LocalLoginBox>
        </LoginBox>
    );
}

Signin.propTypes = {
    userInfo: ProTypes.objectOf(ProTypes.string).isRequired,
    saveUserInfo: ProTypes.func.isRequired,
};

export default Signin;
