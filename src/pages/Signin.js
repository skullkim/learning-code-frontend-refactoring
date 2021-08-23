import {Link} from 'react-router-dom';
import styled from 'styled-components';

const LoginBox = styled.article`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LocalLoginBox = styled.section`
  width: 35%;
  height: 300px;
`;

const LoginTitle = styled.h4`
    text-align: center;
`;

const LoginInput = styled.input`
  width: 100%;
  height: 20px;
  margin-top: 10px;
`;

const LoginBtnBox = styled.div`
  width: 103%;
  height: 20px;
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
`;

const LoginBtn = styled.button`
  width: 49%;
  height: 20px;
`;


const Signin = () => {
    return (
        <LoginBox>
            <LocalLoginBox>
                <LoginTitle>Learning Code 로그인</LoginTitle>
                <LoginInput placeholder='email'/>
                <LoginInput type='password' placeholder='password' />
                <LoginBtnBox>
                    <LoginBtn>Sign in</LoginBtn>
                    <LoginBtn><Link to='/signin/password'>Find password</Link></LoginBtn>
                </LoginBtnBox>
            </LocalLoginBox>
        </LoginBox>
    );
}

export default Signin;
