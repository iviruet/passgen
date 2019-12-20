//generates password 
function generate() {

    //password length/complexity
    let complexity = document.getElementById("selector").value;
    //possible password values    
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    let password = "";

    let result = confirm("Would you like uppercase characters?");
    

    for (var i = 0; i <= complexity; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    document.getElementById("display").value = password;

    document.getElementById("lastPasswords").innerHTML += password + "<br />";

}
// default length display at 25
//document.getElementById("length").innerHTML = "Length: 25";

// length based on slider position
document.getElementById("selector").oninput = function () {

    if (document.getElementById("selector").value > 0) {
        document.getElementById("length").innerHTML = "Length:" + document.getElementById("slider").value;
    }
    else {
        document.getElementById("length").innerHTML = "Length: 1";
    }
}
//copy password to clipboard
function copyPassword() {
    document.getElementById("display").select();
    document.execCommand("Copy");

    alert("Password successfully copied to clipboard!");
}