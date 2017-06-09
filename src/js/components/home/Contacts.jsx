import React from 'react';
import {Row, Col, Form, FormGroup, FormControl, Button, Breadcrumb, Alert} from 'react-bootstrap';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import L from 'leaflet';
import {loadFormData} from '../../actions/statAction';

L.Icon.Default.imagePath = './images/';

export default class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 50.6191685,
      lng: 26.195218,
      zoom: 8,
      name: 'Name',
      email: 'Email',
      text: 'Text',
      message: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormData = this.handleFormData.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const email = target.email;
    const text = target.text;

    this.setState({
      [name]: target.value,
      [email]: target.value,
      [text]: target.value
    });
  }
  handleFormData(event) {
    const err = <Alert bsStyle="warning"><strong>Ваше сообщение не отправлено!</strong></Alert>;
    const message = <Alert bsStyle="success"><strong>Ваше сообщение отправлено!</strong></Alert>;
    if (this.state.name === 'Name' || this.state.email === 'Email' || this.state.text === 'Text') {
      this.setState({
        message: err,
        name: 'Name',
        email: 'Email',
        text: 'Text'
      });
    } else {
      loadFormData(this.state.name, this.state.email, this.state.text);
      this.setState({
        message: message
      });
    }
    event.preventDefault();
  }
  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
          <Breadcrumb.Item active>Контакты</Breadcrumb.Item>
        </Breadcrumb>
        <h1>Контактная информация</h1>
          <Row>
            <Col
                className="pad-none"
                md={6}
            >
              <Col
                  md={12}
                  sm={12}
                  xs={12}
              >
                <h2>Гагарин Андрей</h2>
                <h3>33013 Украина, г.Ровно</h3>
                <h3>Тел: <i className="fa fa-phone-square"></i> +38(098)854-91-72</h3>
                <h3>Почта: <i className="fa fa-envelope-o"></i>
                  <a href="mailto:gagarin.web@gmail.com">gagarin.web@gmail.com</a>
                </h3>
                <h3>Скачать резюме:
                  <Button
                      bsStyle="link"
                      href="/cv/CV-Frontend-Haharin.doc"
                  >
                    Resume.doc
                  </Button>
                  <Button
                      bsStyle="link"
                      href="/cv/CV-Frontend-Haharin.pdf"
                  >
                    Resume.pdf
                  </Button>
                </h3>
              </Col>
              <Col
                  md={12}
                  sm={12}
                  xs={12}
              >
                <h3>Хотите отправить сообщение?</h3>
                <Form
                    horizontal
                    onSubmit={this.handleFormData}
                >
                  { this.state.message }
                  <FormGroup controlId="formHorizontalText">
                    <Col
                        sm={12}
                    >
                      <FormControl
                          className="name"
                          name="name"
                          onChange={this.handleInputChange}
                          placeholder="Имя"
                          type="text"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col
                        sm={12}
                    >
                      <FormControl
                          className="email"
                          name="email"
                          onChange={this.handleInputChange}
                          placeholder="Почта"
                          type="email"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formControlsTextarea">
                    <Col
                        sm={12}
                    >
                      <FormControl
                          className="text"
                          componentClass="textarea"
                          name="text"
                          onChange={this.handleInputChange}
                          placeholder="Текст"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col
                        sm={12}
                    >
                      <Button
                          block
                          bsSize="large"
                          bsStyle="default"
                          className="btn-contact"
                          type="submit"
                      >
                        Отправить
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </Col>
              </Col>
              <Col
                  md={6}
                  sm={12}
                  xs={12}
              >
                <div className="panel panel-primary">
                  <div className="panel-heading">Карта с маркером</div>
                    <div className="panel-body panel-contact-chart">
                      <Map
                          center={position}
                          zoom={this.state.zoom}
                      >
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        />
                        <Marker
                            position={position}
                        >
                          <Popup>
                            <span>Самый лучший город</span>
                          </Popup>
                        </Marker>
                      </Map>
                  </div>
                </div>
              </Col>
          </Row>
      </div>
    );
  }
}
