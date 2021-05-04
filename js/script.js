function f(x) {
    return Math.sin(x)
}

//result_label.textContent += riemann_sum_left(f, 0, 1, 10000)

calculate.onclick = () => {
    deleteChilds(result_div)

    let label = document.createElement('label')
    label.setAttribute('class', 'result_label')
    label.textContent = '?'

    result_div.appendChild(label);
}