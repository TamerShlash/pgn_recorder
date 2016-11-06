var page = require('webpage').create();
page.viewportSize = { width: 3840, height: 2160 };

page.open('file:///home/tamer/git/mortalchess/pgn_recorder/player.html', function () {
  var moves = 10
  var captureEvery = 40;
  var totalFrames = moves * 1000 / captureEvery;
  var frame = 1;
  setInterval(function() {
    page.render('frames/chess'+('000'+(frame)).slice(-3) +'.png', { format: "png" });
    frame++;
    if(frame > totalFrames) {
      phantom.exit();
    }
  }, captureEvery);
});
