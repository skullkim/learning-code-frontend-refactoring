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
  height: 50px;
  width: 30px;
  margin-right: 2vw;
`;

const ProfileInfo = styled.div`
  width: 30px;
  height: 50px;
  margin-right: 7vw;
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
                        <Link to='#'>Edit profile</Link>
                        <Link to='#'>change password</Link>
                    </ProfileInfo>
                </ProfileBox>
            }
            <PostingBox />
            <CommentBox />
        </MainBox>
    );
}

export default Profile;