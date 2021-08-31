import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import getUserInfo from "../lib/getUserInfo";

const MainBox = styled.main`
  width: 100%;;
  height: auto;
  display: flex;
`;

const ProfileBox = styled.section`
  width: 33vw;
  height: 900px;
  border-right: 1px solid black;
  display: flex;
  justify-content: flex-end;
`;

const ProfileImg = styled.img`
  height: 80px;
  width: 70px;
  margin-right: 2vw;
`;

const ProfileInfo = styled.div`
  width: 100px;
  height: 50px;
  margin-right: 7vw;
  display: flex;
  flex-direction: column;
`;

const EditProfile = styled(Link)`
  width: 300px;
`;

const UserName = styled.p``;

const PostingBox = styled(ProfileBox)``;

const CommentBox = styled(ProfileBox)``;

const Profile = () => {

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(false);
    const [userInfo] = useState(getUserInfo());

    useEffect(() => {
        setLoading(true);
        axios({
            method: 'get',
            url: `${process.env.REACT_APP_SERVER_ORIGIN}/user/${userInfo.userId}/profile`,
            headers: {
                'Authorization': `Bearer ${userInfo.accessToken}`,
            }
        })
            .then(({data: {data}}) => {
                const {profile_img: profileImg, ...restData} = data;
                setProfile({profileImg, ...restData});
                setLoading(false);
            })
            .catch(err => err);
    }, []);

    if(loading) {
        return <div>loading...</div>
    }

    return (
        <MainBox>
            {profile && profile.name && profile.profileImg &&
                <ProfileBox>
                    <ProfileImg src={`${process.env.REACT_APP_SERVER_ORIGIN}${profile.profileImg}`} alt='profile image'/>
                    <ProfileInfo>
                        <UserName>p</UserName>
                        <EditProfile to='#'>Edit profile</EditProfile>
                        <EditProfile to='#'>change password</EditProfile>
                    </ProfileInfo>
                </ProfileBox>
            }
            <PostingBox />
            <CommentBox />
        </MainBox>
    );
}

export default Profile;