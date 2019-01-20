/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import InfiniteScroll from 'react-infinite-scroller';
import RepositoriesList from '../component/RepositoriesList';
import AlertComponent from '../../../../../common/components/AlertComponent';
/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */

const propTypes = {
    getMostStarredRepos: PropTypes.func,
    mostStarredRepos: PropTypes.arrayOf(PropTypes.shape({})),
    hasMore: PropTypes.bool,
    hasError: PropTypes.bool,
    nextPage: PropTypes.number,
};

/* ************************************* */
/* ********      COMPONENT      ******** */
/* ************************************* */
class MostStarredReposComponent extends Component {
    constructor(props) {
        super(props);
        this.loadMostStarredRepos = this.loadMostStarredRepos.bind(this);
    }

    loadMostStarredRepos(page) {
        const { getMostStarredRepos } = this.props;
        getMostStarredRepos({
            page,
            q: `created:>${moment()
                .add(-30, 'days')
                .format('YYYY-MM-DD')}`,
        });
    }

    render() {
        const { mostStarredRepos, hasMore, hasError, nextPage } = this.props;
        return (
            <Fragment>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadMostStarredRepos}
                    hasMore={hasMore}
                    loader={
                        <div className="loader" key={0}>
                            Loading ...
                        </div>
                    }
                >
                    <RepositoriesList repositories={mostStarredRepos} />
                </InfiniteScroll>
                {hasError && (
                    <AlertComponent
                        header="An error has occured when trying to get more repos !"
                        confirmButtonMsg="Retry"
                        onConfirm={() => this.loadMostStarredRepos(nextPage)}
                    />
                )}
            </Fragment>
        );
    }
}

MostStarredReposComponent.propTypes = propTypes;

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default MostStarredReposComponent;
