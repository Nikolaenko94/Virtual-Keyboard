
//create needed elements for keyboard into index.html
let createDiv = document.createElement("div");
createDiv.id = "keyboard";
let createInput = document.createElement("input");
document.body.appendChild(createDiv);
createInput.id = "inputKeyboard";
createInput.type = "text";
createInput.setAttribute("rows", 6);
createInput.setAttribute("cols", 60);
document.body.appendChild(createInput);
console.log(document.cookie);

// create array with keyCode for keyboard & NaN for special Symbols;
const keyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45,
     61, NaN, NaN, 113, 119, 101, 114, 116, 121, 117, 105, 111, 
     112, 91, 93, 92, NaN, 97, 115, 100, 102, 103, 104, 106, 107, 
     108, 59, 39, 13, NaN, 122, 120, 99, 118, 98, 110, 109, 44, 46, 
     47, NaN, NaN, NaN, NaN, 32, NaN, NaN, NaN, NaN, NaN];

// for adding in keyboard-array name;
// document.onkeypress = function(event){
//console.log(event);
//         keyboard.push(event.charCode);
//         console.log(keyboard);
// }

//CREATE KEYBOARD!!!!!!!!!!
function init() {
    let out = "";
    for (let i = 0; i < keyboard.length; i++) {
        if (i === 14 || i === 28 || i === 41 || i === 54 || i === 62) {
            out += "<div class='clearfix'></div>";
        }
        if (i === 13) {

            out += "<div class='keys backspace' >Backspace</div>";
            continue;
        }
        if (i === 14) {

            out += "<div class='keys tab' >Tab</div>";
            continue;
        }
        if (i === 28) {

            out += "<div class='keys caps' >CapsLk</div>";
            continue;
        }
        if (i === 40) {

            out += "<div class='keys enter' data='" + keyboard[i] + "' >Enter</div>";
            continue;
        }
        if (i === 41) {
            out += "<div class='keys shift shiftLeft' >Shift</div>";
            continue;
        }
        if (i === 52) {
            out += "<div class='keys arrowUp' >arrow<br>Up</div>";
            continue;
        }
        if (i === 53) {
            out += "<div class='keys shift shiftRight' >Shift</div>";
            continue;
        }
        if (i === 54) {
            out += "<div class='keys ctrl ctrlLeft' >Ctrl</div>";
            continue;
        }
        if (i === 55) {
            out += "<div class='keys alt altLeft' >Alt</div>";
            continue;
        }
        if (i === 56) {
            out += "<div class='keys space' data='" + keyboard[i] + "' >Space</div>";
            continue;
        }
        if (i === 57) {
            out += "<div class='keys alt altRight' >Alt</div>";
            continue;
        }
        if (i === 58) {
            out += "<div class='keys ctrl ctrlRight' >Ctrl</div>";
            continue;
        }
        if (i === 59) {
            out += "<div class='keys arrowLeft' >arrow<br>Left</div>";
            continue;
        }
        if (i === 60) {
            out += "<div class='keys arrowDown' >arrow<br>Down</div>";
            continue;
        }
        if (i === 61) {
            out += "<div class='keys arrowRight' >arrow<br>Right</div>";
            continue;
        }
        out += "<div class='keys' data='" + keyboard[i] + "'>" + String.fromCharCode(keyboard[i]) + "</div>";
    }
    document.querySelector("#keyboard").innerHTML = out;

}
init();

//CREATE ACTIVE CLASS FOR ALL BUTTONS (control with keyboard)
document.onkeypress = function (event) {

    document.querySelectorAll("#keyboard .keys").forEach(function (element) {
        element.classList.remove("active");

    });
    document.querySelector("#keyboard .keys[data='" + event.keyCode + "']").classList.add("active");


};


//Onclick function. CREATE ACTIVE CLASS FOR ALL BUTTONS. And also 
//this function search  classNames special buttons and describes them
document.querySelectorAll("#keyboard .keys").forEach(function (element) {

    element.onclick = function (event) {

        if (event.target.className === "keys shift shiftLeft" ||
            event.target.className === "keys shift shiftRight" ||
            event.target.className === "keys alt altRight" ||
            event.target.className === "keys alt altLeft" ||
            event.target.className === "keys tab" ||
            event.target.className === "keys caps" ||
            event.target.className === "keys ctrl ctrlLeft" ||
            event.target.className === "keys ctrl ctrlRight" ||
            event.target.className === "keys enter" ||
            event.target.className === "keys arrowLeft" ||
            event.target.className === "keys arrowRight" ||
            event.target.className === "keys arrowUp" ||
            event.target.className === "keys arrowDown" ||
            event.target.className === "keys backspace") {
            document.querySelector("#inputKeyboard").value += "";
            this.classList.add("active");
            return;
        }
        if (event.target.className === "keys space") {
            document.querySelector("#inputKeyboard").value += " ";
            this.classList.add("active");
            return;
        }

        document.querySelector("#inputKeyboard").value += event.target.innerText;
        document.querySelectorAll("#keyboard .keys").forEach(function (element) {
            element.classList.remove("active");
        });
        this.classList.add("active");

    };
});
// for keydown- CREATE ACTIVE CLASS for Special BUTTONS

document.onkeydown = function (event) {

    if (event.keyCode === 16) {
        document.querySelector("#keyboard .shiftLeft").classList.add("active");
        document.querySelector("#keyboard .shiftRight").classList.add("active");
    }
    if (event.keyCode === 9) {
        document.querySelector("#keyboard .tab").classList.add("active");
    }
    if (event.keyCode === 18) {
        document.querySelector("#keyboard .altLeft").classList.add("active");
        document.querySelector("#keyboard .altRight").classList.add("active");
    }
    if (event.keyCode === 17) {
        document.querySelector("#keyboard .ctrlLeft").classList.add("active");
        document.querySelector("#keyboard .ctrlRight").classList.add("active");
    }
    if (event.keyCode === 20) {
        document.querySelector("#keyboard .caps").classList.add("active");
    }

    if (event.keyCode === 8) {
        document.querySelector("#keyboard .backspace").classList.add("active");
    }
    if (event.keyCode === 38) {
        document.querySelector("#keyboard .arrowUp").classList.add("active");
    }
    if (event.keyCode === 37) {
        document.querySelector("#keyboard .arrowLeft").classList.add("active");
    }
    if (event.keyCode === 39) {
        document.querySelector("#keyboard .arrowRight").classList.add("active");
    }
    if (event.keyCode === 40) {
        document.querySelector("#keyboard .arrowDown").classList.add("active");
    }

};



