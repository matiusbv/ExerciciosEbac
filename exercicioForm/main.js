const form = document.getElementById('form-numbers')



form.addEventListener('submit', function(e){
    e.preventDefault();
    const number1 = document.getElementById('number1')
    const number2 = document.getElementById('number2')
    let calc1 = number1.value
    let calc2 = number2.value

    const mensagem = `😀Correto! O numero ${calc2} é maior que ${calc1}. ` 
    const mensagem2 = `😥Errado! O numero ${calc2} não é maior que ${calc1}. ` 
    const mensagem3 = `😥Errado! Os numeros ${calc2} e ${calc1} são iguais. `
    if(calc2 > calc1) {
        const containerMensagemMaior = document.querySelector('.mensagem')
        document.querySelector('.mensagem').style.color='white'
        document.querySelector('.mensagem').style.background='green'
        containerMensagemMaior.innerHTML = mensagem
        number1.value = ''
        number2. value = ''
        
    } else if(calc1 > calc2) {
        const containerMensagemMaior = document.querySelector('.mensagem')
        document.querySelector('.mensagem').style.color='white'
        document.querySelector('.mensagem').style.background='red'
        containerMensagemMaior.innerHTML = mensagem2
        number1.value = ''
        number2. value = ''
    } else {
        const containerMensagemMaior = document.querySelector('.mensagem')
        document.querySelector('.mensagem').style.color='red'
        document.querySelector('.mensagem').style.color='white'
        document.querySelector('.mensagem').style.background='red'
        containerMensagemMaior.innerHTML = mensagem3
        number1.value = ''
        number2. value = ''
    }

})