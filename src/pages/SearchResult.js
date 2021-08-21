/* eslint-disable */
import PropTypes from 'prop-types';
import qs from 'qs';
import {useEffect, useState} from "react";
import {useLocation, useParams} from 'react-router-dom';

import Category from "../components/Category";

const SearchResult = ({search}) => {
    const query = qs.parse(useLocation().search, {
        ignoreQueryPrefix: true,
    });
    const {category} = useParams();

    useEffect(() => {
      search(false);
    });

    return (
      <div>
          <Category />
      </div>
    );
}

SearchResult.propTypes = {
    search: PropTypes.func.isRequired,
};

export default SearchResult;