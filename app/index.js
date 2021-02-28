import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Containers/Header';
import Main from './Containers/Main';
import Footer from './Containers/Footer';
import './index.scss';


console.log(process.env.TEST);

ReactDOM.render(
    <>
      <Header />
      <Main />
      <Footer />
    </>,
    document.getElementById('root')
  );