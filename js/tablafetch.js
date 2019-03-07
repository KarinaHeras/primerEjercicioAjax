
var contenido = document.querySelector('#contenido')
function traer(){
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    
    .then(data => {
          contenido.innerHTML= `
          <img src= "${ data.results[0].picture.large}" width= "120px" class="img-fluid reunded-circle">
          <p>${ data.results[0].name.title} ${data.results[0].name.first}</p>`

        })
    
}
