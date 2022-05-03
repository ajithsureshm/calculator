
function displayNumber(num) {
    let textbox = document.querySelector("#result")
    textbox.value += num
}

function clearBox() {
    result.value = ""
}

function evaluateExpress() {
    result.value = eval(result.value)
}

function delectKey() {
    result.value=result.value.slice(0,-1)
}