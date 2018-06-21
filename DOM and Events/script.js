//attribute to locate current data cell
var col = 1;
var row = 1;

function buildTable(){
    //create <table> element
    var newTable = document.createElement("table");
    // create <tbody> element
    var newTableBody = document.createElement("tbody");
    for(var i=0; i<4; i++){
        //create table row
        var tr = document.createElement("tr");
        //create cells of the table and contents
        for(var j=0; j<4; j++){
                if(i===0){
                    //create header cells of the table
                    var headerCell = document.createElement("th");
                    var headerCellText = document.createTextNode("Header " + (j+1));
                    headerCell.appendChild(headerCellText);
                    tr.appendChild(headerCell);
                }
                else{
                    //create data cells of the table
                    var label = (j+1)+ ", " + i;
                    var td = document.createElement("td");
                    var cellText = document.createTextNode(label);
                    td.appendChild(cellText);
                    td.setAttribute("id", label);
                    tr.appendChild(td);
                }
        }
        //append row to the table body
        newTableBody.appendChild(tr);
    }
    //append <tbody> to <table>
    newTable.appendChild(newTableBody);
    //append <table> to <body>
    document.body.appendChild(newTable);
    newTable.setAttribute("border", "1px");
}

//build "Up", "Down", "Left", "Right" and "Mark Cell" five buttons and set their id
function buildButton(){
    var buttonLabels = ["Up", "Down", "Left", "Right", "Mark Cell"];
    for (var i=0; i<buttonLabels.length; i++){
        var newButton = document.createElement("button");
        newButton.setAttribute("id", buttonLabels[i]);
        newButton.textContent = buttonLabels[i];
        document.body.appendChild(newButton);
    }
}

buildTable();
buildButton();

//get id of data cells to locate current position
var cur = document.getElementById("1, 1");
cur.style.border = "3px black solid";

//when user clicks different buttons, move current position to different directions
function move(dir){
    cur = document.getElementById(col + ", " + row);
    cur.style.border = "1px black solid";
    if(dir === "Up" && row > 1){
        row--;
    }
    else if(dir === "Down" && row < 3){
        row++;
    }
    else if(dir === "Left" && col > 1){
        col--;
    }
    else if(dir === "Right" && col < 4){
        col++;
    }
    cur = document.getElementById(col + ", " + row);
    cur.style.border = "3px black solid";
}

//change the selected cell background color to red
function markCell(){
    cur.style.backgroundColor = "yellow";
}

//add functionality to five buttons
document.getElementById("Up").addEventListener("click", function(){ return move("Up");});
document.getElementById("Down").addEventListener("click", function(){ return move("Down");});
document.getElementById("Left").addEventListener("click", function(){ return move("Left");});
document.getElementById("Right").addEventListener("click", function(){ return move("Right");});
document.getElementById("Mark Cell").addEventListener("click", markCell);
