import React from 'react';
import {Row, Col, Button, ButtonGroup} from 'react-bootstrap';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer
          className="container"
      >
        <div
            className="contact"
        >
          <h3
              className="pad-follow-me"
          >
            Социальные сети.
          </h3>
          <Row>
            <Col
                md={12}
            >
              <ButtonGroup>
                <Button href="https://www.facebook.com/andrey.rogue">
                  <i className="fa fa-facebook-square fa-3x facebook-color"></i>
                </Button>
                <Button href="skype:Andreyyyy99?call">
                  <i className="fa fa-skype fa-3x skype-color"></i>
                </Button>
                <Button href="https://github.com/GagarinAP">
                  <i className="fa fa-github-square fa-3x github-color"></i>
                </Button>
                <Button href="https://bitbucket.org/GagarinAP/">
                  <i className="fa fa-bitbucket-square fa-3x bitbucket-color"></i>
                </Button>
                <Button href="https://www.linkedin.com/in/andrey-gagarin-a89bb267/">
                  <i className="fa fa-linkedin-square fa-3x linkedin-color"></i>
                </Button>
                <Button href="https://telegram.me/gagarinap">
                  <i className="fa fa-telegram fa-3x telegram-color"></i>
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </div>
        <p className="pad-copy">Разработано &copy; 2017. Все права защищены.</p>
      </footer>
    );
  }
}
