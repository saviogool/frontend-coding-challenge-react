import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Media, Row, Col, Panel, Label } from 'react-bootstrap';
import moment from 'moment';

class RepositoryRow extends Component {
    render() {
        const { title, avatarUrl, description, nbStars, nbIssues, owner, creationDate } = this.props;
        return (
            <Grid>
                <Panel>
                    <Panel.Body>
                        <Media>
                            <Media.Left>
                                <img width={100} height={100} src={avatarUrl} alt="thumbnail" />
                            </Media.Left>
                            <Media.Body>
                                <Row>
                                    <Col xs={12}>
                                        <Media.Heading>{title}</Media.Heading>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>{description}</Col>
                                </Row>
                                <Row>
                                    <Col xs={6} md={2} className="padding-1">
                                        <Label bsStyle="default">{`Stars: ${nbStars}`}</Label>
                                    </Col>
                                    <Col xs={6} md={2} className="padding-1">
                                        <Label bsStyle="default">{`Issues: ${nbIssues}`}</Label>
                                    </Col>
                                    <Col xs={12} md={8} className="padding-1">
                                        {`Submitted ${moment(creationDate, 'YYYY-MM-DD').fromNow()} by ${owner}`}
                                    </Col>
                                </Row>
                            </Media.Body>
                        </Media>
                    </Panel.Body>
                </Panel>
            </Grid>
        );
    }
}

RepositoryRow.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    avatarUrl: PropTypes.string,
    nbIssues: PropTypes.number,
    nbStars: PropTypes.number,
    owner: PropTypes.string,
    creationDate: PropTypes.string,
};

export default RepositoryRow;
