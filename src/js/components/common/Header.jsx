import React from 'react';
import {Link, IndexLink} from 'react-router';
import {Navbar} from 'react-bootstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Navbar
          collapseOnSelect
          staticTop
      >
		<div className="navbar-header">
        <Navbar.Toggle />
        <IndexLink
            className="navbar-brand"
            to="/"
        >
            Haharin
        </IndexLink>
        </div>
        <Navbar.Collapse>
        <ul
            className="nav navbar-nav navbar-right"
        >
          <li>
            <Link
                activeClassName={'active'}
                to="/technologies"
            >
              Технологии
            </Link>
          </li>
          <li>
            <Link
                activeClassName={'active'}
                to="/skills"
            >
              Навыки
            </Link>
          </li>
          <li>
            <Link
                activeClassName={'active'}
                to="/portfolio"
            >
              Портфолио
            </Link>
          </li>
          <li>
            <Link
                activeClassName={'active'}
                to="/education"
            >
              Образование
            </Link>
          </li>
          <li>
            <Link
                activeClassName={'active'}
                to="/contacts"
            >
              Контакты
            </Link>
          </li>
        </ul>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
