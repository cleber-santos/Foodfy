
const cards = document.querySelectorAll('.card')

const button = document.querySelector('.btn-toggle')

const content = document.querySelector('.content')

for (let i = 0; cards.length; i++) {

    cards[i].addEventListener("click", function(){
        window.location.href = `/recipes/${i}`
    })
}


button.addEventListener('click', function(){

})

// event.preventDefault() // evita o refresh da pagína.