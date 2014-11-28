/**
* @jsx React.DOM
*/
var AppComponent = require('./components/app');
var React = require('react');

React.renderComponent(
    <AppComponent />,
    document.getElementById('main')
);