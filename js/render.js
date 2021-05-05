let result_div_integral = document.getElementById('result_div_integral')
let result_div_equation = document.getElementById('result_div_equation')
let integral_field = document.getElementById('integral_field')
let equation_field = document.getElementById('equation_field')
let integral_radio = document.getElementById('integral_radio')
let equation_radio = document.getElementById('equation_radio')
let a_integral = document.getElementById('a_integral')
let b_integral = document.getElementById('b_integral')
let N_integral = document.getElementById('N_integral')
let a_equation = document.getElementById('a_equation')
let b_equation = document.getElementById('b_equation')
let N_equation = document.getElementById('N_equation')
let y0_equation = document.getElementById('y0_equation')
let method_integral = document.getElementById('method_integral')
let func_integral = document.getElementById('function_integral')
let method_equation = document.getElementById('method_equation')
let equation = document.getElementById('equation')

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

function render_result_integral(value) {
    deleteChilds(result_div_integral)

    let label = document.createElement('label')
    label.setAttribute('class', 'result_label')
    label.textContent = `f(x) = ${value}`

    result_div_integral.appendChild(label);
}

function render_result_equation(value) {
    deleteChilds(result_div_equation)

    for (let i = 0; i < value.length; i++) {
        let label = document.createElement('label')
        label.setAttribute('class', 'result_label')
        label.textContent = `y${i + 1}: ${value[i]}`
        result_div_equation.appendChild(label);
    }
    
}
