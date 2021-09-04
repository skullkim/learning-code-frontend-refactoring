import styled from 'styled-components';

import Auth, {AuthInput} from '../components/Auth';

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

const UserInfo = () => {
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
                <AuthInput type='text' name='name'/>
                <AuthInput type='text' name='email'/>
                <ChangeProfileBtn>Change profile</ChangeProfileBtn>
            </>
        </Auth>
    );
}

export default UserInfo;