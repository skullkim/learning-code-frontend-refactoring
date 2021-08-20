const SEARCH = 'search/START_SEARCH';

export const search = (startSearch) => ({
    type: SEARCH,
    startSearch
});

const initialState = {
    startSearch: false,
};
/* eslint-disable */
function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH:
            console.log(action);
            return {
                startSearch: action.startSearch
            }
        default :
            return state;
    }
}

export default searchReducer;