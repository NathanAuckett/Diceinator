
function getRoll(_sides){
    return Math.floor(Math.random() * _sides) + 1;
}

function roll(){
    document.getElementById("result").innerHTML = getRoll(6);
}

function addDice(){
    const diceDiv = document.createElement("div");
    diceDiv.className="col";
    diceDiv.innerHTML = `
        <div class="border border-5" style="width:16rem; height:16rem;">
            <h2>Dice 1</h2>
            <h5>Result:</h5>
            <h5 id="result">0</h5>
            <button onclick="roll()">Roll</button>
        </div><!--Dice div-->`;

    var diceContainer=document.getElementById("diceGrid");
    diceContainer.appendChild(diceDiv);
}

function rollAll(){

}