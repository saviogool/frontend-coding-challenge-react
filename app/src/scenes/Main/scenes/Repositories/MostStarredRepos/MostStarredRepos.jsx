/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import { connect } from 'react-redux';
import MostStarredReposComponent from './MostStarredReposComponent';
import actions from './actions';
/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */
const getReposStore = state => state.main.repos;

function mapStateToProps(state) {
    return {
        mostStarredRepos: getReposStore(state).mostStarredRepos,
    };
}
const mapDispatchToProps = {
    getMostStarredRepos: actions.getMostStarredRepos,
};

const MostStarredRepos = connect(mapStateToProps, mapDispatchToProps)(MostStarredReposComponent);
/* ************************************* */
/* ********  PRIVATE FUNCTIONS  ******** */
/* ************************************* */

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default MostStarredRepos;
