function results(){
var name = document.getElementById('fname').value;
var lname = document.getElementById('lname').value;
var email=document.getElementById('email').value;
var addr=document.getElementById('addr').value;
var mob=document.getElementById('Phone').value;
var qualification=document.getElementById('qal').value;
var skill=document.getElementById('skill').value;
var fathername = document.getElementById('Fathname').value;
var mothername = document.getElementById('Mname').value;
let languages = "";
if(document.querySelector('input[name="lang1"]:checked'))
{
  languages += document.querySelector('input[name="lang1"]:checked').value;
}
if(document.querySelector('input[name="lang2"]:checked')){
  languages += ", " + document.querySelector('input[name="lang2"]:checked').value;
}
if(document.querySelector('input[name="lang3"]:checked')){
  languages += ", " + document.querySelector('input[name="lang3"]:checked').value;
}
var gender = document.querySelector('input[name="gender"]:checked').value;
var MaritalStatus = document.querySelector('input[name="maritalstatus"]:checked').value;
var  Nationality = document.querySelector('input[name="national"]:checked').value;
var dob = document.getElementById('dob').value;
var date = document.getElementById('date').value;
var place = document.getElementById('place').value;


document.write(`<h1 align="center">Your Resume</h1>`);
document.write(`<h4 class="well">FirstName: name</h4>`);
document.write("<h4>LastName:" + lname + "</h4>");
document.write("<h4>Email:" + email + "</h4>");
document.write("<h4>Address:" + addr + "</h4>" );
document.write("<h4>Mobile No:" + mob + "</h4>");
document.write("<h3>Academic Qualification:" + qualification + "</h3>");
document.write("<h3>Computer Skills:" +skill + "</h3><br/>");
document.write("<h3>personal profile:</h3>");
document.write("<h4>FatherName:" + fathername + "</h4>");
document.write("<h4>MotherName:"+ mothername + "</h4>");
document.write("<h4>Language known:"+ languages+ "</h4>");
document.write("<h4>gender:"+ gender + "</h4>");
document.write("<h4>Marital Status:"+ MaritalStatus + "</h4>");
document.write("<h4>Nationality:"+Nationality+ "</h4>");
document.write("<h4>Date of Birth:" + dob + "</h4>");
document.write("<h4>Date:" + date + "</h4>");
document.write("<h4>Place:" + place+ "</h4>");

}
