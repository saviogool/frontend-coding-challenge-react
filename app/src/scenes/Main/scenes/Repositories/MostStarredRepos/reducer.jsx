/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import EventTypes from './types';
/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */

const initialState = {
    mostStarredRepos: [],
    loading: false,
};

/* ************************************* */
/* ********  PRIVATE FUNCTIONS  ******** */
/* ************************************* */

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
                loading: true,
            };

        case EventTypes.GET_MOST_STARED_REPOS_FULFILLED.type: {
            const result = action.payload.body(false);
            return {
                ...state,
                loading: false,
                mostStarredRepos: result.items.map(item => ({
                    id: item.id,
                    title: item.name,
                    owner: item.owner.login,
                    description: item.description,
                    avatarUrl: item.owner.avatar_url,
                    nbIssues: item.open_issues,
                    nbStars: item.stargazers_count,
                    creationDate: item.created_at,
                })),
            };
        }

        case EventTypes.GET_MOST_STARED_REPOS_REJECTED.type:
            return {
                ...state,
                loading: false,
            };

        default:
            return state;
    }
};
