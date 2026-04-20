var userName = prompt("Enter Your User Name");
var password = prompt("Enter Your Password");
if (userName === "admin" && password === "1234") {
    alert("Welcome Admin!");
}
else if (userName === "teacher" && password === "1111") {
    alert("Welcome Teacher!");
}
else if (userName === "student" && password === "2222") {
    alert("Welcome Student!");
}
else {
    alert("Invalid Credentials!");
}