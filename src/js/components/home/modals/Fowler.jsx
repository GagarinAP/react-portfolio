import React from 'react';
import {Button, Modal, Row, Col, Image, ButtonToolbar} from 'react-bootstrap';

export default class Fowler extends React.Component {
  render() {
    return (
      <Modal {...this.props}
          aria-labelledby="contained-modal-title-lg"
          bsSize="large"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Fowler</Modal.Title>
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
                  src="images/portfolio/fowler.png"
              />
            </Col>
            <Col
                lg={6}
                md={6}
                sm={12}
                xs={12}
            >
              <h3>Fowler имеет уникальный дизайн.</h3>
              <h4>Адаптивный дизайн по принципу mobile-first. Создано на чистом CSS.</h4>
              <h4>
                <ButtonToolbar>
                  <Button
                      bsStyle="primary"
                      href="http://gagarinap.github.io/HardhatsTeam/PEAA/"
                  >
                    Link
                  </Button>
                </ButtonToolbar>
              </h4>
              <h4>Дата: Февраль 2016</h4>
              <h4>Категория: HTML5,CSS3</h4>
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

Fowler.propTypes = {
  onHide: React.PropTypes.func
};
