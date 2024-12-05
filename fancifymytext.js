document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("biggerButton").addEventListener("click", makeBigger);
    document.getElementById("fancifyOn").addEventListener("click", makeFancy);
    document.getElementById("borifyOn").addEventListener("click", makeBoring);
    document.getElementById("mooButton").addEventListener("click", makeMoo);
});

function showAlert(){
    alert("Hello, world!");
}

function makeBigger(){
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
    textArea.style.fontWeight="initial";
    textArea.style.color="black";
    textArea.style.textDecoration="none";
}

function makeMoo(){
    const textArea = document.getElementById("text");
    let text= textArea.value.toUpperCase();
    
    let sentences = text;
    console.log(sentences);  
    let parts = sentences.split(".").join("-Moo.").split("!").join("-Moo!").split("?").join("-Moo?");

    textArea.value = parts;

    
}

