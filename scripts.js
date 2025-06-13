// COTAÇÃO DE MOEDAS
const USD = 5.54
const EUR = 6.42
const GBP = 7.54

// OBTENDO OS ELEMENTOS DO FORMULÁRIO
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const decription = document.getElementById("description")

// MANIPULANDO O INPUT AMOUNT PARA RECEBER SOMENTE NÚMEROS
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

// CAPTURANDO O EVENTO DE SUBMIT (ENVIAR) DO FORMULÁRIO
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break

        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break

        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

// FUNÇÃO PARA CONVERTER A MOEDA
function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = ${price}`

        footer.classList.add("show-result")

    }catch (error){
        console.log(error)
        footer.classList.remove("show-result")
        alert("NÃO FOI POSSÍVEL CONVERTER, TENTE NOVAMENTE MAIS TARDE.")     
    }
    
}