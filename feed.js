$(document).ready(function(){

  // NEW TWEETS BUTTON
  $("#btn").on("click", loadTweets);

  function changeBtnText(text) {
    $("#btn").text(text);
  }

  // TWEET SETUP LOOP
  function tweetSetup(stream, div, index, user) {

    stream = stream[user] || stream;

    $.each(stream, function(index, item) {
      var tweet = item,
          $tweetContainer = $("<div></div>").addClass("tweet-container"),
          $userAndTime = $("<div></div>").addClass("user-and-time"),
          $user = $("<a href='#'></a>").addClass("user"),
          $time = $("<span></span>").addClass("time"),
          $tweet = $("<div></div>").addClass("tweet");

      $user.text("@" + tweet.user);
      $time.text(tweet.created_at);
      $tweet.text(tweet.message);

      if (!user) {
        $user.on("click", function() {
          userClick($(this).text());
        });
      }

      $userAndTime
        .append($user)
        .append($time);

      $tweetContainer
        .append($userAndTime)
        .append($tweet);

      $tweetContainer.prependTo(div);

    });

  }


  // LOAD ALL USER TWEETS

  // declare "index" variable and its value.
  // this value will be updated and will be the starting point in the streams.home array every time loadTweets() is run.
  // "index" is found in outermost function because subsequent invocations of "loadTweets" need access
  // to its constantly updated value.
  var allTweetsIndex = 0;

  // feed that displays all tweets from all users.
  function loadTweets(i) {

    var $feed = (".feed"),
        btnText = "check for new tweets";

    $(".user-tweets").find(".tweet-container").remove();
    $(".feed").show();

    tweetSetup(streams.home, $feed, allTweetsIndex);

    allTweetsIndex = i;
    changeBtnText(btnText);

  }

  // LOAD USER-SPECIFIC TWEETS

  function userClick(user) {

    user = user.slice(1);

    var $userTweets = $(".user-tweets"),
        btnText = "go back to feed";

    // display correct feed div.
    $(".feed").hide();
    $(".user-tweets").show();

    tweetSetup(streams.users, $userTweets, 0, user);

    changeBtnText(btnText);

  }


  loadTweets(allTweetsIndex);

});