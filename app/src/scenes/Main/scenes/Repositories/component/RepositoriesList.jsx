import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RepositoryRow from './RepositoryRow';

class RepositoriesList extends Component {
    render() {
        const { repositories } = this.props;
        return repositories.map(repository => (
            <RepositoryRow
                key={repository.id}
                title={repository.title}
                description={repository.description}
                avatarUrl={repository.avatarUrl}
                nbIssues={repository.nbIssues}
                nbStars={repository.nbStars}
                owner={repository.owner}
                creationDate={repository.creationDate}
            />
        ));
    }
}

RepositoriesList.propTypes = {
    repositories: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            owner: PropTypes.string,
            avatarUrl: PropTypes.string,
            nbIssues: PropTypes.number,
            nbStars: PropTypes.number,
            creationDate: PropTypes.string,
        }),
    ).isRequired,
};

export default RepositoriesList;
