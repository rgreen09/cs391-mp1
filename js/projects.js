let one=document.getElementById("input-one"); //getElementById grabs the entire document (<><>) that has that id
let two=document.getElementById("input-two");
let output = document.getElementById("output");


function displayResult(num){
    if (num < 0){
        output.style.color = "red"
    }
    else{
        output.style.color = "black"
    }
    output.innerHTML = num;
}

function goAdd(){
    let res=parseInt(one.value) + parseInt(two.value);
    displayResult(res)
}

function goSubtract(){
    let res=parseInt(one.value) - parseInt(two.value);
    displayResult(res)
}

function goMultiply(){
    let res=parseInt(one.value) * parseInt(two.value);
    displayResult(res)
}

function goDivide(){
    let res=parseFloat(one.value)/parseFloat(two.value);
    displayResult(res)
}

function goPower(){
    let result = one.value;
    for (let i=1; i<two.value; i++){
        result *= one.value;
    }
    let res=result;
    displayResult(res)
}

function goClear(){
    one.value="";
    two.value="";
    output.innerHTML="";
}