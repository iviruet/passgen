//generates password 
function generate() {

    //password length/complexity
    let complexity = document.getElementById("selector").value;
    //possible password values    
    let values = "";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let nums = "1234567890";
    let special = "!@#$%^&*()_+";
    let password = "";

    let upperBoolean = confirm("Would you like uppercase characters?");
    let lowerBoolean = confirm("Would you like lowercase characters?");
    let numsBoolean = confirm("Would you like numbers characters?");
    let specialBoolean = confirm("Would you like special characters?");

    if (upperBoolean) {
        values += upper;
    }
    if (lowerBoolean) {
        values += lower;
    }
    if (numsBoolean) {
        values += nums;
    }
    if (specialBoolean) {
        values += special;
    }
    ///////////create 

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