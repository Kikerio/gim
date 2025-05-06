//https://p5js.org/reference/
//questa funzione viene chiamata all'inizio 
function setup() {
	createCanvas(400, 400)
}
//mentre questa funzione è un ciclo
// è eseguita fino alla fine dei giorni
function draw() {

	//colore di sfondo 
	background(200, 200, 200)

	// peso della traccia 
	strokeWeight(3)
	stroke(255, 120, 0)

	// pixel 
	point(20, 30)
	
	line(100, 100, 150, 300) 

	stroke(0, 200, 100)

	//riempimento 
	fill(200, 200, 255, 100)

	rect(120, 115, 60, 80)

	ellipse(180, 140, 70, 70)
	// non riempire l'oggeto con il fill 
	noFill()
	ellipse(200, 140, 70, 70)

	fill(255, 0, 0)
	// per iniziare una forma composta da vertici (punti)
	beginShape()
	vertex(200, 200)
	vertex(300, 210)
	vertex(360, 110)
	endShape()

}