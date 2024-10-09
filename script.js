const displayMain = document.getElementById("display");

function numberDisplay(input) {
    displayMain.value +=input;
}

function reset() {
    displayMain.value="";
}

function calculate() {
    try {
        displayMain.value=eval(displayMain.value).toFixed(2);
    }

    catch(error) {
        displayMain.value='error';
    }
}

function clearBtn() {
    displayMain.value = displayMain.value.toString().slice(0,-1);
}


const mainContainer = document.getElementById("label");

mainContainer.onclick = function () {
    document.body.classList.toggle("white--theme");
}

