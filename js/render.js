let result_div = document.getElementById('result_div')

function deleteChilds(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}
