
document.getElementById("one").onclick = function(){
    alert("Alert Name")
    document.getElementById("firstdiv").innerText = "Alert Name"
    document.getElementById("seconddiv").innerText = ""
    document.getElementById("lastpoint").style.display = ""
    document.getElementById("camellast").style.display = ""
}
document.getElementById("two").onclick = function(){
    alert("Alert Number")
    document.getElementById("firstdiv").innerText = "Alert Number"
    document.getElementById("seconddiv").innerText = ""
    document.getElementById("lastpoint").style.display = ""
    document.getElementById("camellast").style.display = ""
}
document.getElementById("five").onclick = function(){
    document.getElementById("firstdiv").innerText = "10 + 10"
    document.getElementById("seconddiv").innerText = "20"
    document.getElementById("lastpoint").style.display = ""
    document.getElementById("camellast").style.display = ""
}
document.getElementById("six").onclick = function(){
    document.getElementById("firstdiv").innerText = "20 - 10"
    document.getElementById("seconddiv").innerText = "10"
    document.getElementById("lastpoint").style.display = ""
    document.getElementById("camellast").style.display = ""
}
document.getElementById("seven").onclick = function(){
    document.getElementById("firstdiv").innerText = "10 * 10"
    document.getElementById("seconddiv").innerText = "100"
    document.getElementById("lastpoint").style.display = ""
    document.getElementById("camellast").style.display = ""
}
document.getElementById("eight").onclick = function(){
    document.getElementById("firstdiv").innerText = "100 / 10"
    document.getElementById("seconddiv").innerText = "10"
    document.getElementById("lastpoint").style.display = ""
    document.getElementById("camellast").style.display = ""
}
document.getElementById("nine").onclick = function(){
    document.getElementById("firstdiv").innerText = "36/6*3+2**4-(3+5)"
    document.getElementById("seconddiv").innerText = "26"
    document.getElementById("lastpoint").style.display = ""
    document.getElementById("camellast").style.display = ""
}
document.getElementById("clearstatement").onclick = function(){
    document.getElementById("firstdiv").innerText = ""
}


// Output Result

document.getElementById("clearoutput").onclick = function(){
    document.getElementById("seconddiv").innerText = ""
}

// Hide/Show Points
document.getElementById("three").onclick = function(){
    document.getElementById("lastpoint").style.display = "block"
    document.getElementById("camellast").style.display = ""
}

document.getElementById("four").onclick = function(){
    document.getElementById("camellast").style.display = "block"
    document.getElementById("lastpoint").style.display = ""
}