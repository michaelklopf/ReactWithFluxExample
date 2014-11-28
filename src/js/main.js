/**
* @jsx React.DOM
*/
var AppComponent = require('./components/app.js');
var React = require('react');

console.log(AppComponent);
React.renderComponent(
    <AppComponent />,
    document.getElementById('main')
);