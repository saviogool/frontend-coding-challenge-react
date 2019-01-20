/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import EventTypes from './types';
/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */

const initialState = {
    mostStarredRepos: [],
    hasMore: true,
    hasError: false,
    nextPage: 1,
};

/* ************************************* */
/* ********  PRIVATE FUNCTIONS  ******** */
/* ************************************* */
function mapReposItems(result) {
    return result.items.map(item => ({
        id: item.id,
        title: item.name,
        owner: item.owner.login,
        description: item.description,
        avatarUrl: item.owner.avatar_url,
        nbIssues: item.open_issues,
        nbStars: item.stargazers_count,
        creationDate: item.created_at,
    }));
}
/* ************************************* */
/* ********   PUBLIC FUNCTIONS  ******** */
/* ************************************* */

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default (state = initialState, action) => {
    switch (action.type) {
        case EventTypes.GET_MOST_STARED_REPOS_PENDING.type:
            return {
                ...state,
                hasError: false,
            };
        case EventTypes.GET_MOST_STARED_REPOS_FULFILLED.type: {
            const result = action.payload.body(false);
            return {
                ...state,
                hasMore: !!result.items,
                mostStarredRepos: state.mostStarredRepos.concat(mapReposItems(result)),
                nextPage: action.meta.nextPage,
            };
        }
        case EventTypes.GET_MOST_STARED_REPOS_REJECTED.type:
            console.log(action.payload.response.data.message);
            return {
                ...state,
                hasError: action.payload.response.data.message !== 'Only the first 1000 search results are available',
                hasMore: false,
            };
        default:
            return state;
    }
};
