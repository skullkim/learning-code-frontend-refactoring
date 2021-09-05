import styled from 'styled-components';

import Auth, {AuthTitle, AuthInput} from '../components/Auth';

const SubmitBtn = styled.button`
  width: 52%;
  height: 30px;
  margin-top: 15px;
`;

const UserPassword = () => {
    return (
        <Auth>
            <>
                <AuthTitle>비밀번호 변경</AuthTitle>
                <AuthInput
                    type='password'
                    name='prevPassword'
                    placeholder='이전 비밀번호'
                />
                <AuthInput
                    type='password'
                    name='newPassword'
                    placeholder='새로운 비밀번호'
                />
                <AuthInput
                    type='password'
                    name='verifyPassword'
                    placeholder='비밃번호 확인'
                />
                <SubmitBtn>비밀번호 변경</SubmitBtn>
            </>
        </Auth>
    );
};

export default UserPassword;