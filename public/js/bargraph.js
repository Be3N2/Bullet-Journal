class bargraph {

	constructor (width, height, offX, offY) {
		this.WIDTH = width;
		this.HEIGHT = height;
		this.offsetX = offX;
		this.offsetY = offY;
		this.days = [];
		this.eventData = [];
	}


	render() {

		//Clear bargraph area
		strokeWeight(0);
		stroke(255);
		rect(this.offsetX, this.offsetY, this.offsetX + this.WIDTH, this.offsetY + this.HEIGHT);


	}

	loadData() {

	}

	resize() {

	}
}