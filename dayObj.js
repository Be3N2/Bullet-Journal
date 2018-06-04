class dayObj {

	constructor (month, monthNum, number, inX, inY, width) {
		this.month = month;
		this.monthNum = monthNum;
		this.number = number;
		this.x = inX;
		this.y = inY;
		this.width = width;
		
		//this.fillColor = "#0AB4B4";
		this.fillColor = "#ADD8E6";
		
		this.selected = false;

	}

	draw(offsetX, offsetY) {
		
		fill(this.fillColor);
		
		if (!this.selected) {
			strokeWeight(.5);
		} else {
			strokeWeight(2);
		}

		rect(this.x + offsetX, this.y + offsetY, this.width, this.width);
	}
}