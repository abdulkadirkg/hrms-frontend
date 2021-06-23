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
import { _fetchAdvertisements } from './store/actions/jobAdvertisementActions';
import { _fetchCities } from './store/actions/cityActions';
import { _fetchJobTypes } from './store/actions/jobTypeActions';
import { _fetchPositions } from './store/actions/positionActions';
const store = configureStore();
const _init = [
  _fetchAdvertisements(),
  _fetchCities(),
  _fetchJobTypes(),
  _fetchPositions()
]

_init.map(func => {
  return store.dispatch(func);
})
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
