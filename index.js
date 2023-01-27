// AT BOOT //
var txt = " I am Denzariu";
var txt2 = " I am Denis-Stefan Pinzariu, you can see some of what I can do here:"
var i = 0;
var speed = 125;

setTimeout(addThenDeleteText, 2400);

function addThenDeleteText() {
    document.getElementById("dynamicText").className += " line-1 anim-typewriter";
    
    addText();
}

function addText() {
    if (i < txt.length) {
        document.getElementById("dynamicText").innerHTML += txt.charAt(i);
        i++;
        setTimeout(addText, speed);
    }
    else {
        setTimeout(deleteText, speed * 4);
    }
}

function deleteText() {
    if (i > 8) {
        document.getElementById("dynamicText").innerHTML = document.getElementById("dynamicText").innerHTML.slice(0, -1);
        i--;
        setTimeout(deleteText, speed);
    }
    else {
        setTimeout(addNewText, speed);
    }
}

function addNewText() {
    if (i < txt2.length) {
        document.getElementById("dynamicText").innerHTML += txt2.charAt(i);
        i++;
        setTimeout(addNewText, speed);
    }
}
