/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import types from './types';
import Repositories from '../../../../../common/resources/Repositories';
/* ************************************* */
/* ********  PRIVATE FUNCTIONS  ******** */
/* ************************************* */
function getMostStarredRepos(options = {}) {
    return dispatch =>
        dispatch({
            ...types.GET_MOST_STARED_REPOS,
            payload: Repositories.getAll({
                ...options,
                sort: 'stars',
                order: 'desc',
            }),
        });
}

const actions = {
    getMostStarredRepos,
};

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export { actions as default };
