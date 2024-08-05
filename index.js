var currentImage = 0;
var images = [
  'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnmLgMk5kx1lcRyJrrW9lV8e6hjk1V9b-wtg&usqp=CAU")',
];

document.addEventListener("DOMContentLoaded", function () {
  // Crie o elemento de áudio
  var audio = new Audio("./musica/djavan amor puro.mp3");

  // Adicione um manipulador de eventos de clique ao corpo do documento
  document.body.addEventListener("click", function () {
    // Tente reproduzir o áudio
    audio.play().catch(function (error) {
      // A reprodução automática foi bloqueada
      console.error("Erro ao reproduzir áudio:", error);
    });
  }); 
});

function fuja() {
  var botaoNao = document.getElementById("nao");
  var larguraJanela = window.innerWidth;
  var alturaJanela = window.innerHeight;

  var maxX = larguraJanela - botaoNao.offsetWidth;
  var maxY = alturaJanela - botaoNao.offsetHeight;

  var aleatorioX = Math.floor(Math.random() * maxX);
  var aleatorioY = Math.floor(Math.random() * maxY);

  botaoNao.style.left = aleatorioX + "px";
  botaoNao.style.top = aleatorioY + "px";
}

function parabens() {
  currentImage = (currentImage + 1) % images.length;
  document.body.style.backgroundImage = images[currentImage];
  document.getElementById("title").innerHTML =
    "Parabéns Rafaela, você fez uma ótima escolha!!! \n ";
  document.getElementById("pergunta").innerHTML = "";
  document.getElementById("img").src = "./img/amor.gif";
  document.getElementById("buttons").innerHTML = "";
  document.getElementById("text").innerHTML =
    "É um privilégio dividir a vida com você meu amor, TE AMO PRETA!!";
}
