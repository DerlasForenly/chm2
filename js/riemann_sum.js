function riemann_sum_left(f, a, b, N) {
    a = parseFloat(a)
    b = parseFloat(b)
    N = parseFloat(N)
    console.log("riemann sum left starts")
    let I = 0
    let h = parseFloat((b - a) / N)

    for (let i = a; i < b; i += h) {
        console.log(typeof a, typeof b, typeof i)
        I += f(i)
    }

    return I * h
}

function riemann_sum_right(f, a, b, N) {
    a = parseFloat(a)
    b = parseFloat(b)
    N = parseFloat(N)
    let I = 0
    let h = parseFloat((b - a) / N)

    for (let i = a + h; i <= b; i += h) {
        console.log(i)
        I += f(i)
    }

    return I * h
}

function riemann_sum_middle(f, a, b, N) {
    a = parseFloat(a)
    b = parseFloat(b)
    N = parseFloat(N)
    let I = 0
    let h = parseFloat((b - a) / N)

    for (let i = 0; i < N; i++) {
        console.log("iterations...")
        I += f(a + h * (i + 0.5))
    }

    return I * h
}
