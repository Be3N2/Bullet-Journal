class category {

	constructor(positionX, positionY, length, msg, R, G, B) {
		//position relative in events object box
		this.posX = positionX;
		this.posY = positionY;
		this.rectLength = length;
		this.msg = msg;
		this.red = R;
		this.green = G;
		this.blue = B;
	}

	render(offsetX, offsetY) {
		fill(this.red, this.green, this.blue);
		rect(this.posX, this.posY, this.length, this.length);
		fill(0);
		textAlign(LEFT, TOP);
		text(this.msg, this.posX + this.length, this.posY);
	}

	mouseAction() {
		
	}
}