const modalOverlay = document.querySelector('.modal-overlay') //seleciona dentro de document algum objeto(class, id, objeto, tags - qualquer coisa)
const cards = document.querySelectorAll('.card') // pega todos os card temos 8

for (let card of cards) {
    card.addEventListener("click", function(){ //addEventListener == ouvidor de evendo, fica esperando um evento no card || poderia ter várias classe associadas
        const videoID = card.getAttribute("id")
        modalOverlay.classList.add('active') //chama a lista de class, selecionou a lista de classes e queres fazer o que? adicionar
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoID}`
    }) 
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})