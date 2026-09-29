function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero= ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'h_crianca.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'h_jovem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'h_adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'h_idoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
             if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'm_crianca.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'm_jovem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'm_adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'm_idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}