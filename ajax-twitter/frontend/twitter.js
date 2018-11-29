const FollowToggle = require ('./follow_toggle.js');
const APIUtil = require('./api_util.js')

$(() => {
  $buttonToggle = $('button.follow-toggle');
  $buttonToggle.each((idx, btn) => {
    // debugger
    $btn = $(btn);
    new FollowToggle($btn);
  });
});
  
