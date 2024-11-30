let board = ["","","","","","","","","",];
let playertime = 0;
let symbols = ['o', 'x'];
let gameOver = false;

let winstates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function handleMove(position) {

    if(gameOver) {
        return;
    }

    if (board[position] == "") {
        board[position] = symbols[playertime];

        gameOver = isWin();

        if (gameOver == false){
            playertime = (playertime == 0) ? 1 : 0;  
        }
    }

    return gameOver;
}

function isWin(){

    for (let i = 0; i < winstates.length; i++){
        let seq = winstates[i];

        let post1 = seq[0];
        let post2 = seq[1];
        let post3 = seq[2];

        if (board[post1] == board[post2] &&
            board[post1] == board[post3] &&
            board[post1] != ''){

                return true;
            }
    }
    return false;
}