/**
* @jsx React.DOM
*/
var React = require('react');
console.log(React);

var AppComponent = React.createClass({
    render : function() {
        return (
            <div>
                <h1>My App</h1>
            </div>
        );
    }
});

module.exports = AppComponent;