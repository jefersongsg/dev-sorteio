function generateNumber() {

    const one = Math.ceil(document.querySelector(".primeiro-input").value)
    const two = Math.floor(document.querySelector(".segundo-input").value)

    const result = Math.floor(Math.random() * (two - one + 1)) + one;

    alert(result)
}



