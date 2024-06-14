let winning_pattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]];

let box_out = document.querySelectorAll(".box");
let current_player;
let turn;
let condition = true;
let selection;
let players_list=["X","O"];
while(condition){
    selection = (prompt("New Game \nSelect your representation (O or X) for the game player1")).toUpperCase();
    
    if(selection == "O"){
        current_player = "O";
        condition = false;
        turn=true;
    }
    else if(selection == "X"){
        current_player = "X";
        condition= false;
        turn=false;
    }
    else{
        alert("enter valid selection");
        condition=true;
    }
}

let score_O=0;
let score_X=0;

function check_win(){
    for (var1 of winning_pattern){
        if(box_out[var1[0]].innerText=="X" && box_out[var1[1]].innerText=="X" && box_out[var1[2]].innerText=="X"){
            alert("you won player_X reset to play again");
        }
        else if(box_out[var1[0]].innerText=="O" && box_out[var1[1]].innerText=="O" && box_out[var1[2]].innerText=="O"){
            alert("you won player_O reset to play again");
        }
        else{
            continue;
        }
        }
    }

box_out.forEach((boxes) => {
    boxes.addEventListener("click",()=>{
        if(turn){
            boxes.innerText="O";
            turn=false;
        }
        else{
            boxes.innerText="X";
            turn=true;
        }
        boxes.disabled=true;
        check_win();
    });
});

let players_outer = document.createElement("div");
let board_top = document.createElement("p");
let players = document.createElement("div");
let main_doc = document.querySelector("#outest_box_most");

players_outer.setAttribute("id","playersign");
main_doc.before(players_outer);

players.setAttribute("id","playersign2");
players_outer.append(players);

let list_players = document.createElement("ul");
list_players.setAttribute("id","list_player2");
players.appendChild(list_players);

board_top.setAttribute("id","boradtop");
board_top.innerHTML="Score Board";
list_players.append(board_top);

let list_child1 = document.createElement("li");
list_child1.innerHTML=`Player1 --> ${current_player}`;
list_players.append(list_child1);

let list_child2 = document.createElement("li");
let player12 = players_list.filter(var1=>{
    return var1 != current_player;
});
list_child2.innerHTML=`Player2 --> ${player12}`;
list_players.append(list_child2);

let new_btn = document.querySelector("#btnnew");
new_btn.addEventListener("click",()=>{
    location.reload();
});

function reset_board(){
    for(box_b of box_out){
        box_b.innerText="";
    }
}
let resetbtn = document.querySelector("#btnreset");
resetbtn.addEventListener("click",reset_board);