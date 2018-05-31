class events {
	
	constructor(width, height, datas3, offX, offY) {
		this.WIDTH = width;
		this.HEIGHT = height;
		this.datas = datas3;
		this.offsetX = offX;
		this.offsetY = offY;
		this.categories = [];
	}

	update() {

	}

	render() {
		for (let catgoryObj in this.categories) {
			this.categories[categoryObj].render();
		}
	}

	createCategories() {
		for (let prop in this.datas) {
			console.log(prop.id);
			console.log(prop.data);

		}
	}

	resize(offsetX, offsetY) {
		this.posX = offsetX;
		this.posY = offsetY;
	}

}