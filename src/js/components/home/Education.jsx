import React from 'react';
import {Breadcrumb, Button, Panel, Row, Col} from 'react-bootstrap';

export default class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open2016: false,
      open2015: false,
      open2011: false,
      open2005: false
    };
  }
  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
          <Breadcrumb.Item active>Образование</Breadcrumb.Item>
        </Breadcrumb>
        <h1>Образовательные учреждения, в которых получил высшее образование.</h1>
          <blockquote>
            <p>Жизнь - это не только обучение, но если ты не можешь "осилить" этот промежуток жизни то что ты вообще
                можешь?</p>
          </blockquote>
        <Row>
            <Col md={12}>
                <Button onClick={()=> this.setState({open2016: !this.state.open2016})}>
                    <i className="fa fa-check-square-o"></i> 2016 год
                </Button>
                <Panel
                    collapsible
                    expanded={this.state.open2016}
                >
                    <h2>КА ШАГ Ровно</h2>
                    <p><mark>Специализация: Front-end Developer</mark></p>
                    <p>Html+Css, JavaScript(5,6), Gulp, Webpack, Node.js, Angular 1.5.x, Angular 2, React, Redux,
                        Chart.js, Leaflet.js, Backbone.js и другие.</p>
                </Panel>
            </Col>
            <Col md={12}>
                <Button onClick={()=> this.setState({open2015: !this.state.open2015})}>
                    <i className="fa fa-check-square-o"></i> 2015 год
                </Button>
                <Panel
                    collapsible
                    expanded={this.state.open2015}
                >
                    <h2>КА ШАГ Ровно</h2>
                    <p><mark>Специализация: Software Development</mark></p>
                    <p>С, С++, С#, Java, JavaScript, PHP и другие.</p>
                </Panel>
            </Col>
            <Col md={12}>
                <Button onClick={()=> this.setState({open2011: !this.state.open2011})}>
                    <i className="fa fa-check-square-o"></i> 2011 год
                </Button>
                <Panel
                    collapsible
                    expanded={this.state.open2011}
                >
                    <h2>Международный Экономико-гуманитарный университет им.Степана Демьянчука</h2>
                    <p><mark>Специализация: Прикладная математика</mark></p>
                    <p>Технический специалист по прикладным наукам и технике. Специалист по прикладной математике.</p>
                </Panel>
            </Col>
            <Col md={12}>
                <Button onClick={()=> this.setState({open2005: !this.state.open2005})}>
                    <i className="fa fa-check-square-o"></i> 2005 год
                </Button>
                <Panel
                    collapsible
                    expanded={this.state.open2005}
                >
                    <h2>Аграрный колледж</h2>
                    <p><mark>Специализация: Техник-программист</mark></p>
                    <p>Программирование для компьютеров и вычислительных машин.</p>
                </Panel>
            </Col>
        </Row>
      </div>
    );
  }
}
