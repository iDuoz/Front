import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body {
      padding : 0;
      margin : 0;
      scroll-behavior: smooth;
      font-family : 'Noto Sans KR';
      @media (max-width: 1200px) {
        font-size: 14px
      }
      @media (max-width: 1024px) {
        font-size: 10px
      }
      @media (max-width: 768px) {
        font-size: 8px
      }
    }
    
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
