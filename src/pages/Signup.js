import styled from 'styled-components';

import Auth, {AuthTitle, AuthInput} from "../components/Auth";

const SignUpBtn = styled.button`
  width: 51%;
  height: 30px;
  margin-top: 20px
`;

const Signup = () => {
    return (
        <Auth>
            <AuthTitle>Learning code 회원가입</AuthTitle>
            <AuthInput placeholder="아이디"/>
            <AuthInput placeholder="이메일" />
            <AuthInput placeholder="비밇번호"/>
            <AuthInput placeholder="비밀번호 확인" />
            <SignUpBtn>회원가입</SignUpBtn>
        </Auth>
    );
}

export default Signup;
