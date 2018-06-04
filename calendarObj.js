class calendarObj {

	constructor (width, height, datas2, offX, offY) {
		this.datas = datas2;
		this.days = [];
		this.WIDTH = width;
		this.HEIGHT = height;
		this.length = width / 12;
		this.offsetX = offX;
		this.offsetY = offY;

		this.selectedIndex = 0;
	}

	createDays() {
		let monthNum = 0;
		for (let prop in this.datas) {
			monthNum++;
			let obj = this.datas[prop];
			for (let i = 0; i < obj.days; i++) {
				let posX = (prop - 1) * this.length;
				let posY = i * this.length;
				this.days.push(new dayObj(obj.name, monthNum, i + 1, posX, posY, this.length));
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

		for (let prop in this.datas) {
			monthNum++;
			let obj = this.datas[prop];
			
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
							for (let dayObject in this.days) {
								if (this.days[dayObject].monthNum == x + 1 && this.days[dayObject].number == y + 1) {
									this.days[dayObject].selected = true;
									this.selectedIndex = dayObject;
								} else {
									this.days[dayObject].selected = false;
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
	
}