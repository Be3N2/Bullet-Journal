const WIDTH = 12 * 25;
const HEIGHT = 12 * 25 * 3;
var data = {
	"1": {"name": "J", "days": 31},
	"2": {"name": "F", "days": 28},
	"3": {"name": "M", "days": 31},
	"4": {"name": "A", "days": 30},
	"5": {"name": "M", "days": 31},
	"6": {"name": "J", "days": 30},
	"7": {"name": "J", "days": 31},
	"8": {"name": "A", "days": 31},
	"9": {"name": "S", "days": 30},
	"10": {"name": "O", "days": 31},
	"11": {"name": "N", "days": 30},
	"12": {"name": "D", "days": 31}
};

var days = [];

function preload() {
	//data = loadJSON("data.json");
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background(180);
  
  createDays();

  for (dayObject in days) {
  	days[dayObject].draw();
  	//console.log(days[dayObject].month);
  }

}

function draw() {
 
}

function createDays() {
	let monthNum = 0;
	for (let prop in data) {
		monthNum++;
		let obj = data[prop];
		for (let i = 0; i < obj.days; i++) {
			let posX = (prop - 1) * WIDTH / 12;
			let posY = i * WIDTH / 12;
			days.push(new dayObj(obj.name, monthNum, i + 1, posX, posY, WIDTH / 12));
		}
	}
}

function mouseClicked() {
	//console.log(mouseX);
	//if its within the canvas
	if (mouseX < WIDTH && mouseY < HEIGHT) {
		for (let y = 0; y < 32; y++) {
			for (let x = 0; x < 12; x++) {
				if (mouseX > 0 + x * WIDTH/12 && mouseX < WIDTH/12 + x * WIDTH/12) {
					if (mouseY > 0 + y * WIDTH/12 && mouseY < WIDTH/12 + y * WIDTH/12) {
						for (dayObject in days) {
							if (days[dayObject].monthNum == x + 1 && days[dayObject].number == y + 1) {
								days[dayObject].selected = true;
							} else {
								days[dayObject].selected = false;
							}
							days[dayObject].draw();
						}
					}
				}
			}
		}
	}
}
