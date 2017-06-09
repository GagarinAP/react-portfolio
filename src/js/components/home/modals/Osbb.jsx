import React from 'react';
import {Button, Modal, Row, Col, Image, ButtonToolbar} from 'react-bootstrap';

export default class Osbb extends React.Component {
  render() {
    return (
            <Modal {...this.props}
                aria-labelledby="contained-modal-title-lg"
                bsSize="large"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Osbb</Modal.Title>
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
                                src="images/portfolio/osbb.png"
                            />
                        </Col>
                        <Col
                            lg={6}
                            md={6}
                            sm={12}
                            xs={12}
                        >
                            <h3>Статистика и мониторинг затрат пользователями дома: газу, електроенергии и води.</h3>
                            <h4>Сайт создано с помощью Bootstrap и Heroku.com. Адаптивный дизайн по принципу
                                mobile-first. Cервер Node.js. Графики с помощью библиотеки Сhart.js.</h4>
                            <h4>
                                <ButtonToolbar>
                                    <Button
                                        bsStyle="primary"
                                        href="http://courseworkjs.herokuapp.com/"
                                    >
                                        Link
                                    </Button>
                                </ButtonToolbar>
                            </h4>
                            <p>Дата: Июль 2016</p>
                            <p>Категория: HTML5, CSS3, Bootstrap, Node.js, Chart.js, ES5, JSON</p>
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

Osbb.propTypes = {
  onHide: React.PropTypes.func
};
