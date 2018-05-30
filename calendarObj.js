class calendarObj {

	constructor (width, height, datas2) {
		this.datas = datas2;
		this.days = [];
		this.WIDTH = width;
		this.HEIGHT = height;
	}

	createDays() {
		let monthNum = 0;
		for (let prop in this.datas) {
			monthNum++;
			let obj = this.datas[prop];
			for (let i = 0; i < obj.days; i++) {
				let posX = (prop - 1) * this.WIDTH / 12;
				let posY = i * this.WIDTH / 12;
				this.days.push(new dayObj(obj.name, monthNum, i + 1, posX, posY, this.WIDTH / 12));
			}
		}
	}

	update() {

	}

	render() {
		for (let dayObject in this.days) {
		  	this.days[dayObject].draw();
		  }
	}

	mouseAction(mouseX, mouseY) {
		//if its within the canvas
		if (mouseX < this.WIDTH && mouseY < this.HEIGHT) {
			for (let y = 0; y < 32; y++) {
				for (let x = 0; x < 12; x++) {
					if (mouseX > 0 + x * this.WIDTH/12 && mouseX < this.WIDTH/12 + x * this.WIDTH/12) {
						if (mouseY > 0 + y * this.WIDTH/12 && mouseY < this.WIDTH/12 + y * this.WIDTH/12) {
							for (let dayObject in this.days) {
								if (this.days[dayObject].monthNum == x + 1 && this.days[dayObject].number == y + 1) {
									this.days[dayObject].selected = true;
								} else {
									this.days[dayObject].selected = false;
								}
								this.days[dayObject].draw();
							}
						}
					}
				}
			}
		}
	}
	
}