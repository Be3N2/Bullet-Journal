class header {

	constructor(width, height, offsetX, offsetY, length) {
		this.WIDTH = width;
		this.HEIGHT = height;
		this.posX = offsetX;
		this.posY = offsetY;
		this.rectLength = length;
	}

	update() {

	}

	render() {
		fill(0);
		textSize(100);
		textAlign(RIGHT, TOP);
		text("<2018>", this.WIDTH / 2, 50);
		
		textSize(55);
		textAlign(LEFT, TOP);
		text("in pixels", this.WIDTH / 2, 125);

	}

	resize(width, height) {
		this.WIDTH = width;
		this.HEIGHT = height;
	}
}