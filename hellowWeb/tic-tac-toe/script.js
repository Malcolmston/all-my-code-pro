class TicTacToe {
    constructor() {
        this.board = Array(9).fill(0); // 0 means "empty"
        this.moves = [];
        this.isWin = this.isDraw = false;
    }
    get turn() { // returns 1 or 2
        return 1 + this.moves.length % 2;
    }
    get validMoves() {
        return [...this.board.keys()].filter(i => !this.board[i])
    }
    play(move) { // move is an index in this.board
        if (this.board[move] !== 0 || this.isWin) return false; // invalid move
        this.board[move] = this.turn; // 1 or 2
        this.moves.push(move);
        // Use regular expression to detect any 3-in-a-row
        this.isWin = /^(?:...)*([12])\1\1|^.?.?([12])..\2..\2|^([12])...\3...\3|^..([12]).\4.\4/.test(this.board.join(""));
        this.isDraw = !this.isWin && this.moves.length === this.board.length;
        return true;
    }
    takeBack() {
        if (this.moves.length === 0) return false; // cannot undo
        this.board[this.moves.pop()] = 0;
        this.isWin = this.isDraw = false;
        return true;
    }
    minimax() {
        if (this.isWin) return { value: -10 };
        if (this.isDraw) return { value: 0 };
        let best = { value: -Infinity };
        for (let move of this.validMoves) {
            this.play(move);
            let {value} = this.minimax();
            this.takeBack();
            // Reduce magnitude of value (so shorter paths to wins are prioritised) and negate it
            value = value ? (Math.abs(value) - 1) * Math.sign(-value) : 0;
            if (value >= best.value) {
                if (value > best.value) best = { value, moves: [] };
                best.moves.push(move); // keep track of equally valued moves
            }
        }
        return best;
    }
    goodMove() {
        let {moves} = this.minimax();
        // Pick a random move when there are choices:
        return moves[Math.floor(Math.random() * moves.length)];
    }
}

class TicTacToe_load {
    constructor(a) {
      
        this.board = a // 0 means "empty"
        this.moves = [];
        this.isWin = this.isDraw = false;
    }
    get turn() { // returns 1 or 2
        return 1 + this.moves.length % 2;
    }
    get validMoves() {
        return [...this.board.keys()].filter(i => !this.board[i])
    }
    play(move) { // move is an index in this.board
        if (this.board[move] !== 0 || this.isWin) return false; // invalid move
        this.board[move] = this.turn; // 1 or 2
        this.moves.push(move);
        // Use regular expression to detect any 3-in-a-row
        this.isWin = /^(?:...)*([12])\1\1|^.?.?([12])..\2..\2|^([12])...\3...\3|^..([12]).\4.\4/.test(this.board.join(""));
        this.isDraw = !this.isWin && this.moves.length === this.board.length;
        return true;
    }
    takeBack() {
        if (this.moves.length === 0) return false; // cannot undo
        this.board[this.moves.pop()] = 0;
        this.isWin = this.isDraw = false;
        return true;
    }
    minimax() {
        if (this.isWin) return { value: -10 };
        if (this.isDraw) return { value: 0 };
        let best = { value: -Infinity };
        for (let move of this.validMoves) {
            this.play(move);
            let {value} = this.minimax();
            this.takeBack();
            // Reduce magnitude of value (so shorter paths to wins are prioritised) and negate it
            value = value ? (Math.abs(value) - 1) * Math.sign(-value) : 0;
            if (value >= best.value) {
                if (value > best.value) best = { value, moves: [] };
                best.moves.push(move); // keep track of equally valued moves
            }
        }
        return best;
    }
    goodMove() {
        let {moves} = this.minimax();
        // Pick a random move when there are choices:
        return moves[Math.floor(Math.random() * moves.length)];
    }
}

var X = 0
var O = 0
var tie = 0

function score(){
 document.querySelector("#card").innerHTML=
   "  X: "+X+"<br> O: "+O+" <br> tie: "+tie+""
}
score()

function drops(){
  
  var option = document.createElement("option");
option.text = "player vs player";
option.value = "pvp";
var select = document.getElementById("gamev");
select.appendChild(option);

var option = document.createElement("option");
option.text = "player vs bot";
option.value = "pvb";
var select = document.getElementById("gamev");
select.appendChild(option);
  
var option = document.createElement("option");
option.text = "bot vs player";
option.value = "bvp";
var select = document.getElementById("gamev");
select.appendChild(option);

var option = document.createElement("option");
option.text = "bot vs bot";
option.value = "bvb";
var select = document.getElementById("gamev");
select.appendChild(option);
  
}
 drops()

function pvp() {
  // const play = document.querySelector("#gamev");
    const table = document.querySelector("#game");
    const btnNewGame = document.querySelector("#newgame");
    const messageArea = document.querySelector("#message");
    let game, human;

    function display() {
        game.board.forEach((cell, i) => table.rows[Math.floor(i / 3)].cells[i % 3].className = " XO"[cell]);
        messageArea.textContent = game.isWin ? (game.turn == human ? "CPU won" : "You won")
                                : game.isDraw ? "It's a draw"
                                : game.turn == human ? "Your turn" 
                                : "opponnets turn";
        table.className =  "";
    
       game.isWin ? (game.turn == human ? O++ : X++) :  game.isDraw ? tie++ : null
      score()
    }

    function computerMove(i) {
        if (game.isWin || game.isDraw) return; 
        human = 3 - game.turn;
        display();
            game.play(i);
            display();
        } // Artificial delay before computer move is calculated and played
    


    function humanMove(i) {
        if (game.turn !== human || !game.play(i)) return; // ignore click when not human turn, or when invalid move
        display();
        //computerMove();
    }

    function newGame() {
        game = new TicTacToe_load( Array(9).fill(0) ); //new TicTacToe();
        human = 1;
        display();
    }

    table.addEventListener("click", e => humanMove(e.target.cellIndex + 3 * e.target.parentNode.rowIndex));
      table.addEventListener("click", e => computerMove(e.target.cellIndex + 3 * e.target.parentNode.rowIndex));

    btnNewGame.addEventListener("click", pvp);
    
  
    newGame();
};

function pvb() {
  // const play = document.querySelector("#gamev");
    const table = document.querySelector("#game");
    const btnNewGame = document.querySelector("#newgame");
    const messageArea = document.querySelector("#message");
    let game, human;

    function display() {
        game.board.forEach((cell, i) => table.rows[Math.floor(i / 3)].cells[i % 3].className = " XO"[cell]);
        messageArea.textContent = game.isWin ? (game.turn == human ? "CPU won" : "You won")
                                : game.isDraw ? "It's a draw"
                                : game.turn == human ? "Your turn" 
                                : "CPU is preparing move...";
        table.className = game.isWin || game.isDraw || game.turn !== human ? "inactive" : "";
           game.isWin ? (game.turn == human ? O++ : X++) :  game.isDraw ? tie++ : null
      score()
    }

    function computerMove() {
        if (game.isWin || game.isDraw) return; 
        human = 3 - game.turn;
        display();
        setTimeout(() => {
            game.play(game.goodMove());
            display();
        }, 500); // Artificial delay before computer move is calculated and played
    }


    function humanMove(i) {
        if (game.turn !== human || !game.play(i)) return; // ignore click when not human turn, or when invalid move
        display();
        computerMove();
    }

    function newGame() {
        game = new TicTacToe_load( Array(9).fill(0) ); //new TicTacToe();
        human = 1;
        display();
    }

    table.addEventListener("click", e => humanMove(e.target.cellIndex + 3 * e.target.parentNode.rowIndex));
    btnNewGame.addEventListener("click", pvb);
    
  
    newGame();
};

function bvp() {
  // const play = document.querySelector("#gamev");
    const table = document.querySelector("#game");
    const btnNewGame = document.querySelector("#newgame");
    const messageArea = document.querySelector("#message");
    let game, human;

      function display() {
        game.board.forEach((cell, i) => table.rows[Math.floor(i / 3)].cells[i % 3].className = " XO"[cell]);
        messageArea.textContent = game.isWin ? (game.turn == human ? "CPU won" : "You won")
                                : game.isDraw ? "It's a draw"
                                : game.turn == human ? "Your turn" 
                                : "CPU is preparing move...";
        table.className = game.isWin || game.isDraw || game.turn !== human ? "inactive" : "";
              game.isWin ? (game.turn == human ? O++ : X++) :  game.isDraw ? tie++ : null
      score() 
    }

    function computerMove() {
        if (game.isWin || game.isDraw) return; 
        human = 3 - game.turn;
        display();
        setTimeout(() => {
            game.play(game.goodMove());
            display();
        }, 500); // Artificial delay before computer move is calculated and played
    }


    function humanMove(i) {
        if (game.turn !== human || !game.play(i)) return; // ignore click when not human turn, or when invalid move
        display();
        computerMove();
    }

    function newGame() {
        game = new TicTacToe_load(Array(9).fill(0) );//new TicTacToe();
        human = 1;
        display();
    }

    table.addEventListener("click", e => humanMove(e.target.cellIndex + 3 * e.target.parentNode.rowIndex));

    btnNewGame.addEventListener("click", bvp);
    
  
    newGame();
  computerMove()
};

function bvb() {
  // const play = document.querySelector("#gamev");
    const table = document.querySelector("#game");
    const btnNewGame = document.querySelector("#newgame");
    const messageArea = document.querySelector("#message");
    let game, human;

      function display() {
        game.board.forEach((cell, i) => table.rows[Math.floor(i / 3)].cells[i % 3].className = " XO"[cell]);
        messageArea.textContent = game.isWin ? (game.turn == human ? "CPU won" : "You won")
                                : game.isDraw ? "It's a draw"
                                : game.turn == human ? "Your turn" 
                                : "CPU is preparing move...";
        table.className = game.isWin || game.isDraw || game.turn !== human ? "inactive" : "";
          
    }

    function computerMove() {
        if (game.isWin || game.isDraw) return; 
        human = 3 - game.turn;
        display();
        setTimeout(() => {
            game.play(game.goodMove());
            display();
        }, 500); // Artificial delay before computer move is calculated and played
    }


    function humanMove(i) {
        if (game.turn !== human || !game.play(i)) return; // ignore click when not human turn, or when invalid move
        display();
        computerMove();
    }

    function newGame() {
        game = new TicTacToe_load( Array(9).fill(0) );//new TicTacToe();
        human = 1;
        display();
    }

    btnNewGame.addEventListener("click", bvb);
    
  
    newGame();
  
  for(i in Array(9).fill(0) ){
  computerMove()
  }
  
};


const play = document.querySelector("#gamev");

 document.querySelector("#type").textContent = `game: ${play.value}`;


pvp(  )

 play.addEventListener("change", function(e){
 eval(`${e.target.value}()`)
  document.querySelector("#type").textContent = `game: ${e.target.value}`;

 });


