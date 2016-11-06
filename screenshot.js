var page = require('webpage').create();
var fs = require('fs');

page.viewportSize = { width: 3840, height: 2160 };

page.open('file:///home/tamer/git/mortalchess/pgn_recorder/player.html', function () {
  setTimeout(function() { // Add a little delay before capturing the image
    page.render('screenshot.png', { format: "png" });
    phantom.exit();
  }, 1000);
});
