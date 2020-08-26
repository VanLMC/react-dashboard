import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/home';
import FinancesPage from './pages/finances';
import AccountingPage from './pages/accounting';
import './global.css';
import * as serviceWorker from './serviceWorker';
import Sidebar from './components/sidebar';

ReactDOM.render(
  <React.StrictMode>
    

    <Router>
      <Sidebar />
        <Route path="/home" component={HomePage} />
        <Route path="/financeiro" component={FinancesPage} />
        <Route path="/contabilidade" component={AccountingPage} />
    </Router>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
