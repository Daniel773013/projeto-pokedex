alert("Oi, muito obrigado por acessar esse projeto, não clique na pokebola em momento algum!!!")

const botaoAlterarTema = document.getElementById("botao-alterar-tema")

const body = document.querySelector("body")

const imagemBotaoTrocaDeTema = document. querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-claro")

    body.classList.toggle("modo-claro")

if(modoEscuroEstaAtivo){


imagemBotaoTrocaDeTema.setAttribute("src", "/src/imagens/moon.png")

}else{

   
imagemBotaoTrocaDeTema.setAttribute("src", "/src/imagens/sun.png")
}
})
