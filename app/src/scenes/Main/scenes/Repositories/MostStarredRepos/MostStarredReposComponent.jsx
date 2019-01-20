/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import RepositoriesList from '../component/RepositoriesList';
/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */

const propTypes = {
    getMostStarredRepos: PropTypes.func,
    mostStarredRepos: PropTypes.arrayOf(PropTypes.shape({})),
    // loading: PropTypes.bool
};

/* ************************************* */
/* ********      COMPONENT      ******** */
/* ************************************* */
class MostStarredReposComponent extends Component {
    componentDidMount() {
        const { getMostStarredRepos } = this.props;
        getMostStarredRepos({
            page: 1,
            q: `created:>${moment()
                .add(-30, 'days')
                .format('YYYY-MM-DD')}`,
        });
    }

    render() {
        const { mostStarredRepos } = this.props;
        return <RepositoriesList repositories={mostStarredRepos} />;
    }
}

MostStarredReposComponent.propTypes = propTypes;

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default MostStarredReposComponent;
