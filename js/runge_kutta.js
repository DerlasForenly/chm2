function Runge_Kutta2(f, a, b, y0, N) {
    function RK2(f, x, x0, y0, N) {
        let h = ((x - x0) / N)

        let xi = x0
        let yi = y0

        for (let i = 0; i < N; i++) {
            let k1 = f(xi, yi)
            let k2 = f(xi + h / 2, yi + h * k1 / 2)
    
            yi += h * (k1 + 2 * k2) / 6
            xi += h
        }
      
        return yi;
    }

    let y = []
    let h = (b - a) / N

    for (let k = a + h; k <= b; k += h) {
        y.push(RK2(f, k, a, y0, N))
    }

    return y
}


function Runge_Kutta3(f, a, b, y0, N) {
    return [0]
}

function Runge_Kutta4(f, a, b, y0, N) {
    return [0]
}
