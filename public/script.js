
const modalOverlay = document.querySelector('.modal-overlay')

const cards = document.querySelectorAll('.card')

for (let card of cards) {

    card.addEventListener("click", function(){
        const img = card.querySelector('img').src

        const title = card.querySelector('h3').innerText

        const by = card.querySelector('p').innerText

        modalOverlay.classList.add('active')

        modalOverlay.querySelector('.image img').src = img
        modalOverlay.querySelector('.title h3').textContent = title
        modalOverlay.querySelector('.by p').textContent = by
    })

}


// event.preventDefault() // evita o refresh da pagína.