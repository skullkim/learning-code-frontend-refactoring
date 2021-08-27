import styled from 'styled-components';

import Auth, {AuthTitle, AuthInput} from '../components/Auth';

const SubmitBtn = styled.button`
  width: 51%;
  height: 30px;
  margin-top: 15px;
`;

const SigninPassword = () => {
    return (
        <Auth>
            <>
                <AuthTitle>비밀번호 찾기</AuthTitle>
                <AuthInput
                    type='text'
                    name='email'
                    placeholder='이메일'
                />
                <AuthInput
                    type='password'
                    name='password'
                    placeholder='비밀번호'
                />
                <AuthInput
                    type='password'
                    name='verifyPasswd'
                    placeholder='비밀번호 확인'
                />
                <SubmitBtn type='submit'>비밀번호 변경</SubmitBtn>
            </>
        </Auth>

    )
}

export default SigninPassword;
