class category {

	constructor(positionX, positionY, msg, hexCol, rectSize) {
		//position relative in events object box
		this.posX = positionX;
		this.posY = positionY;
		this.msg = msg;
		this.hex = hexCol;
		this.length = rectSize;
	}

	render(offsetX, offsetY) {
		console.log(this.hex);
		fill(this.hex);
		rect(this.posX + offsetX, this.posY + offsetY, this.length, this.length);
		fill(0);
		textAlign(LEFT, TOP);
		text(this.msg, this.posX + offsetX + (this.length * 1.5), this.posY + offsetY);
	}

	mouseAction() {
		
	}
}