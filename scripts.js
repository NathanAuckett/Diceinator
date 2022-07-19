
let diceIDCount = 0; //Used to count dice ids and ensure they remain unique
const dice = ["dice-0"]; //Stores dice arrays
const maxSides = 9999;


function getRoll(_sides){
    return Math.floor(Math.random() * _sides) + 1;
}

function roll(_id){
    let diceCol = document.querySelector(`#${_id}`);
    let sides = diceCol.querySelector("#sidesDropdown").value;

    if (sides == "Custom"){ //Get custom value from custom value input?
        sides = diceCol.querySelector("#customSides").value;
    }

    let roll = getRoll(sides);
    diceCol.querySelector("#result").innerHTML = roll;
    return roll;
}

function addDice(){
    let diceID = `dice-${++diceIDCount}`;

    const diceDiv = document.createElement("div");
    diceDiv.className = "col";
    diceDiv.id = diceID;
    
    diceDiv.innerHTML = `
    <div id="dice-0" class="col">
        <div id="dice" align="center" class="border border-5" style="width:15rem; height:17.5rem; margin:1rem; position: relative;">
            <h2 id="diceTitle" style="display:inline;">D 6</h2>
            <button class="btn-close btn-close-white" style="margin:0.2rem; position:absolute; top:0; right:0;" onclick="removeDice('${diceID}')"></button><br>
            
            <label for="sidesDropdown">Sides:</label><br>
            
            <select id="sidesDropdown" onchange="dropDownChanged('${diceID}')">
                <option>2</option>
                <option>4</option>
                <option selected>6</option>
                <option>8</option>
                <option>10</option>
                <option>12</option>
                <option>20</option>
                <option>Custom</option>
            </select>
            <input id="customSides" onchange="customSidesChanged('${diceID}')" type="number" style="width:40%; display: none" value="50"></input>
            
            <h5>Result:</h5>
            <div align="center" class="justif border border-5 d-flex justify-content-center align-items-center" style="width:6.5rem; height:6.5rem;">
                <h5 id="result" style="font-size: 40px;">0</h5>
            </div>
            <button class="btn btn-light" style="margin: 0.2rem" onclick="roll('${diceID}')">Roll</button>
        </div><!--Dice div-->
    </div><!--Dice col-->
    `;

    var diceContainer = document.getElementById("diceGrid");
    diceContainer.appendChild(diceDiv);

    dice.push(diceID);
}

function rollAll(){
    let diceCount = dice.length;
    let total = 0;
    for (let i = 0; i < diceCount; i ++){
        total += roll(dice[i]);
    }
    document.getElementById("totalRoll").innerHTML = `Total: ${total}`;
}

function removeDice(_id){
    document.querySelector(`#${_id}`).remove();
    let index = dice.indexOf(_id); //Find index of this dice id in array
    dice.splice(index, 1); //Remove the dice id from the array
}

function dropDownChanged(_id){
    let diceCol = document.querySelector(`#${_id}`);
    let diceTitle = diceCol.querySelector("#diceTitle");
    let diceDropDown = diceCol.querySelector("#sidesDropdown");
    let diceCustomInput = diceCol.querySelector("#customSides");

    if (diceDropDown.value == "Custom"){
        diceTitle.innerHTML = `D ${diceCustomInput.value}`;
        diceCustomInput.style.display = "inline";
    }
    else{
        diceTitle.innerHTML = `D ${diceDropDown.value}`;
        diceCustomInput.style.display = "none";
    }
}

// Validate the sides selection
function customSidesChanged(_id){
    let diceCol = document.querySelector(`#${_id}`);
    let sides = diceCol.querySelector("#customSides").value;
    let diceTitle = diceCol.querySelector("#diceTitle");

    sides = Math.floor(sides);
    if (sides < 2){
        sides = 2;
    }
    else if (sides > maxSides){
        sides = maxSides;
    }
    diceCol.querySelector("#customSides").value = sides;
    diceTitle.innerHTML = `D ${sides}`;
}