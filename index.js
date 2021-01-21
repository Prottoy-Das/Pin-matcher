var hide = document.getElementById("hide");
hide.style.display = "none";


function generateBtn() {
    document.getElementById("text-area").value = Math.floor(Math.random() * 1000);
   
}

var input = $("#inpt")
function insertButton(number) {
    var excistingNumber = input.val();
    input.val(excistingNumber + number);
   

}

function clearBtn() {
    input.val("");
}

function deleteButton() {
    var presentValue = input.val()
    input.val(presentValue.slice(0, -1));
}



function submitBtn()
{
    var a = document.getElementById("text-area").value;
    var b = document.getElementById("inpt").value;

    if(a!=b)
    {
        var notOpen = document.getElementById("notMatch");
        notOpen.style.display = "block";
        
    }
    else
    {
        var open = document.getElementById("pinMatched");
        open.style.display = "block";
        
    }

}