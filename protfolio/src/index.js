import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Header} from './header';
import { Home} from './home';
import {  About} from './about';
import {  Skills} from './skills';
import { Education } from './education';
import {  Footer} from './footer';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    <About />
    <Skills />
    <Education/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
