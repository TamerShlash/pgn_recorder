var page = require('webpage').create();
page.viewportSize = { width: 3840, height: 2160 };

page.open('file:///home/tamer/git/mortalchess/pgn_recorder/player.html', function () {
  var duration = 1000 * 10;
  var timeElapsed = 0;

  var intervalId = setsetInterval(function() {
    page.render('/dev/stdout', { format: "png" });
    timeElapsed += 25;
    if (timeElapsed >= duration) {
      clearInterval(intervalId);
      phantom.exit();
    }
  }, 25);
});
