$(document).ready(function(){
  // new tweets button

  // LOAD ALL USER TWEETS

  // feed that displays all tweets from all users.
  function loadTweets(index) {

    var $feed = (".feed");

    // use loop to create HTML setup for each tweet.
    $.each(streams.home, function(index, value) {
      // establish HTML element for each tweet component.
      var tweet = streams.home[index],
          $tweetContainer = $("<div></div>").addClass("tweet-container"),
          $userAndTime = $("<div></div>").addClass("user-and-time"),
          $user = $("<a href='#'></a>").addClass("user"),
          $time = $("<span></span>").addClass("time"),
          $tweet = $("<div></div>").addClass("tweet");

      // assign appropriate text for various tweet components using
      // "tweet" object in data_generator.js.
      $user.text("@" + tweet.user);
      $time.text(tweet.created_at);
      $tweet.text(tweet.message);

      // prepend tweets to $feed in order for them to be in reverse chronological order.
      $tweetContainer.prependTo($feed);
    });

  }

  // load user-specific tweets

};