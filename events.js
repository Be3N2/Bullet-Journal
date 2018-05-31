class events {
	
	constructor(width, height, datas3, offX, offY, rectSize) {
		this.WIDTH = width;
		this.HEIGHT = height;
		this.datas = datas3;
		this.offsetX = offX;
		this.offsetY = offY;
		this.categories = [];
		this.length = rectSize;
	}

	update() {

	}

	render() {
		fill(200);
		rect(this.offsetX, this.offsetY, this.WIDTH, this.HEIGHT);
		for (let categoryObj in this.categories) {
			this.categories[categoryObj].render(this.offsetX, this.offsetY);
		}
		
	}

	createCategories() {
		let eventNumber = 0;
		for (let prop in this.datas) {
			eventNumber++;
			let object = this.datas[prop];
			let data = object.data;
			
			let posX = 50;
			let posY = 50 + (this.length * (eventNumber - 1));

			this.categories.push(new category(posX, posY, data.name, data.R, data.G, data.B, this.length));
		}
	}

	resize(offsetX, offsetY) {
		this.posX = offsetX;
		this.posY = offsetY;
	}

}