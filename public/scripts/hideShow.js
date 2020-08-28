// Marcar a Div que vai receber a classe CSS
const content = document.querySelectorAll('.content')

// Marcar os buttons
const buttons = document.querySelectorAll('button')

//Laço de repetição para cada click
for (let [i,button] of buttons.entries()) {
    // O método entries() retorna um novo objeto Array Iterator que contém os pares chave/valor para cada índice no array
    
    button.addEventListener("click", function() {
        
        if(content[i].classList.contains("show")){
            content[i].classList.remove('show')
            content[i].classList.add('hide')
            button.innerHTML= "Mostrar"
        } else {
            content[i].classList.add('show')
            content[i].classList.remove('hide')
            button.innerHTML= "Esconder"
        }

        // console.log(i)
    })  
}
