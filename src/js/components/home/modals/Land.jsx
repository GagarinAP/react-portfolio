import React from 'react';
import {Button, Modal, Row, Col, Image, ButtonToolbar} from 'react-bootstrap';

export default class Land extends React.Component {
  render() {
    return (
            <Modal {...this.props}
                aria-labelledby="contained-modal-title-lg"
                bsSize="large"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Land</Modal.Title>
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
                              src="images/portfolio/land.png"
                          />
                        </Col>
                        <Col
                            lg={6}
                            md={6}
                            sm={12}
                            xs={12}
                        >
                            <h3>База земельных участков.</h3>
                            <h4>Сайт Land создано с помощью веб-фреймворка Materialize. Адаптивный дизайн, тени
                                z-depth-Х и фокус hoverable. Google Maps API карты и маркеры.</h4>
                            <h4>
                                <ButtonToolbar>
                                <Button
                                    bsStyle="primary"
                                    href="http://land.rv.ua"
                                >
                                    Link 1
                                </Button>
                                <Button
                                    bsStyle="primary"
                                    href="https://gagarinap.github.io/map-land/index.html"
                                >
                                    Link 2
                                </Button>
                                </ButtonToolbar>
                            </h4>
                            <h4>Дата: Сентябрь 2016</h4>
                            <h4>Категория: HTML5, CSS3, Materialize, ES5, Google API</h4>
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

Land.propTypes = {
  onHide: React.PropTypes.func
};
