/* eslint-disable */
import axios from 'axios';
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

const LetterBox = styled.main`
  width: 100%;
  height: 1000px;
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

const WritingBox = styled.section`
  height: auto;
  width: 80%;
  margin-top: 10px;
`;

const Writing = styled.textarea`
  width: 100%;
  height: auto;
  background-color: transparent;
  border: 0;
`;

const ImageBox = styled.section`
  width: 80%;
  height: 100px;
`;

const Image = styled.img`
  height: 100px;
  width: 70px;
  
`;

const TagBox = styled.section`
  height: 100px;
  width: 80%;
  border-bottom: 1px solid black;
`;

const Tag = styled.p`
    margin: 0;
`;

const CommentsBox = styled.article`
  width: 80%;
  height: 200px;
  overflow: scroll;
  margin-top: 20px;
`;

const CommentBox = styled.section`
  width: 80%;
  height: 50px;
  border: 1px solid black;
`;

const Commenter = styled(Author)`
  font-size: 14px;
  font-weight: normal;
  margin-top: 0;
`;

const Comment = styled(Tag)``;


const Letter = () => {
    const {letterId} = useParams();
    const [letter, setLetter] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/letter/${letterId}`)
            .then(({data: {data}}) =>  setLetter(data))
            .catch(err => err);
        setLoading(false);
    },[]);

    if(loading){
        return (<div>loading...</div>);
    }

    return (
        <LetterBox>
            <TitleBox>
                <Title>{letter.main_data && letter.main_data.title}</Title>
                <Author>{letter.main_data && letter.main_data.author}</Author>
            </TitleBox>
            <WritingBox>
                <Writing value={letter.main_data && letter.main_data.main_posting} readOnly />
            </WritingBox>
            {letter.images && letter.images.length ?
                <ImageBox>
                    {letter.images.map(({id}) => (
                        <Image
                            src={`${process.env.REACT_APP_SERVER_ORIGIN}/letter/${letterId}/images/${id}`}
                            alt='posting image'
                            key={id}
                        />
                    ))}
                </ImageBox> :
                <></>
            }
            {letter.tags && letter.tags.length ?
                <TagBox>
                    {letter.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                    ))}
                </TagBox> :
                <></>
            }
            {letter.comments && letter.comments.length ?
                <CommentsBox>
                    {letter.comments.map(({id, commenter, comment}) => (
                        <CommentBox key={id}>
                            <Commenter>{commenter}</Commenter>
                            <Comment>{comment}</Comment>
                        </CommentBox>
                    ))}
                </CommentsBox> :
                <></>
            }
        </LetterBox>
    );
};

export default Letter;