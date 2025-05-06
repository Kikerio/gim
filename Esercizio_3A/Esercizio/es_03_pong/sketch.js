let posX 
let velX

function setup() {
	createCanvas(500, 400)

	posX = 200
	velX = 7
}

function draw() {

	posX = posX + velX
	
	if(posX >= width) {
		velX = -velX
	} else if (posX < 0){
	velX = -velX
	}

	background(190)

	ellipse(posX, 100, 25)


}