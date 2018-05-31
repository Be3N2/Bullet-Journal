class category {

	constructor(width, height, positionX, positionY, msg, hexCol, rectSize) {
		//position relative in events object box
		this.WIDTH = width;
		this.HEIGHT = height;
		this.posX = positionX;
		this.posY = positionY;
		this.msg = msg;
		this.hex = hexCol;
		this.length = rectSize;
		this.input;
	}

	render(offsetX, offsetY) {
		//fill(200);
		//rect(this.posX + offsetX, this.posY + offsetY, this.WIDTH, this.HEIGHT);
		fill(this.hex);
		rect(this.posX + offsetX, this.posY + offsetY, this.length, this.length);
		fill(0);
		textAlign(LEFT, TOP);
		text(this.msg, this.posX + offsetX + (this.length * 1.5), this.posY + offsetY);
	
		//input = createInput(10, "text");
		//input.position(100, 100);

	}

	mouseAction() {
		
	}
}