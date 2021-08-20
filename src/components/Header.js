/* eslint-disable */
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { ImSearch } from 'react-icons/im';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

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
  margin-right: 15px;
`;

const HeaderLogo = styled.img`
  height: 40px;
  width: 50px;
  margin-right: 15px;
`;

const SearchBox = styled.div`
  height: 35px;
  width: 400px;
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const SearchCategory = styled.select`
  height: 35px;
  width: 120px;
  margin-right: 10px;
  font-size: 14px;
`;

const SearchInput = styled.input`
  height: 30px;
  width: 300px;
  padding: 0;
  margin-right: 10px;
`;

const SearchBtn = styled(ImSearch)`
  font-size: 28px;
`;

const NavBox = styled.nav`
  height: 35px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLink = styled(Link)`
  font-size: 20px;
  color: #566270;
  margin-right: 10px;
`;

const Header = ({startSearch, search}) => {
    const [headerInfo, setHeaderInfo] = useState({});
    const [searchTarget, setSearchTarget] = useState({
        category: '',
        target: '',
    });

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/header`)
            .then(({data: {data}}) => setHeaderInfo(data))
            .catch(err => err);
    }, []);

    const handleChange = ({target: {name, value}}) => {
        if(!name || !value) return;
        setSearchTarget({
            ...searchTarget,
            [name]: value,
        });
    }

    const handleFocus = (event) => {
        const eve = event;
        eve.target.value='';
    }

    const handleClick = () => {
        search(true);
    }

    const handleKeyPress = ({key}) => {
        if(key === 'Enter') {
            search(true);
        }
    }

    return (
        <HeaderBox>
            {startSearch && <Redirect to={`/search/${searchTarget.category}?query=${searchTarget.target}`} />}
            <Link to='/letters'><LinkToLetters /></Link>
            <HeaderLogo src={`${process.env.REACT_APP_SERVER_ORIGIN}${headerInfo.logo}`} alt='header logo' />
            <SearchBox onKeyPress={handleKeyPress}>
                <SearchCategory name='category' onChange={handleChange}>
                    <option value=''>select category</option>
                    {headerInfo.search && headerInfo.search.map(({key, value}) => (
                        <option value={key} key={key}>{value}</option>
                    ))}
                </SearchCategory>
                <SearchInput
                  type='text'
                  name='target'
                  onChange={handleChange}
                  onFocus={handleFocus}
                />
                <SearchBtn onClick={handleClick} />
            </SearchBox>
            <NavBox>
                <NavLink to='/signin'>login</NavLink>
                <NavLink to='/signup'>signup</NavLink>
            </NavBox>
        </HeaderBox>
    );
}

export default Header;