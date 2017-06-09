import React from 'react';
import {Button, Modal, Row, Col, Image, ButtonToolbar} from 'react-bootstrap';

export default class Polo360 extends React.Component {
  render() {
    return (
            <Modal {...this.props}
                aria-labelledby="contained-modal-title-lg"
                bsSize="large"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Polo360</Modal.Title>
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
                                src="images/portfolio/polo360.png"
                            />
                        </Col>
                    <Col
                        lg={6}
                        md={6}
                        sm={12}
                        xs={12}
                    >
                        <h3>Сайт создано по psd макету.</h3>
                        <h4>Слайдер на чистом css, блок слайдера выходить за пределы фиксированного блока контента,
                            адаптивний дизайн.</h4>
                        <h4>
                            <ButtonToolbar>
                                <Button
                                    bsStyle="primary"
                                    href="http://gagarinap.github.io/polo/polo/"
                                >
                                    Link
                                </Button>
                            </ButtonToolbar>
                        </h4>
                        <h4>Дата: Апрель 2016</h4>
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

Polo360.propTypes = {
  onHide: React.PropTypes.func
};
