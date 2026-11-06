function update() {
    document.getElementById("i1").innerHTML = "Hala Madrid!!";
}

function reset() {
    document.getElementById("i1").innerHTML = "Hello World";
}

document.getElementById("i1").addEventListener("mouseover", function() {
    document.getElementById("i1").innerHTML = "Hala Madrid!!";
    document.getElementById("i1").style.color = "tomato";
})

document.getElementById("i1").addEventListener("mouseout", function() {
    document.getElementById("i1").innerHTML = "Hello World";
    document.getElementById("i1").style.color = "black";
})