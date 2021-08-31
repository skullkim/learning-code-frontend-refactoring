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

const PostingBox = styled(ProfileBox)`
  justify-content: flex-start;
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
`;

const ListTitle = styled.h4``;

const Posting = styled.div`
  height: 80px;
  width: 80%;
  //background-color: red;
  margin-bottom: 20px;
`;

const PostingTitle = styled.h5``;

const PostingInfo = styled.div`
    width: 100%;
`;

const Category = styled.strong`
    margin-right: 1vw;
`;

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
            <PostingBox>
                <ListTitle>내 글</ListTitle>
                {profile && profile.postings &&
                    profile.postings.map(({id, title, main_category: mainCategory}) => (
                        <Posting key={id}>
                            <Link to={`/letter/${id}`}>
                                <PostingTitle>{title}</PostingTitle>
                            </Link>
                            <PostingInfo>
                                <Category>{mainCategory}</Category>
                                <Link to={`/user/${userInfo.userId}/posting/${id}`}>수정</Link>
                                <Link to='#'>삭제</Link>
                            </PostingInfo>
                        </Posting>
                    ))
                }
            </PostingBox>
            <CommentBox />
        </MainBox>
    );
}

export default Profile;