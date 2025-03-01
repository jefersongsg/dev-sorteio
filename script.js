function generateNumber() {

    const one = Math.ceil(document.querySelector(".primeiro-input").value)
    const two = Math.floor(document.querySelector(".segundo-input").value)

    const result = Math.floor(Math.random() * (two - one + 1)) + one;

    
    if(result < two && result > one){
        const resultadoInput = document.querySelector(".resultado");
        resultadoInput.value = result;
        resultadoInput.style.display = "block";
    }else{
        alert("insira um número válido");
    }
}



