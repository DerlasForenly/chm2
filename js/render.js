let result_div = document.getElementById('result_div')
let integral_field = document.getElementById('integral_field')
let equation_field = document.getElementById('equation_field')
let integral_radio = document.getElementById('integral_radio')
let equation_radio = document.getElementById('equation_radio')
let a = document.getElementById('a')
let b = document.getElementById('b')
let N = document.getElementById('N')
let method = document.getElementById('method')
let func = document.getElementById('function')

equation_field.style.display = "none";
integral_field.style.display = "none";

function deleteChilds(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

integral_radio.onchange = () => {
    integral_field.style.display = "flex";
    equation_field.style.display = "none";
}

equation_radio.onchange = () => {
    integral_field.style.display = "none";
    equation_field.style.display = "flex";
}

function render_result(value) {
    deleteChilds(result_div)

    let label = document.createElement('label')
    label.setAttribute('class', 'result_label')
    label.textContent = `Result: ${value}`

    result_div.appendChild(label);
}


