function contar(){
    var inicio = window.document.getElementById('txtini')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpas')
    var res = window.document.querySelector('div#res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.lenght == 0){
        res.innerHTML = 'Faltam dados!'
    }else{
        res.innerHTML = 'Contando<br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p<=0){
            window.alert('[ERRO]Passo inválido, considerando passo 1.')
            p = 1
        }
        if(i > f){
            //Contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c}&#x1F449`
            }
        }else{
            for(let c = i; c <= f; c+=p){
                res.innerHTML+= `${c}&#x1F449` 
            }
        }
    }res.innerHTML += '&#x1F3C1'
}