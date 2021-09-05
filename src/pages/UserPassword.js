import {useFormik} from 'formik';
import {useState} from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';

import Auth, {AuthTitle, AuthInput} from '../components/Auth';

const SubmitBtn = styled.button`
  width: 52%;
  height: 30px;
  margin-top: 15px;
`;

const UserPassword = () => {

    const [currFocused, setCurrFocused] = useState('');

    const formik = useFormik({
        initialValues: {
            prevPassword: '',
            newPassword: '',
            verifyPassword: '',
        },
        validationSchema: Yup.object({
            prevPassword: Yup.string()
                .required('기존 비밀번호를 입력해 주세요')
                .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/, '비밀번호는 8자이상, 영어, 숫자, 특수문자가 하나 이상 포함되야 합니다'),
            newPassword: Yup.string()
                .required('새로운 비밀번호를 입력해 주세요')
                .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/, '비밀번호는 8자이상, 영어, 숫자, 특수문자가 하나 이상 포함되야 합니다'),
            verifyPassword: Yup.string()
                .required('새로운 비밀번호를 입력해 주세요')
                .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/, '비밀번호는 8자이상, 영어, 숫자, 특수문자가 하나 이상 포함되야 합니다'),
        }),
        onSubmit: () => {}
    });

    const handleChange = (event) => {
        formik.handleChange(event);
    }

    const handleBlur = (event) => {
        const {target: {name}} = event;
        setCurrFocused(name);
        formik.handleBlur(event);
    }

    return (
        <Auth>
            <>
                <AuthTitle>비밀번호 변경</AuthTitle>
                <AuthInput
                    type='password'
                    name='prevPassword'
                    placeholder='이전 비밀번호'
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {formik.touched.prevPassword && formik.errors.prevPassword &&
                    currFocused === 'prevPassword' && <div>{formik.errors.prevPassword}</div>
                }
                <AuthInput
                    type='password'
                    name='newPassword'
                    placeholder='새로운 비밀번호'
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {formik.touched.newPassword && formik.errors.newPassword &&
                currFocused === 'newPassword' && <div>{formik.errors.newPassword}</div>
                }
                <AuthInput
                    type='password'
                    name='verifyPassword'
                    placeholder='비밃번호 확인'
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {formik.touched.verifyPassword && formik.errors.verifyPassword &&
                currFocused === 'verifyPassword' && <div>{formik.errors.verifyPassword}</div>
                }
                <SubmitBtn>비밀번호 변경</SubmitBtn>
            </>
        </Auth>
    );
};

export default UserPassword;