function verificar() {
  let data = new Date()
  let anoAtual = data.getFullYear()
  let anoNascimento = document.getElementById(`anoNascimento`).value
  let idadeHtml = document.getElementById(`idade`)
  let sexo = document.getElementsByName(`sexo`)
  //let resultado = document.querySelector(`resultado`)

  if (anoNascimento == 0 || anoNascimento > anoAtual) {
    window.alert(`O ano informado é maior do que o ano atual`)
  } else {
    let idade = anoAtual - anoNascimento
    let genero = ``
    let img = document.querySelector(`img`)
    img.setAttribute(`id`, `imagem`)

    function textoIdade() {
      idadeHtml.innerHTML = `Esta é uma pessoa do sexo ${genero} com ${idade} anos de idade.`
    }

    if (sexo[0].checked) {
      genero = `Masculino`
      if (idade == 0 || idade < 2) {
        textoIdade()
        img.setAttribute(`src`, `./Assets/Bebe.jpg`)
      }
      if (idade > 2 && idade <= 10) {
        textoIdade()
        img.setAttribute(`src`, `./Assets/crianca_menino.jpg`)
      }
      if (idade > 10) {
        textoIdade()
        img.setAttribute(`src`, `./Assets/adolecente_menino.jpg`)
      }
      if (idade > 18) {
        textoIdade()
        img.setAttribute(`src`, `./Assets/jovem_homen.jpg`)
      }
      if (idade > 30) {
        textoIdade()
        img.setAttribute(`src`, `./Assets/adulto_homen.jpg`)
      }
      if (idade > 60) {
        textoIdade()
        img.setAttribute(`src`, `./Assets/velho_homen.jpg`)
      }
    } else if (sexo[1].checked) {
      genero = `Feminino`
      if (idade == 0 || idade < 2) {
        textoIdade()
        img.setAttribute(`src`, `./Assets/Bebe.jpg`)
      }
      if (idade > 2 && idade <= 10) {
        textoIdade()
        img.setAttribute(`src`, `./Assets/crianca_menina.jpg`)
      }
      if (idade > 10) {
        textoIdade()
        img.setAttribute(`src`, `./Assets/adolecente_menina.jpg`)
      }
      if (idade > 18) {
        textoIdade()
        img.setAttribute(`src`, `./Assets/jovem_mulher.jpg`)
      }
      if (idade > 30) {
        textoIdade()
        img.setAttribute(`src`, `./Assets/adulto_mulher.jpg`)
      }
      if (idade >= 60) {
        textoIdade()
        img.setAttribute(`src`, `./Assets/velho_mulher.jpg`)
      }
    }
    idadeHtml.style.textAlign = `center`
  }
}

// setInterval(carregar, 1000) // este esta fazendo a pagina atualizar a cada 1 segundo.
