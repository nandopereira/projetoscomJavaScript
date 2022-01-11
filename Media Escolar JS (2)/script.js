const avaliacao = 4
const avaliacao2 = 8
let avaliacaoOptativa

function calcularMedia(nota1, nota2, notaOptativa) {
  if (notaOptativa == undefined) {
    notaOptativa = -1
    console.log(notaOptativa)
  }
  if (nota1 < notaOptativa) {
    nota1 = notaOptativa
  } else if (nota2 < notaOptativa) {
    nota2 = notaOptativa
  }
  const media = (nota1 + nota2) / 2
  return media
}
function escreverMedia(media) {
  if (media >= 6) {
    console.log(`Média ${media} = Aprovado`)
  } else if (media < 3) {
    console.log(`Média ${media} = Reprovado`)
  } else {
    console.log(`Média ${media} = Exame`)
  }
  return escreverMedia
}

const mediaAluno1 = calcularMedia(avaliacao, avaliacao2, avaliacaoOptativa)
escreverMedia(mediaAluno1)

//Aluno 2
const mediaAluno2 = calcularMedia(5, 2)
escreverMedia(mediaAluno2)

//Aluno 3
escreverMedia(calcularMedia(4, 1))
