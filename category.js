class category {

	constructor(positionX, positionY, msg, R, G, B, rectSize) {
		//position relative in events object box
		this.posX = positionX;
		this.posY = positionY;
		this.msg = msg;
		this.red = R;
		this.green = G;
		this.blue = B;
		this.length = rectSize;
	}

	render(offsetX, offsetY) {
		fill(this.red, this.green, this.blue);
		rect(this.posX + offsetX, this.posY + offsetY, this.length, this.length);
		fill(0);
		textAlign(LEFT, TOP);
		text(this.msg, this.posX + offsetX + this.length, this.posY + offsetY);
	}

	mouseAction() {
		
	}
}