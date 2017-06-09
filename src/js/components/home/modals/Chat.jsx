import React from 'react';
import {Button, Modal, Row, Col, Image, ButtonToolbar} from 'react-bootstrap';

export default class Chat extends React.Component {
  render() {
    return (
      <Modal {...this.props}
          aria-labelledby="contained-modal-title-lg"
          bsSize="large"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Chat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col
                lg={6}
                md={6}
                sm={12}
                xs={12}
            >
              <Image
                  responsive
                  src="images/portfolio/Chat.png"
              />
            </Col>
            <Col
                lg={6}
                md={6}
                sm={12}
                xs={12}
            >
              <h3>Chat создан на Socket.io.</h3>
              <h4>Онлайн чат на React.js/Node.js/Socket.io.</h4>
              <h4>
                <ButtonToolbar>
                  <Button
                      bsStyle="primary"
                      href="https://reactjschat.herokuapp.com/"
                  >
                    Link
                  </Button>
                </ButtonToolbar>
              </h4>
              <h4>Дата: Июнь 2017</h4>
              <h4>Категория: React, Node, Socket.io</h4>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

Chat.propTypes = {
  onHide: React.PropTypes.func
};
