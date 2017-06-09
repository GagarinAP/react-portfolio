import React from 'react';
import {Row, Col, Image, Breadcrumb} from 'react-bootstrap';

import Polo360 from './modals/Polo360';
import Fowler from './modals/Fowler';
import Pattern from './modals/Pattern';
import Osbb from './modals/Osbb';
import Land from './modals/Land';
import Mostrare from './modals/Mostrare';
import Chat from './modals/Chat';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      polo360Show: false,
      fowlerShow: false,
      patternShow: false,
      osbbShow: false,
      landShow: false,
      mostrareShow: false,
      chatShow: false
    };
  }
  render() {
    let polo360Close = () => this.setState({polo360Show: false});
    let fowlerClose = () => this.setState({fowlerShow: false});
    let patternClose = () => this.setState({patternShow: false});
    let osbbClose = () => this.setState({osbbShow: false});
    let landClose = () => this.setState({landShow: false});
    let mostrareClose = () => this.setState({mostrareShow: false});
    let chatClose = () => this.setState({chatShow: false});
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
          <Breadcrumb.Item active>Портфолио</Breadcrumb.Item>
        </Breadcrumb>
        <h1>Портфолио</h1>
        <h2>Немногие примеры моих робот</h2>
        <Row>
          <Col
              className="pre"
              md={4}
              sm={6}
          >
            <div className="card">
              <a onClick={()=>this.setState({polo360Show: true})}>
                <Image
                    responsive
                    src="images/portfolio/polo360-hover.png"
                />
              </a>
            <div className="cont">
              <h3><b>Polo360</b></h3>
              <h4>Responsive Web Site Template</h4>
              <Polo360
                  onHide={polo360Close}
                  show={this.state.polo360Show}
              />
            </div>
            </div>
          </Col>
          <Col
              className="pre"
              md={4}
              sm={6}
          >
            <div className="card">
              <a onClick={()=>this.setState({fowlerShow: true})}>
                <Image
                    responsive
                    src="images/portfolio/fowler-hover.png"
                />
              </a>
              <div className="cont">
                <h3><b>Fowler</b></h3>
                <h4>Responsive Web Site Template</h4>
                <Fowler
                    onHide={fowlerClose}
                    show={this.state.fowlerShow}
                />
              </div>
            </div>
          </Col>
          <Col
              className="pre"
              md={4}
              sm={6}
          >
            <div className="card">
              <a onClick={()=>this.setState({patternShow: true})}>
                <Image
                    responsive
                    src="images/portfolio/pattern-hover.png"
                />
              </a>
              <div className="cont">
                <h3><b>Pattern</b></h3>
                <h4>Responsive Web Site Template</h4>
                <Pattern
                    onHide={patternClose}
                    show={this.state.patternShow}
                />
              </div>
            </div>
          </Col>
          <Col
              className="pre"
              md={4}
              sm={6}
          >
                <div className="card">
                  <a onClick={()=>this.setState({osbbShow: true})}>
                    <Image
                        responsive
                        src="images/portfolio/osbb-hover.png"
                    />
                  </a>
                    <div className="cont">
                        <h3><b>Osbb</b></h3>
                        <h4>Responsive Web Site Template</h4>
                        <Osbb
                            onHide={osbbClose}
                            show={this.state.osbbShow}
                        />
                    </div>
                </div>
          </Col>
          <Col
              className="pre"
              md={4}
              sm={6}
          >
                <div className="card">
                  <a onClick={()=>this.setState({landShow: true})}>
                    <Image
                        responsive
                        src="images/portfolio/land-hover.png"
                    />
                  </a>
                    <div className="cont">
                        <h3><b>Land</b></h3>
                        <h4>Responsive Web Site Template</h4>
                        <Land
                            onHide={landClose}
                            show={this.state.landShow}
                        />
                    </div>
                </div>
          </Col>
          <Col
              className="pre"
              md={4}
              sm={6}
          >
                <div className="card">
                  <a onClick={()=>this.setState({mostrareShow: true})}>
                    <Image
                        responsive
                        src="images/portfolio/mostrare-hover.png"
                    />
                  </a>
                    <div className="cont">
                        <h3><b>Mostrare</b></h3>
                        <h4>Responsive Web Site Template</h4>
                        <Mostrare
                            onHide={mostrareClose}
                            show={this.state.mostrareShow}
                        />
                    </div>
                </div>
          </Col>
          <Col
              className="pre"
              md={4}
              sm={6}
          >
                <div className="card">
                  <a onClick={()=>this.setState({chatShow: true})}>
                    <Image
                        responsive
                        src="images/portfolio/Chat-hover.png"
                    />
                  </a>
                    <div className="cont">
                        <h3><b>Chat</b></h3>
                        <h4>Socket.io live chat</h4>
                        <Chat
                            onHide={chatClose}
                            show={this.state.chatShow}
                        />
                    </div>
                </div>
          </Col>
        </Row>
      </div>
    );
  }
}

Portfolio.propTypes = {
  dialogClassName: React.PropTypes.string
};
