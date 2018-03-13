console.log('tic tac toe');



const player1="X";
const player2="O";
let player1Next = true;
const gameBoard=[
  '','','',
  '','','',
  '','',''
];


const playTurn = function(cell){
  if (player1Next) {
    gameBoard[cell] = "X";
    player1Next = false;
    } else {
      gameBoard[cell] = "O";
      player1Next = true;
    }

      console.log(gameBoard);


      if(hasGameWin() === true){

        console.log('Hurray!! You Won The Game');
      } else {

        console.log('Try Again');
      };
      return gameBoard[cell];

    };


  const hasGameWin = function(){

    if(
      (gameBoard[0] === player1 && gameBoard[1] === player1 && gameBoard[2] === player1)||
      (gameBoard[3] === player1 && gameBoard[4] === player1 && gameBoard[5] === player1)||
      (gameBoard[6] === player1 && gameBoard[7] === player1 && gameBoard[8] === player1)||
      (gameBoard[0] === player1 && gameBoard[3] === player1 && gameBoard[6] === player1)||
      (gameBoard[1] === player1 && gameBoard[4] === player1 && gameBoard[7] === player1)||
      (gameBoard[2] === player1 && gameBoard[5] === player1 && gameBoard[8] === player1)||
      (gameBoard[0] === player1 && gameBoard[4] === player1 && gameBoard[8] === player1)||
      (gameBoard[2] === player1 && gameBoard[4] === player1 && gameBoard[6] === player1)

    )
        {

      return true;
        }  else {
      return false;
        }

        }


$(document).ready(function(){

    $('.play').click(function(){
      $('#announcement').html('Game Started').fadeOut(3000);

});

    $('.box').click(function(event){
      var $element = $(this);
      var keyword1 = playTurn(this.id);
      $element.html(keyword1);


    // for(let i = 0; i < gameBoard.length; i++){
    // document.getElementsByTagName().innerHTML('gameboard[i]');
    // }
    });



});
