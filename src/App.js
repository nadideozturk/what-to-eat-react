import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {NavBarComponent} from './components/navbar';
import {HomemadeMealsComponent} from './components/homemadeMeals';
import {OutsideMealsComponent} from './components/outsideMeals';
import {PlanComponent} from './components/plan';
import {RecommendationComponent} from './components/recommendation';
import {SettingsComponent} from './components/settings';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBarComponent />
            <Route path="/" exact component={HomemadeMealsComponent} />
            <Route path="/outside/" component={OutsideMealsComponent} />
            <Route path="/plan/" component={PlanComponent} />
            <Route path="/recommendation/" component={RecommendationComponent} />
            <Route path="/settings/" component={SettingsComponent} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
