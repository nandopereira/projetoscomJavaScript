var input = require('fs').readFileSync('stdin', 'utf8')
var valores = input.split('\n')

var avaliacao1 = parseFloat(valores.shift())
var avaliacao2 = parseFloat(valores.shift())
var avaliacaooptativa = parseFloat(valores.shift())

console.log(
  `Avaliação 1 = ${avaliacao1}\n Avaliação 2 = ${avaliacao2} \n Avaliação Optativa = ${avaliacaooptativa}`
)

if (avaliacaooptativa < avaliacao1 && avaliacao2) {
  var media = (avaliacao1 + avaliacao2) / 2
  console.log(`Média da Avaliação 1 e Avaliação 2: ${media.toFixed(1)}`)
} else if (avaliacao2 < avaliacao1 && avaliacaooptativa) {
  media = (avaliacao1 + avaliacaooptativa) / 2
  console.log(`Média da Avaliação 1 e Avaliação Optativa: ${media.toFixed(1)}`)
} else {
  media = (avaliacao2 + avaliacaooptativa) / 2
  console.log(`Média da Avaliação 2 e Avaliação Optativa: ${media.toFixed(1)}`)
}

if (media >= 6) {
  console.log('APROVADO!')
} else if (media < 3) {
  console.log('REPROVADO!')
} else {
  console.log('EXAME!')
}
