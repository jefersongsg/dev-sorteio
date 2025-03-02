function generateNumber() {

    const min = Math.ceil(document.querySelector(".primeiro-input").value)
    const max = Math.floor(document.querySelector(".segundo-input").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    
    if(result <= max && result > min){
        const resultadoInput = document.querySelector(".resultado");
        resultadoInput.value = result;
        resultadoInput.style.display = "block";
    }else{
        alert("insira um número válido");
    }
}



