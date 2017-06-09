import React from 'react';
import {Button, Modal, Row, Col, Image, ButtonToolbar} from 'react-bootstrap';

export default class Mostrare extends React.Component {
  render() {
    return (
            <Modal {...this.props}
                aria-labelledby="contained-modal-title-lg"
                bsSize="large"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Mostrare</Modal.Title>
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
                                src="images/portfolio/mostrare.png"
                            />
                        </Col>
                        <Col
                            lg={6}
                            md={6}
                            sm={12}
                            xs={12}
                        >
                            <h3>Сайт создано по psd макету.</h3>
                            <h4>На сайте используются HTML5 та CSS3 технологии верстки. Адаптивний
                                дизайн(медиа запросы).</h4>
                            <h4>
                                <ButtonToolbar>
                                    <Button
                                        bsStyle="primary"
                                        href="https://gagarinap.github.io/mostrare/"
                                    >
                                        Link
                                    </Button>
                                </ButtonToolbar>
                            </h4>
                            <h4>Дата: Март 2016</h4>
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

Mostrare.propTypes = {
  onHide: React.PropTypes.func
};
