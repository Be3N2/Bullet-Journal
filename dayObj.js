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
		
		fill(this.fillColorx, this.fillcolorY, this.fillcolorZ);
		
		if (!this.selected) {
			strokeWeight(.5);
		} else {
			strokeWeight(2);
		}

		rect(this.x + offsetX, this.y + offsetY, this.width, this.width);
	}
}