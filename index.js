document.getElementById("button1").onclick = function(){
    weight = document.getElementById("number1").value;
    document.getElementById("label1").innerHTML = "Weight: " + weight + " lbs";
}

document.getElementById("button2").onclick = function(){
    heightin = document.getElementById("number2").value;
    document.getElementById("label2").innerHTML = "Height: " + heightin + " in";
}

document.getElementById("button3").onclick = function(){
    bmi = (weight * 703)/(heightin * heightin);
    bmirounded = Math.round(bmi * 10) / 10;
    document.getElementById("label3").innerHTML = "BMI: " + bmirounded;
}