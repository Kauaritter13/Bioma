function showModal() {
  document.getElementById("modalOverlay").style.display = "flex";
}

function closeModal() {
  document.getElementById("modalOverlay").style.display = "none";
}

function startGame() {
  document.getElementById("homeScreen").style.display = "none";
  document.getElementById("characterSelection").style.display = "block";
}

function selectCharacter(character) {
  document.getElementById("characterSelection").style.display = "none";
  document.getElementById("gameIntro").style.display = "block";
  document.getElementById("chosenCharacter").innerText = `Você escolheu: ${character}`;
}

function startAdventure() {
  document.body.innerHTML = `
    <div class="container">
      <h1>Boa aventura, Explorador!</h1>
      <p>Prepare-se para desafios emocionantes no Bioma Brasileiro.</p>
    </div>
  `;
}
