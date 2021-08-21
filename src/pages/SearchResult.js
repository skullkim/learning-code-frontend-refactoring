import axios from 'axios';
import PropTypes from 'prop-types';
import qs from 'qs';
import {useEffect, useState} from "react";
import {useLocation, useParams} from 'react-router-dom';
import styled from 'styled-components';

import Category from "../components/Category";

const SearchPageBox = styled.main`
  width: 100%;
  height: auto;
  display: flex;
`;

const ResultBox = styled.article`
  width: 100%;
  height: 100%;
  margin: 0 30px;
`;

const LetterBox = styled.section`
  height: 70px;
  width: 100%;
  margin-bottom: 10px;
  border-bottom: 1px solid gray;
`;

const LetterTitle = styled.h4``;

const LetterCategory = styled.p`
    margin-bottom: 10px;
`;

const BookBox = styled.section`
  height: 150px;
  width: 100%;
  margin-bottom: 10px;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const BookInfo = styled.section`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const BookTitle = styled.h4`
  margin: 0;
`;

const BookImage = styled.img`
  height: 100px;
  width: 70px;
`;

const BookIntroduction = styled.div`
  height: 100px;
  width: 100%;
  margin-left: 10px;
`;

const BookAuthors = styled.h5`
  margin-top: 0;
  margin-bottom: 5px;
`;

const BookContents = styled.p`
    margin: 0;
`;

const SearchResult = ({search}) => {
    const [searchResult, setSearchResult] = useState([]);
    const [noResult, setNoResult] = useState('');
    const [loading, setLoading] = useState(false);
    const {query} = qs.parse(useLocation().search, {
        ignoreQueryPrefix: true,
    });
    const {category} = useParams();

    useEffect(() => {
        search(false);
    });

    useEffect(() => {
        setLoading(true);
        setSearchResult([]);
        axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/search/${category}?query=${query}`)
            .then(({data: {data}}) => {
                setNoResult(data[0].message ?? '');
                setSearchResult(data);
            })
            .catch(err => err);
        setLoading(false);
    }, [category, query]);

    if(loading) {
        return <div>loading...</div>;
    }
    return (
        <SearchPageBox>
            <Category />
            <ResultBox>
                {searchResult && noResult && <LetterTitle>{query}에 대한 검색 결과가 없습니다</LetterTitle>}
                {category !== 'book' ?
                    searchResult && !noResult && searchResult.map(({ id, title, main_category: mainCategory }) => (
                        <LetterBox key={id}>
                            <LetterTitle>{title}</LetterTitle>
                            <LetterCategory>{mainCategory}</LetterCategory>
                        </LetterBox>
                    )) :
                    searchResult && !noResult && searchResult.map(({authors, contents, title, thumbnail, url}) => (
                        <BookBox key={url}>
                            <BookTitle><a href={url}>{title}</a></BookTitle>
                            <BookInfo>
                                <BookImage src={thumbnail} alt={`${title} thumbnail`}/>
                                <BookIntroduction>
                                    <BookAuthors>{authors && authors.map(author => `${author}, `)}</BookAuthors>
                                    <BookContents>{contents}</BookContents>
                                </BookIntroduction>
                            </BookInfo>
                        </BookBox>
                    ))
                }
            </ResultBox>
        </SearchPageBox>
    );
}

SearchResult.propTypes = {
    search: PropTypes.func.isRequired,
};

export default SearchResult;