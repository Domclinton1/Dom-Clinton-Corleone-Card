function toggleAudio() {
    var audio = document.getElementById("myAudio");
    if (audio.paused) {
      audio.play();
      document.querySelector('.play-icon').innerHTML = '&#9616;&#9616;'; // Paused icon
    } else {
      audio.pause();
      document.querySelector('.play-icon').innerHTML = '&#9658;'; // Play icon
    }
  }
  window.onload = toggleAudio;
function dlsd(){
  var click = window.document.getElementById('dlsd')
  window.open("https://domlinksolucoesdigitais.com.br", '_blank')
}
function drop(){
  var click = window.document.getElementById('drop')
  window.open("https://casaraotemdetudo.com/", '_blank' ) 
}
function vidro(){
  var click = window.document.getElementById('vidro')
  window.open("https://www.instagram.com/vidracaria_visaocristalina/", '_blank')
}
function  create(){
  var click = window.document.getElementById('create')
  window.open("https://wa.me/5531994038782?text=Ola,%20quero%20fazer%20um%20orçamento%20sobre gestão de tráfego pago...")
}

function insta(){
  var click = window.document.getElementById('insta')
  window.open("https://instagram.com/domclintoncorleone/", '_blank')
}
function linkedin(){
  var click = window.document.getElementById('linkedin')
  window.open("https://www.linkedin.com/in/clinton-ribeiro-964790242/", '_blank')
}
function git(){
  var click = window.document.getElementById('git')
  window.open("https://github.com/Domclinton1/", '_blank')
}
function face(){
  var click = window.document.getElementById('face')
  window.open("https://www.facebook.com/profile.php?id=100084934232291", '_blank')
}
function wpp(){
  var click = window.document.getElementById('wpp')
  window.open("https://wa.me/5531972069375", '_blank')
}
function dlsdinsta(){
  var click = window.document.getElementById('dlsdinsta')
  window.open("https://www.instagram.com/domlink_solucoesdigitais/", '_blank')
}
function cttinsta(){
  var click = window.document.getElementById('cttinsta')
  window.open("https://www.instagram.com/celular_paradise/", '_blank')
}

window.onload = function() {
  const body = document.body;
  const img = document.querySelector("#profile img");
  
  // Inicialmente, a página é carregada no modo dark
  img.setAttribute("src", "./assets/perfil.jpeg");
}

function toggleMode() {
  const body = document.body;
  body.classList.toggle("dark");
  body.classList.toggle("light");
  
  
  // Pegar a imagem
  const img = document.querySelector("#profile img");

  // Substituir a imagem
  if (body.classList.contains("light")) {
    // Se estiver no modo light, adicionar a imagem light
    img.setAttribute("src", "./assets/profile2.jpeg");
  } else {
    // Se estiver no modo dark, manter a imagem normal
    img.setAttribute("src", "./assets/perfil.jpeg");
  }
}