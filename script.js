// Existem dois candidatos a uma vaga de presidente de clube, Firmino e Eugênia. Feita a eleição, os votos são
//  enviados por um dispositivo de entrada, sendo cada entrada o voto de um eleitor. 
// Cada voto foi codificado da seguinte forma: 
// 1 representa voto em Firmino, 
// 2 em Eugênia, o voto O indica branco e 9 é voto nulo. Deseja-se saber por um algoritmo:
// a) o nome do candidato vencedor;
// b) o número de votos em branco;
// c) o número de votos nulos;
// d) a quantidade de eleitores que votaram.


const presidentResult = document.querySelector('.presidentResult');
const whiteVotes = document.querySelector('.whiteVotes');
const nullVotes = document.querySelector('.nullVotes');
const allVotes = document.querySelector('.allVotes');
const btnFirmino = document.querySelector('.btnFirmino');
const btnEugenia = document.querySelector('.btnEugenia');
const btnWhite = document.querySelector('.btnWhite');
const btnNull = document.querySelector('.btnNull');
const resultsBox = document.querySelector('.resultsBox');
const showResultsBtn = document.querySelector('.showResultsBtn');
let sum = 0;
let whiteTotal = 0;
let nullTotal = 0;
let firminoTotal = 0;
let eugeniaTotal = 0;

btnFirmino.addEventListener('click', printClick)
btnEugenia.addEventListener('click', printClick)
btnWhite.addEventListener('click', printClick)
btnNull.addEventListener('click', printClick)

function printClick() {
  sum++

  if (eugeniaTotal > firminoTotal) {
    presidentResult.innerHTML = `O(a) vencedor(a) é Eugênia!`
  } else if (eugeniaTotal < firminoTotal) {
    presidentResult.innerHTML = `O(a) vencedor(a) é Firmino!`
  } else {
    presidentResult.innerHTML = `Nenhum candidato foi votado.`
  }
  allVotes.innerHTML = `O número total de votos foi: ${sum}`
  whiteVotes.innerHTML = `O número de votos em branco foi: ${whiteTotal}`
  nullVotes.innerHTML = `O número de votos nulo foi: ${nullTotal}`
}

function showResults() {
  btnWhite.disabled = true
  btnNull.disabled = true
  btnFirmino.disabled = true
  btnEugenia.disabled = true
}

showResultsBtn.addEventListener("click", function () {
  showResults()
  return resultsBox.style.display = "block"
});


btnWhite.addEventListener('click', function () {
  whiteTotal++
})

btnNull.addEventListener('click', function () {
  nullTotal++
})

btnFirmino.addEventListener('click', function () {
  firminoTotal++
})

btnEugenia.addEventListener('click', function () {
  eugeniaTotal++
})
