var React = require('react');

var UserProfile = React.createClass({
  propTypes: {
      username: React.PropTypes.string.isRequired,
      bio: React.PropTypes.object.isRequired
  },
  render: function(){
    console.log('BIO', this.props.bio);
    return(
      <div>
        <p> UserProfile </p>
        <p> UserName : {this.props.username} </p>
      </div>
    )
  }
});

module.exports = UserProfile;
