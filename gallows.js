var password = "Bez pracy nie ma kołaczy";

password = password.toUpperCase();

var length = password.length;

var password1 = "";

for(i=0; i<length; i++)
{
    if(password.charAt(i)==" ")password1 = password1 + " ";
    else password1 = password1 + "-";
}

function writePassword()
{
    document.getElementById("board").innerHTML = password1;
}
window.onload = writePassword;