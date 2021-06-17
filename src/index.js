import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from "react-toast-notifications";
import ScrollToTop from "./utils/ScrollToTop/ScrollToTopUtil"
import { Provider } from 'react-redux';
import { configureStore } from "./store/configureStore"
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ToastProvider>
        <ScrollToTop />
        <App />
      </ToastProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
