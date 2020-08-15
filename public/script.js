
const cards = document.querySelectorAll('.card')

for (let card of cards) {

    card.addEventListener("click", function(){
        window.location.href = `/recipes/${card}`
    })

}


// event.preventDefault() // evita o refresh da pagína.