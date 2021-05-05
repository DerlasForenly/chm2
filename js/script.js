function f1(x) {
    return Math.exp(-x)
}

function f2(x) {
    return Math.sin(x)
}

function f3(x) {
    return Math.exp(-3*x + x**2)
}

function f4(x) {
    return Math.exp(-4*x - x**3)
}


calculate.onclick = () => {
    let selected_method
    let selected_function

    

    console.log(a.value, b.value, N.value)
    console.log(method.value)
    console.log(func.value)

    switch (func.value) {
        case "f(x)=exp(-x)":
            selected_function = f1
            break;
        case "f(x)=sin(x)":
            selected_function = f2
            break;
        case "f(x)=exp(-3x + x^2)":
            selected_function = f3
            break;
        case "f(x)=exp(-4x - x^3)":
            selected_function = f4
            break;
        default:
            break;
    }

    switch (method.value) {
        case "Riemann sum (left)":
            selected_method = riemann_sum_left
            break;
        case "Riemann sum (right)":
            selected_method = riemann_sum_right
            break;
        case "Riemann sum (middle)":
            selected_method = riemann_sum_middle
            break;
        case "Trapezoidal rule":
            selected_method = trapezoidal_rule
            break;
        case "Simpson's rule":
            selected_method = simpsons_rule
            break;
        default:
            break;
    }

    let result = selected_method(selected_function, a.value, b.value, N.value)

    render_result(result)
}
