

function OpenDropDown() 
    {
        var x = document.getElementById("demo");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else { 
            x.className = x.className.replace(" w3-show", "");
        }
    }

// ==================================== what we do page 
function Hide_Description_Divs ()
{
    document.getElementById("computer-description-div").style.display="none";
    document.getElementById("networking-description-div").style.display="none";
    document.getElementById("programming-description-div").style.display="block";

}

function display_programming_description_div ()
{
    document.getElementById("programming-description-div").style.display="block";
    document.getElementById("computer-description-div").style.display="none";
    document.getElementById("networking-description-div").style.display="none";
}


function display_computer_description_div ()
{
    document.getElementById("computer-description-div").style.display="block";
    document.getElementById("programming-description-div").style.display="none";
    document.getElementById("networking-description-div").style.display="none";
}

function display_networking_description_div ()
{
    
    document.getElementById("networking-description-div").style.display="block";
    document.getElementById("computer-description-div").style.display="none";
    document.getElementById("programming-description-div").style.display="none";
}


// ==================================== gallery page

function display_gallery_programming_div ()
{
    document.getElementById("gallery-imgs-programming-div").style.display="block";
    document.getElementById("gallery-imgs-exhibitions-div").style.display="none";
    document.getElementById("gallery-imgs-internship-div").style.display="none";
}

function display_gallery_exhibitions_div ()
{
    document.getElementById("gallery-imgs-exhibitions-div").style.display="block";
    document.getElementById("gallery-imgs-programming-div").style.display="none";
    document.getElementById("gallery-imgs-internship-div").style.display="none";
}

function display_gallery_internship_div ()
{
    document.getElementById("gallery-imgs-internship-div").style.display="block";
    document.getElementById("gallery-imgs-exhibitions-div").style.display="none";
    document.getElementById("gallery-imgs-programming-div").style.display="none";
}

// disabling key board keys .........................
// window.oncontextmenu = function () {return false;}

// $(document).keydown(function (event) 
// {
//     if (event.keyCode == 85) {return false;}
//     else if (event.keyCode == 73) {return false;} // i
//     else if (event.keyCode == 83) {return false;} // s

//     // else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
//     //     return false;
//     // }
// });


// while(noSuccess)
// {
//     henrytryAgain();

//     if (Dead)
//         break;
//         exit ();                     
// }




