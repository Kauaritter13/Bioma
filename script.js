function jogar() {
  document.getElementById("characterSelection").style.display = "block";
  document.querySelector(".container").style.display = "none";
}

function abrirModal() {
  document.getElementById("modalOverlay").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modalOverlay").style.display = "none";
}

function selecionarPersonagem(personagem) {
  document.getElementById("characterSelection").style.display = "none";
  document.getElementById("gameIntro").style.display = "block";
  document.getElementById("selectedCharacter").textContent = personagem;
}

function iniciarJogo() {
  alert("O jogo está em construção. Em breve, você poderá explorar os biomas com seu personagem!");
}
