/*eslint-disable*/
import axios from 'axios';
import styled from 'styled-components';
import {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';

import IsLoggedIn from "../components/IsLoggedIn";

const PostingBox = styled.main`
  height: 800px;
  width: 100%;
`;

const PostingForm = styled.form`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleInput = styled.input`
  width: 70vw;
  height: 40px;
  margin-top: 20px;
`;

const CategorySelection = styled.select`
  width: 70vw;
  height: 30px;
  margin-top: 15px
`;

const PostingContext = styled.textarea`
  width: 70vw;
  height: 500px;
  margin-top: 15px;
  overflow: scroll;
`;

const PostingLimit = styled.p`
    position: relative;
    left: -32%;
`;

const SelectImgBox = styled.section`
    width: 70vw;
`;

const ImgInput = styled.input``;

const SubmitBtn = styled.button`
  width: 70vw;
  height: 30px;
  margin-top: 20px;
`;

const Posting = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [postingInfo, setPostingInfo] = useState([]);
    const [postingLimit, setPostingLimit] = useState(0);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    useEffect(() => {
        setLoading(true);
        IsLoggedIn()
            .then((result) => {
                if(!result) {
                    return history.push('/');
                }
                setLoggedIn(result);
            })
            .catch((b) => {
                console.log(b);
            });

        axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/letters/categories`)
            .then(({data: {data}}) => {
                setPostingInfo(data)
                setLoading(false);
            })
            .catch(err => err);
    }, []);

    if(loading) {
        return <div>loading...</div>
    }

    console.log(postingInfo);

    return (
      <>
          {loggedIn &&
              <PostingBox>
                  <PostingForm>
                      <TitleInput
                          type='text'
                          name='title'
                          placeholder='제목'
                      />
                      <CategorySelection>
                          <option value="">=== 글 카테고리 선택 ===</option>
                      </CategorySelection>
                      <PostingContext />
                      <PostingLimit>{`${postingLimit}/5000`}</PostingLimit>
                      <SelectImgBox>
                          <label>
                              이미지 선택:
                              <ImgInput
                                  type='file'
                                  multiple
                                  name='imgs'
                              />
                          </label>
                      </SelectImgBox>
                      <SubmitBtn type='submit'>글 쓰기</SubmitBtn>
                  </PostingForm>
              </PostingBox>
          }
      </>
    );
}

export default Posting;