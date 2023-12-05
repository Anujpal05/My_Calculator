function appendValue(value) {
    let currentElement = document.getElementById("input").value;
    let newElement = currentElement + value;
    document.getElementById("input").value = newElement;
}

function clearInput() {
    document.getElementById("input").value = '';
}

function resultCalculate() {
    let element = document.getElementById("input").value;
    try {
        let result = eval(element);
        document.getElementById("input").value = result;
    }
    catch (error) {
        console.log("Error");
        document.getElementById("input").value = "Error";
    }
}

function deleteLeft() {
    let element = document.getElementById("input").value;
    let newElement = element.slice(0, element.length - 1);
    document.getElementById("input").value = newElement;
}

function percentage() {
    let element = document.getElementById("input").value;
    let newElement = element / 100;
    document.getElementById("input").value = newElement;
}