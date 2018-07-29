class calendarObj {

	constructor (width, height, yearStruct, offX, offY) {
		this.setupStruct = yearStruct;
		this.days = [];
		this.eventData = [];
		this.WIDTH = width;
		this.HEIGHT = height;
		this.length = width / 12;
		this.offsetX = offX;
		this.offsetY = offY;

		this.selectedIndex = 0;
	}

	createDays() {
		
		for (let index in this.setupStruct) {

			let obj = this.setupStruct[index];
			for (let i = 0; i < obj.days; i++) {
				let posX = (index) * this.length;
				let posY = i * this.length;
				this.days.push(new dayObj(obj.name, index, i + 1, posX, posY, this.length));
			}
		}
	}

	update() {

	}

	render() {
		//clear calendar area + label area
		fill(255);
		strokeWeight(0);
		rect(this.offsetX - this.length, this.offsetY - this.length, this.WIDTH + this.length * 2, this.HEIGHT + this.length * 2);
		strokeWeight(1);

		//draw all the days
		for (let dayObject in this.days) {
		  	this.days[dayObject].draw(this.offsetX, this.offsetY);
		}
		for (let dayObject in this.days) {
			if (this.days[dayObject].selected) {
				this.days[dayObject].draw(this.offsetX, this.offsetY);
			}
		}
		//draw the labels
		this.renderLabels();
	}

	renderLabels() {
		let monthNum = 0;

		strokeWeight(1);
		fill(0);
		textSize(18);
		textAlign(LEFT, TOP);

		for (let prop in this.setupStruct) {
			monthNum++;
			let obj = this.setupStruct[prop];
			
			let posX = this.offsetX;
			posX += (monthNum - 1) * this.length;

			let posY = this.offsetY - this.length;

			text(obj.name,posX,posY);
			
		}

		for (let i = 1; i <= 30; i++) {
			if (i % 5 == 0 || i == 1) {
				let posX = this.offsetX - this.length;
				let posY = this.offsetY;
				posY += this.length * (i - 1);
				text(i, posX, posY);
			}
		}
	}

	mouseAction(mouseX, mouseY) {
		//if its within the canvas
		mouseX -= this.offsetX;
		mouseY -= this.offsetY;
		if (mouseX < this.WIDTH && mouseY < this.HEIGHT) {
			for (let y = 0; y < 32; y++) {
				for (let x = 0; x < 12; x++) {
					if (mouseX > 0 + x * this.length && mouseX <= this.length + x * this.length) {
						if (mouseY > 0 + y * this.length && mouseY <= this.length + y * this.length) {
							for (let index in this.days) {
								if (this.days[index].monthNum == x && this.days[index].number == y + 1) {
									this.days[index].selected = true;
									this.selectedIndex = index;
								} else {
									this.days[index].selected = false;
								}
							}
						}
					}
				}
			}
		}
		this.render();
	}

	resize(xOffset, yOffset) {
		this.offsetX = xOffset;
		this.offsetY = yOffset;
	}
	
	addEvent(event_id, fillCol, details) {
		let eventObj = {"day": Number(this.selectedIndex), "event_id": event_id, "details": details};
		this.eventData.push(eventObj);

		this.days[this.selectedIndex].fillColor = fillCol;
		this.days[this.selectedIndex].draw();
	}

	getDayData() {
		return this.eventData;
	}

	loadData(data) { 
		this.eventData = data.days;
		let eventKey = data.events;

		//draw out all the days with new data
		for (let i = 0; i < this.eventData.length; i++) {
			for (let j = 0; j < eventKey.length; j++) {
				if (eventKey[j].id == this.eventData[i].event_id) {
					this.days[this.eventData[i].day].fillColor = eventKey[j].color;
					this.days[this.eventData[i].day].draw();
				}
			}
		}

		this.render();
	}
}