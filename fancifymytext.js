function showAlert(){
    alert("Hello, world!");
}

function getBigger(){
    const textArea= document.getElementById("text");
    textArea.style.fontSize = "24pt";
}

function makeFancy(){
    const textArea = document.getElementById("text");
    textArea.style.fontWeight="bold";
    textArea.style.color="blue";
    textArea.style.textDecoration="underline";
}

function makeBoring(){
    const textArea = document.getElementById("text");
    textArea.style.fontWeight="normal";
    textArea.style.color="black";
    textArea.style.textDecoration="none";
}

window.onload = function(){
    document.getElementById("biggerButton").onclick = getBigger;
    document.getElementById("fancifyOn").onchange = makeFancy;
    document.getElementById("borifyOn").onchange = makeBoring;
}