import React, { Component } from 'react';

class Header extends Component {
	constructor(props) {
      super(props);
   }
   
  render() {
    return (
     <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">LinhBlog</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#services">Service</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#team">Team</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="masthead">
          <div className="container">
            <div className="intro-text">
              <div className="intro-lead-in">Welcome To Our Studio!</div>
              <div className="intro-heading text-uppercase">It's Nice To Meet You </div> 
              <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default Header;