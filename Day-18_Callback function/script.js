function redPillCallback() {
    document.getElementById("pill-choice").style.display = "none";
    document.getElementById("real-world").style.display = "block";
    document.getElementById('body').style.backgroundImage = "url('city.jpg')";
}

function bluePillCallback() {
    document.getElementById("pill-choice").style.display = "none";
    document.getElementById("matrix").style.display = "block";
    document.getElementById('body').style.backgroundImage = "url('25336.jpg')";
}

var redPillButton = document.getElementById("red-pill");
    redPillButton.addEventListener("click", redPillCallback);


var bluePillButton = document.getElementById("blue-pill");
bluePillButton.addEventListener("click", bluePillCallback);