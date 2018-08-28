import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <span className="copyright">Copyright © Your Website 2018</span>
              </div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a>
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a>
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a>
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-inline quicklinks">
                  <li className="list-inline-item">
                    <a>Privacy Policy</a>
                  </li>
                  <li className="list-inline-item">
                    <a>Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    );
  }
}
export default Footer;