var React = require('react');

var UserProfile = React.createClass({
  render: function(){
    return(
      <div>
        <p> UserProfile </p>
        <p> UserName : {this.props.username} </p>
        <p> Bio : {this.props.bio.name} </p>
      </div>
    )
  }
});

module.exports = UserProfile;