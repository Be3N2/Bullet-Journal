class bargraph {

	constructor (width, height, offX, offY) {
		this.WIDTH = width;
		this.HEIGHT = height;
		this.offsetX = offX;
		this.offsetY = offY;
		//want a format like this
		//{event_id: id, col: col, count: count, name: name}
		this.displayData = [];
		//5 being a guess at the count of categories
		this.barwidth = width / (2 * 5);

		this.max = 0;

	}


	render() {

		//Clear bargraph area
		strokeWeight(0);
		stroke(200);
		rect(this.offsetX, this.offsetY, this.WIDTH, this.HEIGHT);

		let initialOff = this.WIDTH / 8;

		for (let i = 0; i < this.eventData.length; i++) {
			//scale barHeight from 0 - 0.9 of this.HEIGHT
			let barHeight = (eventData[i].count / this.max) * (this.HEIGHT * 0.9);
			let startY = this.offsetY + this.HEIGHT - barHeight;			
			rect(this.offsetX + initialOff, startY, this.barwidth, barHeight);
			
		}

	}

	loadData(eventData) {

		this.displayData = eventData;
		this.barWidth = this.WIDTH / (5 * eventData.length); 

		for (let i = 0; i < this.displayData.length; i++) {
			if (displayData[i].count > this.max)
				displayData[i].count = this.max;
		}

		render();
	}

	resize(xOffset, yOffset) {
		this.offsetX = xOffset;
		this.offsetY = yOffset;
	}
}