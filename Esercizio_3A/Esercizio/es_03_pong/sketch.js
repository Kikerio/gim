// === Variabili principali ===
let x, y;                        // Posizione della pallina
let dx = 0, dy = 0;              // Direzione di movimento
let r = 30;                      // Raggio attuale
let targetR = 30;                // Raggio verso cui cresce
let speedMultiplier = 2.5;       // Velocità iniziale aumentata
let pallinaColor;                // Colore della pallina
let backgroundColor;             // Colore complementare dello sfondo
let gameStarted = false;         // Stato del gioco
let cellSize = 40;               // Dimensione della scacchiera

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100);      // Colori saturi e brillanti
  textAlign(CENTER, CENTER);
  textSize(32);
  textStyle(BOLD);
  noStroke();

  pallinaColor = getRandomColor();          // Colore iniziale della pallina
  backgroundColor = getComplementaryColor(pallinaColor); // Sfondo complementare
}

function draw() {
  // === Schermata iniziale ===
  if (!gameStarted) {
    background(0);
    fill(0, 0, 100);
    text("CLICCA UN PUNTO PER INIZIARE", width / 2, height / 2);
    return;
  }

  drawCheckerboard(); // Disegna scacchiera dinamica

  // Crescita fluida della pallina
  r = lerp(r, targetR, 0.08); // Leggermente più veloce

  // Disegna la pallina
  fill(pallinaColor);
  ellipse(x, y, r * 2);

  // Movimento
  x += dx * speedMultiplier;
  y += dy * speedMultiplier;

  let collided = false;

  // Collisioni con i bordi
  if (x + r > width || x - r < 0) {
    dx *= -1;
    collided = true;
  }

  if (y + r > height || y - r < 0) {
    dy *= -1;
    collided = true;
  }

  // Al rimbalzo: cambia colore, velocità e dimensione
  if (collided) {
    pallinaColor = getRandomColor();
    backgroundColor = getComplementaryColor(pallinaColor);
    speedMultiplier *= 1.25;   // 💥 Aumento più deciso della velocità
    targetR += 12;             // 💥 Crescita più marcata della pallina
  }

  // Reset se troppo grande
  if (r * 2 >= width || r * 2 >= height) {
    resetGame();
  }
}

function mousePressed() {
  if (!gameStarted) {
    x = mouseX;
    y = mouseY;
    let angle = atan2(height / 2 - y, width / 2 - x);
    dx = cos(angle);
    dy = sin(angle);
    gameStarted = true;
  }
}

function drawCheckerboard() {
  for (let i = 0; i < width; i += cellSize) {
    for (let j = 0; j < height; j += cellSize) {
      if ((i + j) / cellSize % 2 === 0) {
        fill(backgroundColor); // Colore complementare della pallina
      } else {
        fill(0, 0, 0); // Nero
      }
      rect(i, j, cellSize, cellSize);
    }
  }
}

function getRandomColor() {
  let hueValue = random(0, 360);
  return color(hueValue, 100, 100);
}

function getComplementaryColor(col) {
  let hueValue = (hue(col) + 180) % 360;
  return color(hueValue, 100, 100);
}

function resetGame() {
  gameStarted = false;
  r = 30;
  targetR = 30;
  speedMultiplier = 2.5; // Velocità iniziale aumentata
  pallinaColor = getRandomColor();
  backgroundColor = getComplementaryColor(pallinaColor);
}