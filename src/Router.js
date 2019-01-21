import React, { Component } from 'react';
import './assets/css/material-dashboard.css?v=2.1.0'
import Sidenav from './partials/navigation/sidenav'
import Featured from './components/featured/Featured'
import TopNav from './partials/navigation/topnav'
import Footer from './partials/footer/footer'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserProfile from './components/profiles/UserProfile'
import Typography from './components/typography/typography'
import NotFound from './components/notfound/NotFound'
import Notification from './components/notification/Notification'
import Tables from './components/tables/Tables'

export default class Router extends Component {
    render() {
      return (
        <BrowserRouter>
          <div className = "dark-edition">
            {/* <div className="wrapper"> */}
              <Sidenav/>
              <div className= "main-panel">
                <TopNav/>
                <Switch>
                  <Route exact path= '/' component = {Featured}/>
                  <Route exact path = '/profile' component = {UserProfile}/>
                  <Route exact path = '/typography' component = {Typography}/>
                  <Route exact path = '/notification' component = {Notification}/>
                  <Route exact path = '/table' component = {Tables}/>
                  <Route exact path = '*' component = {NotFound}/>
                </Switch>
                <Footer/>
            {/* </div> */}
            </div>
          </div>
        </BrowserRouter>
      );
    }
  }
  
  