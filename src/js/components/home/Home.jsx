import React from 'react';
import {Image, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router';
import {Line} from 'react-chartjs-2';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import L from 'leaflet';
import _ from 'lodash';

L.Icon.Default.imagePath = './images/';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 50.6191685,
      lng: 26.195218,
      zoom: 8
    };
    this.parseStatistic = this.parseStatistic.bind(this);
    this.labelsStatistic = this.labelsStatistic.bind(this);
  }
  parseStatistic() {
    let data = [];

    let backbone = [];
    let react = [];
    let angu = [];
    let angu2 = [];

    let date = [];

    _.forEach(this.props.statistic, stat => {
      data.push(stat.data);
    });

    let arr = _.head(data);
    _.forEach(arr, first => {
      backbone.push(first[0]);
      react.push(first[1]);
      angu.push(first[2]);
      angu2.push(first[3]);
      date.push(first[4]);
    });

    return [backbone, react, angu, angu2, date];
  }
  labelsStatistic() {
    return ['Backbone', 'React', 'Angular 1.x', 'Angular 2'];
  }
  render() {
    const data = {
      labels: this.parseStatistic()[4],
      datasets: [
        {
          label: this.labelsStatistic()[0],
          borderColor: 'rgba(255,0,0,1)',
          backgroundColor: 'rgba(0,0,0,0)',
          pointHoverBackgroundColor: 'rgba(255,0,0,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          spanGaps: false,
          fill: false,
          lineTension: 0.1,
          borderCapStyle: 'butt',
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          data: this.parseStatistic()[0]
        },
        {
          label: this.labelsStatistic()[1],
          borderColor: 'rgba(0,0,255,1)',
          backgroundColor: 'rgba(0,0,0,0)',
          pointHoverBackgroundColor: 'rgba(0,0,255,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          spanGaps: false,
          fill: false,
          lineTension: 0.1,
          borderCapStyle: 'butt',
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          data: this.parseStatistic()[1]
        },
        {
          label: this.labelsStatistic()[2],
          borderColor: 'rgba(135,135,135,1)',
          backgroundColor: 'rgba(0,0,0,0)',
          pointHoverBackgroundColor: 'rgba(135,135,135,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          spanGaps: false,
          fill: false,
          lineTension: 0.1,
          borderCapStyle: 'butt',
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          data: this.parseStatistic()[2]
        },
        {
          label: this.labelsStatistic()[3],
          borderColor: 'rgba(0,0,0,1)',
          backgroundColor: 'rgba(0,0,0,0)',
          pointHoverBackgroundColor: 'rgba(0,0,0,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          spanGaps: false,
          fill: false,
          lineTension: 0.1,
          borderCapStyle: 'butt',
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          data: this.parseStatistic()[3]
        }
      ]
    };
    const options = {
      responsive: true,
      maintainAspectRatio: false
    };
    const position = [this.state.lat, this.state.lng];
    return (
      <div>
        <div className="pre">
          <Row>
            <Col
                className="padding-0"
                md={4}
                sm={6}
                xs={12}
            >
                <Link to="/technologies">
                  <Image
                      className="image"
                      responsive
                      src="images/team_mini.jpg"
                  />
                </Link>
                <div className="middle">
                  <div className="text"><p>Технологии</p></div>
                </div>
            </Col>
            <Col
                className="padding-0"
                md={4}
                sm={6}
                xs={12}
            >
                <Link to="/skills">
                  <Image
                      className="image"
                      responsive
                      src="images/skills-new.jpg"
                  />
                </Link>
                <div className="middle">
                  <div className="text"><p>Скилы</p></div>
                </div>
            </Col>
            <Col
                className="padding-0 col-portfolio"
                md={4}
                sm={12}
                xs={12}
            >
                <Link to="/portfolio">
                  <Image
                      className="image"
                      responsive
                      src="images/portfolio-new.jpg"
                  />
                </Link>
                <div className="middle">
                  <div className="text"><p>Портфолио</p></div>
                </div>
            </Col>
          </Row>
        </div>
        <div className="chart-leaflet">
          <Row>
            <Col
                md={6}
                sm={12}
            >
                <div className="panel panel-primary">
                  <div className="panel-heading">Статистика использования Javascript библиотек 2012-2017</div>
                  <div className="panel-body panel-body-chart">
                    <Line
                        data={data}
                        options={options}
                    />
                  </div>
                </div>
            </Col>
            <Col
                md={6}
                sm={12}
            >
              <div className="panel panel-primary">
                <div className="panel-heading">Leaflet карта с маркером</div>
                  <div className="panel-body panel-body-chart">
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
        <div className="after">
          <Row>
            <Col
                className="padding-0"
                md={6}
                sm={6}
                xs={12}
            >
                <Link to="/education">
                  <Image
                      className="image"
                      responsive
                      src="images/education.png"
                  />
                </Link>
                <div className="middle">
                  <div className="text-dark"><p>Образование</p></div>
                </div>
            </Col>
            <Col
                className="padding-0"
                md={6}
                sm={6}
                xs={12}
            >
                <Link to="/contacts">
                  <Image
                      className="image"
                      responsive
                      src="images/contact-us.jpg"
                  />
                </Link>
                <div className="middle">
                  <div className="text-dark"><p>Контакты</p></div>
                </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  statistic: React.PropTypes.object
};
