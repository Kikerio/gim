function setup() {
	createCanvas(300, 500)
	background(225, 200, 20)
}

	// Se metti due // davanti a background fa l'effetto in cui crei tantissimi cerchi con il passaggio del mouse
	// Mentre se non hai // davanti a background tu controlli il cerchio (ti segue)
	// Quando vuoi inserire una funzione a due parole la seconda deve essere in maiuscola: mouse(minuscolo)X(seconda parola) 

functiondraw(){
	if (mouseIsPressed) {
		fill(random(255), random(255), random(255))
		ellipse(mouseX, mouseY, 60)
		ellipse(width-mouseX, mouseY, 60)
	}
}

