$(document).ready(function(){
  // new tweets button

  // LOAD ALL USER TWEETS

  // feed that displays all tweets from all users.
  function loadTweets(index) {

    var $feed = (".feed");

    // use loop to create HTML setup for each tweet.
    $.each(streams.home, function(index, value) {
      // establish HTML element for each tweet component.

      // assign appropriate text for various tweet components using
      // "tweet" object in data_generator.js.

      // prepend tweets to $feed in order for them to be in reverse chronological order.
    });

  }

  // load user-specific tweets

}