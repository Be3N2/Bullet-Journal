class dayObj {

	constructor (month, monthNum, number, inX, inY, width) {
		this.month = month;
		this.monthNum = monthNum;
		this.number = number;
		this.x = inX;
		this.y = inY;
		this.width = width;
		
		this.fillColorx = 10;
		this.fillcolorY = 180;
		this.fillcolorZ = 180;

		this.selected = false;

	}

	draw(offsetX, offsetY) {
		if (!this.selected) {
			fill(this.fillColorx, this.fillcolorY, this.fillcolorZ);
		} else {
			fill(255, 0, 255);
		}
		rect(this.x + offsetX, this.y + offsetY, this.width, this.width);
	}
}