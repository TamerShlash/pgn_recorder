//dummy data
pgnData = [
  [
    '[Event "GCT Rapid YourNextMove YourNextMove YourNextMove "]',
    '[Site "Kallithea GRE"]',
    '[Date "2008.10.18"]',
    '[EventDate "2008.10.17"]',
    '[Round "2"]',
    '[Result "1-0"]',
    '[White "Simon Ansell"]',
    '[Black "J Garcia-Ortega Mendez"]',
    '[ECO "B27"]',
    '[WhiteElo "2410"]',
    '[BlackElo "2223"]',
    '[PlyCount "29"]',
    '',
    '1. e4 c5 2. Nf3 g6 3. d4 cxd4 4. Qxd4 Nf6 5. e5 Nc6 6. Qa4 Nd5 7. Qe4 Ndb4 8. Bb5 Qa5 9. Nc3 d5 10. exd6 Bf5 11. d7+ Kd8 12. Qc4 Nxc2+ 13. Ke2 Nxa1 14. Rd1 Be6 15. Qxe6 1-0'
  ]
];

function loadGame(i) {
  game = new Chess();
  game.load_pgn(pgnData[i].join('\n'), {newline_char:'\n'});
  gameHistory = game.history({verbose: true});
  var h = game.header();
  $('#black-player').html(h.Black)
  $('#white-player').html(h.White)
  $('#event-name').html("Event: " + h.Event)
  $('#site-name').html("Site: " + h.Site)
  $('#game-date').html("Date: " + h.Date)
  $('#round-number').html("Round: " + h.Round)
  $('#eco-code').html("ECO Code: " + h.ECO)
  game.reset();
  board.position(game.fen());
  currentMove = -1;
}

// [Event "Troll Masters"]
// [Site "Gausdal NOR"]
// [Date "2001.01.05"]
// [Round "1"]
// [White "Edvardsen,R"]
// [Black "Carlsen,Magnus"]
// [Result "1/2-1/2"]
// [WhiteElo "2055"]
// [BlackElo ""]
// [ECO "D12"]

// start doing stuff
var board, //the chessboard
    game,  //the game
    gameHistory,
    currentMove,
    moveIntervalId;

// set up the board
var cfg = {
  pieceTheme: './img/chesspieces/{piece}.svg',
  position: 'start',
  onChange: function() {}
};
board = new ChessBoard('board', cfg);

loadGame(0);
setTimeout(function() {
  moveIntervalId = setInterval(function() {
    currentMove++;
    game.move(gameHistory[currentMove].san);
    board.position(game.fen());
    if (currentMove + 1 == gameHistory.length) {
      clearInterval(moveIntervalId);
    } 
  }, 2000);
}, 1000);
