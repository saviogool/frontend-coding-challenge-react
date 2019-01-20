import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Button } from 'react-bootstrap';

class AlertComponent extends Component {
    render() {
        const { header, message, onConfirm, confirmButtonMsg } = this.props;
        return (
            <Alert bsStyle="danger">
                <h4>{header}</h4>
                <p>{message}</p>
                <p>
                    <Button bsStyle="danger" onClick={onConfirm}>
                        {confirmButtonMsg}
                    </Button>
                </p>
            </Alert>
        );
    }
}

AlertComponent.propTypes = {
    header: PropTypes.string,
    message: PropTypes.string,
    onConfirm: PropTypes.func,
    confirmButtonMsg: PropTypes.string,
};

export default AlertComponent;
