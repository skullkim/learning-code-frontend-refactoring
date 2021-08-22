/* eslint-disable */
import axios from 'axios';
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

const LetterBox = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const TitleBox = styled.section`
  width: 80%;
  height: 100px;
  border-bottom: 1px solid gray;
  
`;

const Title = styled.h3``;

const Author = styled.h4`
    margin-bottom: 0;
`;

const Writing = styled.textarea`
  width: 100%;
  height: auto;
  color: black;
  background-color: transparent;
  border: 0;
`;

const ImageBox = styled.section``;

const TagBox = styled.section``;

const Tag = styled.p`
    margin: 0;
`;

const Letter = () => {
    const {letterId} = useParams();
    const [letter, setLetter] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/letter/${letterId}`)
            .then((data) => console.log(data))
            .catch(err => err);
        setLoading(false);
    },[]);

    if(loading){
        return (<div>loading...</div>);
    }

    return (
        <LetterBox>
            <TitleBox>
                <Title>a</Title>
                <Author>b</Author>
                <Writing readonly='readonly' disabled>
                   aaaa
                </Writing>
            </TitleBox>
        </LetterBox>
    );
};

export default Letter;