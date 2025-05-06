let drops = []; // array per contenere le gocce

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 200; i++) {
    drops.push(new Drop());
  }
}

function draw() {
  background(230, 230, 255); // azzurro chiaro

  for (let drop of drops) {
    drop.fall();   // aggiorna posizione
    drop.show();   // disegna la goccia
  }
}

// Classe per una singola goccia
class Drop {
  constructor() {
    this.x = random(width);          // posizione orizzontale casuale
    this.y = random(-500, -50);      // parte da sopra il canvas
    this.z = random(0, 20);          // "profondità" per variare velocità
    this.len = map(this.z, 0, 20, 10, 20); // lunghezza goccia
    this.yspeed = map(this.z, 0, 20, 2, 10); // velocità variabile
  }

  fall() {
    this.y += this.yspeed;
    if (this.y > height) {
      this.y = random(-200, -100);
      this.x = random(width);
    }
  }

  show() {
    let thick = map(this.z, 0, 20, 1, 3); // spessore in base alla profondità
    strokeWeight(thick);
    stroke(50, 100, 200); // blu pioggia
    line(this.x, this.y, this.x, this.y + this.len);
  }
}