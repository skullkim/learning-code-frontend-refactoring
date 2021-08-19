/* eslint-disable */
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Header from '../components/Header';
import {search} from '../modules/search';

const HeaderContainer = ({startSearch, search}) => {
    return <Header startSearch={startSearch} search={search} />
}

HeaderContainer.propTypes = {
    startSearch: PropTypes.bool.isRequired,
    search: PropTypes.func.isRequired,
};

export default connect(
  ({searchReducer}) => ({
        startSearch: searchReducer.startSearch,
    }),
  {
    search
  }
)(HeaderContainer);
