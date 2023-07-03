var password = "Bez pracy nie ma kołaczy";

password = password.toUpperCase();//f wbudowana

var length = password.length;

var password1 = ""; //zakreskowanie hasła

for(i=0; i<length; i++)
{
    if(password.charAt(i)==" ")password1 = password1 + " ";
    else password1 = password1 + "-";
}

function writePassword() //f po wywołaniu będzie odświerzać hasło
{
    document.getElementById("board").innerHTML = password1;
}
window.onload = start;//f wywołuje się raz przyuruchamianiu strony

var letters = new Array(35);

letters[0]="A";
letters[1]="Ą";
letters[2]="B";
letters[3]="C";
letters[4]="Ć";
letters[5]="D";
letters[6]="E";
letters[7]="Ę";
letters[8]="F";
letters[9]="G";
letters[10]="H";
letters[11]="I";
letters[12]="J";
letters[13]="K";
letters[14]="L";
letters[15]="Ł";
letters[16]="M";
letters[17]="N";
letters[18]="Ń";
letters[19]="O";
letters[20]="Ó";
letters[21]="P";
letters[22]="Q";
letters[23]="R";
letters[24]="S";
letters[25]="Ś";
letters[26]="T";
letters[27]="U";
letters[28]="V";
letters[29]="W";
letters[30]="X";
letters[31]="Y";
letters[32]="Z";
letters[33]="Ż";
letters[34]="Ź";

function start()
{
    var contentDiv = "";//przechowuje litery

    for(i=0; i<=34; i++)
    {
        var element = "let" + i;//nadajemy każdej leterze id
        contentDiv = contentDiv + '<div class="letter" onclick="check('+i+')" id="'+element+'">'+ letters[i] +'</div>';
        if((i+1)% 7==0)contentDiv = contentDiv + '<div style="clear:both"></div>';//i+1 - liczymy od1,
    }
        document.getElementById("alphabet").innerHTML=contentDiv;

        writePassword(); //po wystartowaniu i podmianie html wypisane zostaje hasło , wywołujemy f writtePassword
}

String.prototype.setMark = function(place, mark)//do klasy String dodajemy metodę prototype/ ten cały zapis pozwoli nam użyć notacji z . np. inscription.setMark(0, "B")
{
    if(place > this.length - 1) return this.toString(); //nasze miejsce jest poza łańcuchem, zwróć łańcuch - metoda toString
    else return this.substr(0, place) + mark + this.substr(place+1);//
}

function check(nr)
{
    for(i=0; i<length; i++)
    {
        if(password.charAt(i) == letters[nr])
        {
            password1 = password1.setMark(i, letters[nr]);
        }

        writePassword();                                                //chcemy zamienić myślnik na znalezioną na i-tej pozycji literę(w zmiennej password1)
    }
}