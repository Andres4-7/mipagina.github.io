function buscarJuego(){

let input = document.getElementById("searchInput").value.toLowerCase()
let juegos = document.querySelectorAll(".card")

juegos.forEach(function(card){

let titulo = card.innerText.toLowerCase()

if(titulo.includes(input)){
card.style.display="block"
}else{
card.style.display="none"
}

})

}
