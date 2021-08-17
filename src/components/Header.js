/* eslint-disable */
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
`;

const Header = () => {
   const [headerInfo, setHeaderInfo] = useState({});
    return (
      <HeaderBox>
        <AiOutlineUnorderedList />
        <img src='#' alt='header logo' />
        <div>
          <select name='' id=''>
            <option value=''>select</option>
          </select>
          <input type='text' />
          <ImSearch />
        </div>
        <div>
          <Link to='/signin'>login</Link>
          <Link to='/signup'>signup</Link>
        </div>
      </HeaderBox>
    );
}

export default Header;