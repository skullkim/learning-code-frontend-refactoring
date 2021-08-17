/* eslint-disable */
import axios from 'axios';
import styled from 'styled-components';
import {useEffect, useState} from 'react';
import {AiOutlineUnorderedList} from 'react-icons/ai';
import {ImSearch} from 'react-icons/im';
import {Link} from 'react-router-dom';

const HeaderBox = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
`;

const LinkToLetters = styled(AiOutlineUnorderedList)`
  height: 35px;
  width: 35px;
`;

const SearchBox = styled.div`
  height: 35px;
  width: 600px;
  background-color: red;
`;

const NavBox = styled.nav`
  height: 35px;
  width: 200px;
  background-color: greenyellow;
`;

const Header = () => {
   const [headerInfo, setHeaderInfo] = useState({});
   useEffect(() => {
     axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/header`)
        .then(({data: {data}}) => setHeaderInfo(data))
        .catch(err => err);
   }, [])
  console.log(headerInfo);
    return (
      <HeaderBox>
        <Link to='/letters'><LinkToLetters /></Link>
        <img src='#' alt='header logo' />
        <SearchBox>
          <select name='' id=''>
            <option value=''>select</option>
          </select>
          <input type='text' />
          <ImSearch />
        </SearchBox>
        <NavBox>
          <Link to='/signin'>login</Link>
          <Link to='/signup'>signup</Link>
        </NavBox>
      </HeaderBox>
    );
}

export default Header;