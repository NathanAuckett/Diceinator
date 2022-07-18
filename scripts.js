
let diceIDCount = 0; //Used to count dice ids and ensure they remain unique
let dice = ["dice-0"]; //Stores dice arrays

function getRoll(_sides){
    return Math.floor(Math.random() * _sides) + 1;
}

function roll(_id){
    let diceCol = document.querySelector(`#${_id}`);
    let diceDiv = diceCol.querySelector("#dice");
    diceDiv.querySelector("#result").innerHTML = getRoll(6);
}

function addDice(){
    let diceID = `dice-${++diceIDCount}`;

    const diceDiv = document.createElement("div");
    diceDiv.className = "col";
    diceDiv.id = diceID;
    
    diceDiv.innerHTML = `
        <div id="dice" class="border border-5" style="width:16rem; height:16rem;">
            <h2>Dice 1</h2>
            <h5>Result:</h5>
            <h5 id="result">0</h5>
            <button onclick="roll('${diceID}')">Roll</button>
            <button onclick="removeDice('${diceID}')">Remove</button>
        </div><!--Dice div-->`;

    var diceContainer = document.getElementById("diceGrid");
    diceContainer.appendChild(diceDiv);

    dice.push(diceID);
}

function rollAll(){
    let diceCount = dice.length;
    for (let i = 0; i < diceCount; i ++){
        roll(dice[i]);
    }
}

function removeDice(_id){
    document.querySelector(`#${_id}`).remove();
    let index = dice.indexOf(_id); //Find index of this dice id in array
    dice.splice(index, 1); //Remove the dice id from the array
}