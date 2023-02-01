// AT BOOT //
var txt = "I am Denzariu";
var txt2 = "I am Denis-Ștefan Pînzariu."
var txt_line2 = "You can check out some of my projects:"
var i = 0;
var j = 0;
var speed = 75;

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
    else 
        setTimeout(addSecondLineText, speed*4);
}

function addSecondLineText() {
    if (j < txt_line2.length) {
        document.getElementById("dynamicText2").innerHTML += txt_line2.charAt(j);
        j++;
        setTimeout(addSecondLineText, speed);
    }
}