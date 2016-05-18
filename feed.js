$(document).ready(function(){
  // new tweets button

  // LOAD ALL USER TWEETS

  // declare "index" variable and its value.
  // this value will be updated and will be the starting point in the streams.home array every time loadTweets() is run.
  // "index" is found in outermost function because subsequent invocations of "loadTweets" need access
  // to its constantly updated value.
  var index = 0;

  // feed that displays all tweets from all users.
  function loadTweets(i) {

    var $feed = (".feed");

    // use loop to create HTML setup for each tweet.
    $.each(streams.home, function(i, value) {
      // establish HTML element for each tweet component.
      var tweet = value,
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

      // append elements to container divs.
      $userAndTime
        .append($user)
        .append($time);

      $tweetContainer
        .append($userAndTime)
        .append($tweet);

      // prepend tweets to $feed in order for them to be in reverse chronological order.
      $tweetContainer.prependTo($feed);
    });

    index = i;

  }

  // load user-specific tweets


  loadTweets(index);

});