import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Api from "../lib/customAxios";
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
  margin-bottom: 20px;
`;

const Title = styled.h5``;

const PostingInfo = styled.div`
    width: 100%;
`;

const Category = styled.strong`
    margin-right: 1vw;
`;

const RemoveBtn = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  font-size: 16.5px;
`;

const CommentBox = styled(ProfileBox)`
  justify-content: flex-start;
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
`;

const Comment = styled.div`
  height: 40px;
  width: 80%;
  margin-bottom: 20px;
`;

const CommentContext = styled.textarea`
  width: 60%;
  height: 35px;
  border: 0;
  outline: none;
  resize: none;  
  background-color: transparent;
  overflow: scroll;
`;

const Profile = () => {

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(false);
    const [reLoading, setReloading] = useState(false);
    const [userInfo] = useState(getUserInfo());

    useEffect(() => {
        setLoading(true);
        Api({
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
    }, [reLoading]);

    if(loading) {
        return <div>loading...</div>
    }

    const handleClick = (id) => {
        axios({
            method: 'delete',
            url: `${process.env.REACT_APP_SERVER_ORIGIN}/user/${userInfo.userId}/posting/${id}`,
            headers: {
                'Authorization': `Bearer ${userInfo.accessToken}`,
            }
        })
            .then(() => setReloading(!reLoading))
            .catch(err => err);
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
                                <Title>{title}</Title>
                            </Link>
                            <PostingInfo>
                                <Category>{mainCategory}</Category>
                                <Link to={`/user/${userInfo.userId}/posting/${id}`}>수정</Link>
                                <RemoveBtn onClick={() => handleClick(id)}>삭제</RemoveBtn>
                            </PostingInfo>
                        </Posting>
                    ))
                }
            </PostingBox>
            <CommentBox>
                <Title>내 덧글</Title>
                {profile && profile.comments &&
                    profile.comments.map(({id, comment}) => (
                        <Comment key={id}>
                            <CommentContext value={comment ?? ''} readOnly/>
                        </Comment>
                    ))}
            </CommentBox>
        </MainBox>
    );
}

export default Profile;