import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
// import Jumbotron from './Jumbotron';
import SearchBox from './SearchBox';
// import FixedNavbar from './FixedNavbar';
import RoboTitle from './RoboTitle';


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
    console.log("event.target.value: ", event.target.value);
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    console.log("filteredRobots: ", filteredRobots);
  }

  render() {
    return (
      <div className='tc'> {/** tc = tachyon text-align: center;  **/}
        {/* <FixedNavbar /> */}
        <RoboTitle />
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={this.state.robots}/>
      </div>
    )
  }
};

export default App;
