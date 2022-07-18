
function getRoll(_sides){
    return Math.floor(Math.random() * _sides) + 1;
}

function roll(){
    document.getElementById("result").innerHTML = getRoll(6);
}