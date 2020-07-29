// Hide First container and display first container
function hideFirstContainer() {
    document.getElementById("firstContainer").style.display = "none";
    document.getElementById("secondContainer").style.display = "block";
    return;
}

// Hide second container and display first container
function hideSecondContainer() {
    document.getElementById("secondContainer").style.display = "none";
    document.getElementById("firstContainer").style.display = "block";
    return;
}

//Hide when, radio is selected
function hideThis() {
    document.getElementById("hideThis").style.display = "none";
    return;
}

//Show when, radio is selected
function showThis() {
    document.getElementById("hideThis").style.display = "block";
    return;
}

// Verification
function fillThis() {
    var boxArea = document.getElementById("visitorName").value;
    
    if(boxArea === "") {
        document.getElementById("visitorName").innerHTML = "Please! fill in your details";
        /*document.getElementById("fill").style.border = "1px red";
        document.getElementById("fill").style.color = "red"; */
    } else {
        window.alert("DATABASE UPDATED SUCCESSFULLY!");
        
    }
}

// Hide
document.getElementById("secondContainer").style.display = "none";

document.getElementById("btnOnFoot").onclick = function() { hideSecondContainer(); };

document.getElementById("btnOnMobile").onclick = function() { hideFirstContainer(); };

document.getElementById("hideIt").onclick = function() { hideThis(); };

document.getElementById("showIt").onclick = function() { showThis(); };

document.getElementById("verify").ons = function() { fillThis(); };
