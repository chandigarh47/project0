console.log('tic tac toe');


//Declare two constant variable and assigning "X" and "O" values to them.
const player1="X";
const player2="O";
let player1Next = true;

// declare a null array and named as gameBoard
const gameBoard = [
  '','','',
  '','','',
  '','',''
];

// switiching the values between player1 and player2 in a function called playTurn

const playTurn = function( cell ) {

// In if condition we are checking if player1 is true then prints "X" and immediately becomes
// return false to give chance to player2 to play its turn.
  if ( player1Next ) {
      gameBoard[ cell ] = "X";
      player1Next = false;
    } else {
      gameBoard[ cell ] = "O";
      player1Next = true;
    }

      console.log( gameBoard );
// In this if condition checking the hasGameWin function if it is true for player1 THEN
// prints console otherwise run else part.

      if( hasGameWin() === true ) {

        //console.log('Hurray!! You Won The Game');
        $('#announcement').html('Hurray!! You Won The Game').fadeIn(1) ;

      } else {
        console.log( 'Try Again' );
      };

        return gameBoard[ cell ];

      };



// we declare a hasGameWin function for checking the matches in 3 rows
// 3 columns and 2 diagonals if match found then return true for player1
  const hasGameWin = function() {

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
    }
  //in else part if player 2 got a match then return true
     else if (
      (gameBoard[0] === player2 && gameBoard[1] === player2 && gameBoard[2] === player2)||
      (gameBoard[3] === player2 && gameBoard[4] === player2 && gameBoard[5] === player2)||
      (gameBoard[6] === player2 && gameBoard[7] === player2 && gameBoard[8] === player2)||
      (gameBoard[0] === player2 && gameBoard[3] === player2 && gameBoard[6] === player2)||
      (gameBoard[1] === player2 && gameBoard[4] === player2 && gameBoard[7] === player2)||
      (gameBoard[2] === player2 && gameBoard[5] === player2 && gameBoard[8] === player2)||
      (gameBoard[0] === player2 && gameBoard[4] === player2 && gameBoard[8] === player2)||
      (gameBoard[2] === player2 && gameBoard[4] === player2 && gameBoard[6] === player2)
    )
        {
          return true;
    }

// here i am checking the values of gameBoard using counter assign to 0.
// checking each element of gameBoard through loop.
    let counter = 0;
    for ( let i = 0; i < gameBoard.length; i++ ) {

// here if gameBoard is not equal to null then increment the values of counter by 1.
        if( gameBoard[ i ] != "" )
        {
          counter += 1;

        }
    }

// here if counter is equal to 9 cells of gameboard and there is no match found by player1 and player2
//then it returns draw.
    if( counter === 9 ) {
      //console.log(' draw' );
       $( '#announcement' ).html( 'draw' ).fadeIn( 1 );
      return "draw";
    }

}

// jquery starts here
  $(document).ready(function() {

//firstly select the id name box where i want to perform the event by clicking.
    $( '.box' ).click(function( event ) {

// ${this} it refers to the gameBoard[cell] and storing into a variable.
      var $element = $( this );

//   here calling the playTurn function with gameBoard[cell]id  in its parantheses.
      var keyword1 = playTurn( this.id );
      $element.html( keyword1 );

    });

// this click is for button when i click on button name play a game
// the game started appears on the screen

    $('.play').click(function() {
      $('#announcement').html('Game Started').fadeOut(3000);

    });

// here i am doing the reset the values of gameBoard when i click the button reset.

    $('.reset').click(function() {
      for ( let i = 0; i < gameBoard.length; i++ ) {
        gameBoard[ i ] = "";
        $('#' + i).html("")
      }
      $('#announcement').html('Game Started').fadeOut(3000);

    });

    });
