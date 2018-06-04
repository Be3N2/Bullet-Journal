class events {
	
	constructor(width, height, datas3, offX, offY, rectSize) {
		this.WIDTH = width;
		this.HEIGHT = height;
		this.datas = datas3;
		this.offsetX = offX;
		this.offsetY = offY;
		this.categories = [];
		this.length = rectSize;
		this.gap = 2.5 * rectSize;
		this.selectedNum = 0; //selected category id
		this.button;
		this.buttonX = 50;
		this.buttonY;
	}

	render() {
		//this.addEventButton();

		strokeWeight(0);
		fill(255);
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
			let nameWidth = textWidth(data.name);
			
			let posX = 50;
			let posY = 50 + (this.gap * (eventNumber - 1));
			this.buttonY = posY + this.gap;

			this.categories.push(new category(nameWidth + this.length * 2, this.length, posX, posY, data.name, data.color, this.length));
		}
	}

	mouseAction(mouseX, mouseY) {
		let triggered = false;
		for (let catNum in this.categories) {
			let positionX = this.categories[catNum].posX + this.offsetX;
			let positionY = this.categories[catNum].posY + this.offsetY;
			
			if ((mouseX > positionX && mouseX <= positionX + this.categories[catNum].WIDTH) && 
				(mouseY > positionY && mouseY <= positionY + this.categories[catNum].HEIGHT)) {
				this.categories[catNum].selected = true;
				this.setSelectedId(catNum);
				triggered = true;
			} else {
				this.categories[catNum].selected = false;
			}
		}
		if (triggered) this.render();
	}

	getSelectedId() {		
		this.selected;
	}

	setSelectedId(catNum) {
		for (let props in this.datas) {
			if (this.datas[props] == catNum) {
				this.selected = this.datas[props].id;
			}
		}
	}

	resize(posX, posY) {
		this.offsetX = posX;
		this.offsetY = posY;
	}

	addEventButton(func) {
		this.button = createButton('Add Event');
		this.button.position(this.buttonX + this.offsetX, this.buttonY + this.offsetY);
		this.button.mousePressed(func);
	}

}