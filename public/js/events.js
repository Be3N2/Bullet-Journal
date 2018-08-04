class events {
	
	constructor(width, height, offX, offY, rectSize) {
		this.WIDTH = width;
		this.HEIGHT = height;
		this.offsetX = offX;
		this.offsetY = offY;
		this.eventKey = [];
		this.categories = [];
		this.length = rectSize;
		this.gap = 2.5 * rectSize;
		this.selectedNum = 0; //selected category id
		this.button;
		this.buttonX = 50;
		this.buttonY = 500;
	}

	render() {

		strokeWeight(0);
		fill(255);
		rect(this.offsetX, this.offsetY, this.WIDTH, this.HEIGHT);
		for (let categoryObj in this.categories) {
			this.categories[categoryObj].render(this.offsetX, this.offsetY);
		}

	}

	loadData(data) {
		
		this.eventKey = data;
		//javascript garbage collects all old category objects
		this.categories = [];

		for (let index in this.eventKey) {
			
			let object = this.eventKey[index];
			
			let nameWidth = textWidth(object.name);
			
			let posX = 50;
			let posY = 50 + (this.gap * index);
			this.buttonY = posY + this.gap;

			this.categories.push(new category(nameWidth + this.length * 2, this.length, posX, posY, object.name, object.color, this.length));
			
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

	getSelectedData() {
		for (let props in this.eventKey) {
			if (this.eventKey[props].id == this.selectedNum) {
				return this.eventKey[props];
			}
		}
	}

	setSelectedId(catNum) {
		let innerData = this.eventKey[catNum];
		this.selectedNum = innerData.id;
	}

	resize(posX, posY) {
		this.offsetX = posX;
		this.offsetY = posY;
		this.button.position(this.buttonX + this.offsetX, this.buttonY + this.offsetY * 1.4);
	}

	addEventButton(func) {
		this.button = createButton('Add Event');
		this.button.mousePressed(func);
		this.button.position(this.buttonX + this.offsetX, this.buttonY + this.offsetY * 1.4);
	}

	getEventData() {
		return this.eventKey;
	}
}