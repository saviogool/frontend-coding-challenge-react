import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Media, Row, Col, Panel } from 'react-bootstrap';
import moment from 'moment';
import './style.css';

class RepositoryRow extends Component {
    render() {
        const { title, avatarUrl, description, nbStars, nbIssues, owner, creationDate } = this.props;
        return (
            <Panel>
                <Panel.Body>
                    <Media>
                        <Media.Left>
                            <img width={100} height={100} src={avatarUrl} alt="thumbnail" />
                        </Media.Left>
                        <Media.Body className="repos-row-body">
                            <Row>
                                <Col xs={12}>
                                    <Media.Heading>{title}</Media.Heading>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>{description}</Col>
                            </Row>
                            <Row className="repos-row-body-footer">
                                <Col xs={6} md={2}>
                                    <span className="repos-row-body-footer-box">{`Stars: ${nbStars}`}</span>
                                </Col>
                                <Col xs={6} md={2}>
                                    <span className="repos-row-body-footer-box">{`Issues: ${nbIssues}`}</span>
                                </Col>
                                <Col xs={12} md={8} className="repos-row-body-footer-signature">
                                    {`Submitted ${moment(creationDate, 'YYYY-MM-DD').fromNow()} by ${owner}`}
                                </Col>
                            </Row>
                        </Media.Body>
                    </Media>
                </Panel.Body>
            </Panel>
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
