class bargraph {

	constructor (width, height, offX, offY) {
		this.WIDTH = width;
		this.HEIGHT = height;
		this.offsetX = offX;
		this.offsetY = offY;
		this.displayData = {};
		//5 being a guess at the count of categories
		this.barwidth = width / (2 * 5);

		this.max = 0;

	}

	render() {

		//Clear bargraph area
		strokeWeight(0);
		stroke(0);
		fill(200);
		rect(this.offsetX, this.offsetY, this.WIDTH, this.HEIGHT);

		let initialOff = this.WIDTH / 8;

		for (let i = 0; i < this.displayData.length; i++) {
			//scale barHeight from 0 - 0.9 of this.HEIGHT
			let barHeight = (this.displayData[i].count / this.max) * (this.HEIGHT * 0.9);
			let startY = this.offsetY + this.HEIGHT - barHeight;
			
			fill(this.displayData[i].color);		

			rect(this.offsetX + initialOff + (i * this.barwidth) , startY, this.barwidth, barHeight);
			
		}

	}

	loadData(eventData) {

		this.displayData = eventData;
		this.barWidth = this.WIDTH / (5 * eventData.length); 

		for (let i = 0; i < this.displayData.length; i++) {
			if (this.displayData[i].count > this.max)
				this.max = this.displayData[i].count;
		}
	}

	resize(xOffset, yOffset) {
		this.offsetX = xOffset;
		this.offsetY = yOffset;
	}
}