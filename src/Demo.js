import React, { Component } from 'react';
import Content from './compoments/Content.js';
import Header from './compoments/Header.js';
import Footer from './compoments/Footer.js';

class Demo extends Component {
  render() {
    return (
    	<div>
    		<Header />
    		<Content />
    		<Footer />
    	</div>
    );
  }
}
export default Demo;