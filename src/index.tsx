import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.less'
import {createGlobalStyle} from 'styled-components';
import { BrowserRouter } from 'react-router-dom'
import {Provider} from "react-redux";
import store from './store'

export const GlobalStyle = createGlobalStyle`
  #root{
    height: 100%;
    #layout{
      height: 100%;
    }
  }
`;


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle/>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
