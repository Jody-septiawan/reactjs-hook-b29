import React, { Component } from 'react';

export default class GuestGreeting extends Component {
  //Create method WillUnmount inside it can print "GuestGreeting Component Will Unmount" here...
  componentWillUnmount() {
    console.log('GuestGreeting Component Will Unmount');
  }

  render() {
    return (
      <div className="text-center h1 bg-secondary text-light py-5">
        Please Login !
      </div>
    );
  }
}
