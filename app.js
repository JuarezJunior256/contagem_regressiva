// criando variáveis para acessar a Dom
const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const nextYearContainer = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')

// variável com a data do próximo ano
const nextYear = new Date().getFullYear() + 1
// tempo final da contagem regressiva
const newYear = new Date(`January 01 ${nextYear} 00:00:00`)

// setando o proximo ano no Dom
nextYearContainer.textContent = nextYear
//variável para atualizar o relógi no Dom
const updateCountdown = () => {
    // pegando data atual
    const currentTime = new Date()
    // diferença da data final para data atual
    const difference = newYear - currentTime
    // convertendo milissegundos em dias, horas, minutos e segundos
    const days = Math.floor(difference / 1000 / 60 / 60/ 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60 
    
    // setando os dados no Dom 
    secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
    minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
    hoursContainer.textContent = hours < 10 ? '0' + hours : hours
    daysContainer.textContent = days < 10 ? '0' + days : days
}

// depois de um segundo a função irá remover o spinner e adicionar 
// o flex no container 
setTimeout(() => {
    spinnerLoading.remove()
    countdownContainer.style.display = 'flex' 
}, 1000)

// função irá atualizar a cada segundo a contagem na tela
setInterval(updateCountdown, 1000)