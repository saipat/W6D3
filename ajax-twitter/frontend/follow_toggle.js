const APIUtil = require('./api_util.js');

function FollowToggle($el) {
  this.$el = $el;
  this.userId = $el.data('user-id');
  this.followState = $el.data('initial-follow-state');
  this.render();
  $el.on('click', this.handleClick.bind(this));
}

FollowToggle.prototype.render = function() {
  if (this.followState === "unfollowed") {
    $('.follow-toggle').text('Follow!');
  } else {
    $('.follow-toggle').text('Unfollow!');
  }
};

FollowToggle.prototype.handleClick = function(e) {
    e.preventDefault();
    
    if (this.followState === "unfollowed") {
      APIUtil.followUser(this.userId).then(() => this.updateButton());
    } else {
      APIUtil.unfollowUser(this.userId).then(() => this.updateButton());
    }
};

FollowToggle.prototype.updateButton = function() {
  this.followState = this.followState === "followed" ? "unfollowed" : "followed";
  this.render();
};


module.exports = FollowToggle;